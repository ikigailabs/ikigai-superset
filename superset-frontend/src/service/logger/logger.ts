import { GlobalConfig } from './global-config';
import { LogLevel } from './log-level';
import { LogEntry } from './transports/log-transport';
import { LoggerConfig, LogLevelType } from './types';

export class Logger {
  private moduleName?: string;

  public constructor(config: LoggerConfig) {
    this.moduleName = config.moduleName;
  }

  public verbose(message: string) {
    this.logToTransports(LogLevel.VERBOSE, message);
  }

  public info(message: string) {
    this.logToTransports(LogLevel.INFO, message);
  }

  public warn(message: string) {
    this.logToTransports(LogLevel.WARN, message);
  }

  public error(message: string) {
    this.logToTransports(LogLevel.ERROR, message);
  }

  public fatal(message: string) {
    this.logToTransports(LogLevel.FATAL, message);
  }

  private createLogEntry(logLevel: LogLevelType, message: string): LogEntry {
    return {
      logLevel,
      message,
      moduleName: this.moduleName,
      timestamp: new Date(),
    };
  }

  private logToTransports(logLevel: LogLevelType, message: string) {
    const entry = this.createLogEntry(logLevel, message);

    GlobalConfig.transports.forEach(transport => transport.log(entry));
  }
}
