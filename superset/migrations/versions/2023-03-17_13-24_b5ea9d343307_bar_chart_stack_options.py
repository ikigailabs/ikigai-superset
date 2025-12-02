import time

from alembic import op
from sqlalchemy import Column, Integer, String, Text
from sqlalchemy.ext.declarative import declarative_base

from superset import db
from superset.utils import json

# revision identifiers
revision = "b5ea9d343307"
down_revision = "d0ac08bb5b83"

Base = declarative_base()

CHART_TYPE = "%echarts_timeseries%"
BATCH_SIZE = 2000  # tune if needed


class Slice(Base):
    __tablename__ = "slices"
    id = Column(Integer, primary_key=True)
    viz_type = Column(String(250))
    params = Column(Text)


def upgrade():
    bind = op.get_bind()
    session = db.Session(bind=bind)

    q = session.query(Slice).filter(Slice.viz_type.like(CHART_TYPE))
    total = q.count()

    print(f"[migration:b5ea9d343307] Total slices requiring scan: {total}")

    offset = 0
    processed = 0
    start = time.time()

    while offset < total:
        batch_start_time = time.time()

        batch = q.offset(offset).limit(BATCH_SIZE).all()
        if not batch:
            break

        for slc in batch:
            try:
                params = json.loads(slc.params)
                params["stack"] = "Stack" if params.get("stack") else None
                slc.params = json.dumps(params, sort_keys=True)
            except Exception:
                # don't stop the migration
                continue

        session.commit()
        processed += len(batch)
        offset += BATCH_SIZE

        elapsed = time.time() - start
        pct = processed / total * 100 if total else 100

        # estimated remaining time
        if processed > 0:
            eta = (elapsed / processed) * (total - processed)
        else:
            eta = 0

        print(
            f"[migration:b5ea9d343307] "
            f"Batch completed: {processed}/{total} "
            f"({pct:.2f}%) | "
            f"Batch time: {time.time() - batch_start_time:.2f}s | "
            f"Elapsed: {elapsed:.1f}s | "
            f"ETA: {eta:.1f}s"
        )

    print(f"[migration:b5ea9d343307] Migration complete in {time.time() - start:.2f}s")
    session.close()


def downgrade():
    bind = op.get_bind()
    session = db.Session(bind=bind)

    q = session.query(Slice).filter(Slice.viz_type.like(CHART_TYPE))
    total = q.count()

    print(f"[migration:b5ea9d343307] Total slices requiring downgrade: {total}")

    offset = 0
    processed = 0
