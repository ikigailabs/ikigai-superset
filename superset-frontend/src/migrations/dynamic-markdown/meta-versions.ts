import { BaseMeta } from './base-meta';

export type V0Meta = BaseMeta & { code: string };
export type V1Meta = Required<BaseMeta> & {
  customElementId: string;
};
