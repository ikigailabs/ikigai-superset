import type { Middleware } from 'redux';
import type { RootState } from 'src/dashboard/types';

export type TypedMiddleware = Middleware<{}, RootState>;
