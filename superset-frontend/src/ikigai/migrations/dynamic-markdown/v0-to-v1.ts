import { BaseMeta } from './base-meta';
import { V0Meta, V1Meta } from './meta-versions';

/**
 * Migrate from v0 to v1 shape. Performs basic data validation prior to
 * executing migration.
 */
export function migrate(meta: Readonly<Required<BaseMeta>>) {
  if (meta.version !== 0) {
    throw new Error(
      'Tried to execute a v0-to-v1 migration on a non-zero-versioned meta object!',
    );
  }

  const metaV0 = meta as Readonly<V0Meta>;
  const metaV1: V1Meta = {
    width: metaV0.width,
    height: metaV0.height,
    version: 1,
    customElementId: extractComponentId(metaV0.code),
  };

  return metaV1;
}

function extractComponentId(iframeStr: string) {
  const srcMatch = iframeStr.match(/src\s*=\s*"([^"]+)"/i);
  if (!srcMatch || srcMatch.length < 2) {
    throw new Error('Unable to find src attribute!');
  }

  const srcUrl = srcMatch[1];
  const urlObj = new URL(srcUrl);
  const customElementId = urlObj.searchParams.get('component_id');

  if (!customElementId) {
    throw new Error('Unable to extract component_id from URL');
  }

  return customElementId;
}
