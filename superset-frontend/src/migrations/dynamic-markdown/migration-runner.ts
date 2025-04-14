import { migrate as migrateV0ToV1 } from './v0-to-v1';

import type { BaseMeta } from './base-meta';
import type { V1Meta as CurrentMeta } from './meta-versions';

export const CURRENT_VERSION = 1;

const migrations = [migrateV0ToV1];

export function migrate(meta: BaseMeta) {
  if (isNewUnsavedMetaObject(meta)) return meta; // Fresh meta object, no migration needed
  if (meta.version === undefined) meta.version = 0; // Saved, unversioned (v0) meta object

  let upgradedMeta = { ...meta } as Required<BaseMeta>;
  for (let i = meta.version; i < CURRENT_VERSION; i++) {
    upgradedMeta = migrations[i]({ ...upgradedMeta });
  }

  return upgradedMeta as CurrentMeta;
}

function isNewUnsavedMetaObject(meta: BaseMeta) {
  return !Object.hasOwn(meta, 'version') && !Object.hasOwn(meta, 'code');
}
