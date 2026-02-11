import { LogOptions } from './types/index';
import { emitLog } from './libs/logger';

export class Logger {
  public log = (msg: unknown, options?: LogOptions) => emitLog(msg, options);
  public createLogger = (options?: LogOptions) => (msg: unknown) =>
    emitLog(msg, options);
}
export * from './types/index.d';
