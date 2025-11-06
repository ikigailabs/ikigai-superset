import { migrate as migrateV0ToV1 } from './v0-to-v1';

import type { BaseMeta } from './base-meta';
import type { V1Meta as CurrentMeta } from './meta-versions';

export const CURRENT_VERSION = 1;

const migrations = [migrateV0ToV1];

export function migrate(meta: BaseMeta) {
  const newMeta = { ...meta };
  if (isNewUnsavedMetaObject(newMeta)) return newMeta; // Fresh meta object, no migration needed
  if (newMeta.version === undefined) newMeta.version = 0; // Saved, unversioned (v0) meta object

  let upgradedMeta = { ...newMeta } as Required<BaseMeta>;
  for (let i = newMeta.version; i < CURRENT_VERSION; i += 1) {
    upgradedMeta = migrations[i]({ ...upgradedMeta });
  }

  return upgradedMeta as CurrentMeta;
}

function isNewUnsavedMetaObject(meta: BaseMeta) {
  return (
    !Object.prototype.hasOwnProperty.call(meta, 'version') &&
    !Object.prototype.hasOwnProperty.call(meta, 'code')
  );
}
