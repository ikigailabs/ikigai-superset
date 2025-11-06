import { GlobalConfig } from './global-config';
import { Logger } from './logger';
import { ConsoleTransport } from './transports/console-transport';
import { Severity } from './transports/transport-constants';
import { LoggerConfig } from './types';

export { LogLevel } from './log-level';
export { setGlobalConfig } from './global-config';

export const Transport = {
  ConsoleTransport,
  Severity,
};

export function createLogger(config: Partial<LoggerConfig> = {}) {
  const mergedConfig = { ...GlobalConfig, ...config };
  return new Logger(mergedConfig);
}
