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
"""delete obsolete Druid NoSQL slice parameters

Revision ID: 863adcf72773
Revises: 6d05b0a70c89
Create Date: 2023-07-18 15:30:43.695135

"""

# revision identifiers, used by Alembic.
revision = "863adcf72773"
down_revision = "6d05b0a70c89"

import logging
import time

from alembic import op
from sqlalchemy import Column, Integer, Text
from sqlalchemy.ext.declarative import declarative_base

from superset import db
from superset.utils import json

Base = declarative_base()
logger = logging.getLogger(__name__)

BATCH_SIZE = 2000  # Tune to DB speed


class Slice(Base):
    __tablename__ = "slices"
    id = Column(Integer, primary_key=True)
    params = Column(Text)
    query_context = Column(Text)


def upgrade():
    bind = op.get_bind()
    session = db.Session(bind=bind)

    # Count rows first
    total = session.query(Slice.id).count()
    print(f"[migration 863adcf72773] Total slices: {total}")

    offset = 0
    processed = 0
    start = time.time()

    while offset < total:
        batch_start = time.time()

        rows = (
            session.query(Slice)
            .order_by(Slice.id)
            .offset(offset)
            .limit(BATCH_SIZE)
            .all()
        )

        if not rows:
            break

        for slc in rows:
            updated = False

            # ------------ params ------------
            if slc.params:
                try:
                    params = json.loads(slc.params)
                    if "druid_time_origin" in params:
                        del params["druid_time_origin"]
                        updated = True
                    if "granularity" in params:
                        del params["granularity"]
                        updated = True

                    if updated:
                        slc.params = json.dumps(params)
                except Exception:
                    logger.exception(
                        f"[migration 863adcf72773] Unable to parse params for slice {slc.id}"
                    )

            # ------------ query_context ------------
            if slc.query_context:
                try:
                    qc = json.loads(slc.query_context)
                    qc_updated = False

                    form_data = qc.get("form_data") or {}
                    for key in ["druid_time_origin", "granularity"]:
                        if key in form_data:
                            del form_data[key]
                            qc_updated = True

                    for query in qc.get("queries", []):
                        for key in ["druid_time_origin", "granularity"]:
                            if key in query:
                                del query[key]
                                qc_updated = True

                        extras = query.get("extras")
                        if extras and "having_druid" in extras:
                            del extras["having_druid"]
                            qc_updated = True

                    if qc_updated:
                        slc.query_context = json.dumps(qc)

                except Exception:
                    logger.exception(
                        f"[migration 863adcf72773] Unable to parse query context for slice {slc.id}"
                    )

        session.commit()

        batch_time = time.time() - batch_start
        processed += len(rows)
        offset += BATCH_SIZE

        pct = processed / total * 100
        elapsed = time.time() - start
        eta = (elapsed / processed) * (total - processed) if processed else 0

        print(
            f"[migration 863adcf72773] "
            f"{processed}/{total} slices ({pct:.2f}%) | "
            f"batch={len(rows)} | "
            f"batch_time={batch_time:.2f}s | "
            f"elapsed={elapsed:.1f}s | ETA={eta:.1f}s"
        )

    print(f"[migration 863adcf72773] Completed in {time.time() - start:.1f}s")
    session.close()


def downgrade():
    pass
