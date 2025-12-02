# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
"""Fix schema perm for datasets

Revision ID: 0769ef90fddd
Revises: ee179a490af9
Create Date: 2023-08-02 15:23:58.242396

"""

# revision identifiers, used by Alembic.
revision = "0769ef90fddd"
down_revision = "ee179a490af9"

import sqlalchemy as sa
from alembic import op
from sqlalchemy.dialects.sqlite.base import SQLiteDialect
from sqlalchemy.ext.declarative import declarative_base

from superset import db

Base = declarative_base()

BATCH_SIZE = 5000


class SqlaTable(Base):
    __tablename__ = "tables"

    id = sa.Column(sa.Integer, primary_key=True)
    schema = sa.Column(sa.String(255))
    schema_perm = sa.Column(sa.String(1000))
    database_id = sa.Column(sa.Integer, sa.ForeignKey("dbs.id"))


class Slice(Base):
    __tablename__ = "slices"

    id = sa.Column(sa.Integer, primary_key=True)
    schema_perm = sa.Column(sa.String(1000))
    datasource_id = sa.Column(sa.Integer)


class Database(Base):
    __tablename__ = "dbs"

    id = sa.Column(sa.Integer, primary_key=True)
    database_name = sa.Column(sa.String(250))


def fetch_id_batches(session, model):
    """Yield sequential ID windows — avoids slow OFFSET scans."""
    last_id = 0
    max_id = session.query(sa.func.max(model.id)).scalar() or 0

    while last_id < max_id:
        yield last_id, last_id + BATCH_SIZE
        last_id += BATCH_SIZE


def fix_datasets_schema_perm(session):
    print("Starting dataset schema_perm migration...")

    for start_id, end_id in fetch_id_batches(session, SqlaTable):
        batch = (
            session.query(SqlaTable, Database.database_name)
            .join(Database)
            .filter(SqlaTable.id > start_id, SqlaTable.id <= end_id)
            .filter(SqlaTable.schema.isnot(None))
            .filter(
                SqlaTable.schema_perm
                != sa.func.concat(
                    "[", Database.database_name, "].[", SqlaTable.schema, "]"
                )
            )
        ).all()

        if not batch:
            continue

        for row in batch:
            row.SqlaTable.schema_perm = (
                f"[{row.database_name}].[{row.SqlaTable.schema}]"
            )

        session.commit()
        print(f"  → Updated dataset rows in ID range {start_id}–{end_id}")


def fix_charts_schema_perm(session):
    print("Starting chart schema_perm migration...")

    for start_id, end_id in fetch_id_batches(session, Slice):
        batch = (
            session.query(Slice, SqlaTable, Database.database_name)
            .join(SqlaTable, Slice.datasource_id == SqlaTable.id)
            .join(Database, SqlaTable.database_id == Database.id)
            .filter(Slice.id > start_id, Slice.id <= end_id)
            .filter(SqlaTable.schema.isnot(None))
            .filter(
                Slice.schema_perm
                != sa.func.concat(
                    "[", Database.database_name, "].[", SqlaTable.schema, "]"
                )
            )
        ).all()

        if not batch:
            continue

        for row in batch:
            row.Slice.schema_perm = f"[{row.database_name}].[{row.SqlaTable.schema}]"

        session.commit()
        print(f"  → Updated slice rows in ID range {start_id}–{end_id}")


def upgrade():
    bind = op.get_bind()
    session = db.Session(bind=bind)

    if isinstance(bind.dialect, SQLiteDialect):
        print("SQLite detected — skipping schema_perm migration.")
        return

    print("Beginning optimized schema_perm migration...")

    fix_datasets_schema_perm(session)
    fix_charts_schema_perm(session)

    session.close()
    print("schema_perm migration complete.")


def downgrade():
    pass
