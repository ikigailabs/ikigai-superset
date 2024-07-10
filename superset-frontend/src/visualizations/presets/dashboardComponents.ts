import { t } from 'packages/superset-ui-core/src/translation';

/**
 * formerly called numeric()
 * @param v
 */
export default function numeric(v: unknown) {
  if (v && Number.isNaN(Number(v))) {
    return t('is expected to be a number');
  }
  return false;
}
