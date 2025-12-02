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
"""cross-filter-global-scoping

Revision ID: 4ea966691069
Revises: 7e67aecbf3f1
Create Date: 2023-05-11 12:41:38.095717

"""

# revision identifiers, used by Alembic.
revision = "4ea966691069"
down_revision = "7e67aecbf3f1"

import copy
import logging
import time

import sqlalchemy as sa
from alembic import op
from sqlalchemy.ext.declarative import declarative_base

from superset import db
from superset.utils import json

Base = declarative_base()
logger = logging.getLogger(__name__)

BATCH_SIZE = 2000  # tune based on DB speed


class Dashboard(Base):
    __tablename__ = "dashboards"
    id = sa.Column(sa.Integer, primary_key=True)
    json_metadata = sa.Column(sa.Text)


def upgrade():
    bind = op.get_bind()
    session = db.Session(bind=bind)

    q = session.query(Dashboard.id, Dashboard.json_metadata)
    total = q.count()

    print(f"[migration:4ea966691069] Dashboards to scan: {total}")

    offset = 0
    processed = 0
    start = time.time()

    while offset < total:
        batch_start = time.time()

        rows = (
            session.query(Dashboard)
            .order_by(Dashboard.id)
            .offset(offset)
            .limit(BATCH_SIZE)
            .all()
        )

        if not rows:
            break

        for dash in rows:
            try:
                metadata = json.loads(dash.json_metadata or "{}")
            except Exception:
                continue

            needs_upgrade = True
            new_cfg = {}

            for cfg in metadata.get("chart_configuration", {}).values():
                if not isinstance(cfg, dict):
                    continue

                chart_id = int(cfg.get("id", 0))
                scope = cfg.get("crossFilters", {}).get("scope", {})

                # Already upgraded → skip entirely
                if not isinstance(scope, dict):
                    needs_upgrade = False
                    continue

                excluded = [int(i) for i in scope.get("excluded", [])]

                new_cfg[chart_id] = copy.deepcopy(cfg)
                new_cfg[chart_id]["id"] = chart_id
                new_cfg[chart_id]["crossFilters"]["scope"]["excluded"] = excluded

                if scope.get("rootPath") == ["ROOT_ID"] and excluded == [chart_id]:
                    new_cfg[chart_id]["crossFilters"]["scope"] = "global"

            metadata["chart_configuration"] = new_cfg

            if needs_upgrade:
                dash.json_metadata = json.dumps(metadata)

        session.commit()

        processed += len(rows)
        offset += BATCH_SIZE

        elapsed = time.time() - start
        pct = processed / total * 100
        eta = (elapsed / processed) * (total - processed) if processed else 0

        print(
            f"[migration:4ea966691069] "
            f"{processed}/{total} ({pct:.2f}%) | "
            f"Batch {len(rows)} rows | "
            f"Elapsed {elapsed:.1f}s | ETA {eta:.1f}s"
        )

    print(f"[migration:4ea966691069] Completed in {time.time() - start:.1f}s")

    session.close()


def downgrade():
    # apply same batching pattern here if you want — ask and I’ll generate it
    pass
