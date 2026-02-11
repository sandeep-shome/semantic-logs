import { inspect } from 'node:util';
import pkg from '../../package.json';
import { LogLevel, LogOptions, LogType } from '../types/index.d';

export const WATER_MARK = '\n\n' + 'semantic-logs ' + pkg.version;

/**
 * Format a given message to a string. If the message is a string,
 * it is returned as is. If the message is an object, it is
 * formatted using node's util.inspect() function with the following
 * options: showHidden=false, depth=null, colors=true.
 * @param msg The message to format.
 * @returns The formatted message as a string.
 */
export const formatInput = (msg: unknown): string => {
  if (typeof msg === 'string') {
    return msg;
  }
  return inspect(msg, { showHidden: false, depth: null, colors: true });
};

/**
 * Format the given log options to a standard format.
 * If the level is not set, it defaults to LogType.info.
 * If the color is not set, it defaults based on the level.
 * If the title is not set, it defaults based on the level.
 * If the icon is not set, it defaults based on the level.
 * If the borderColor is not set, it defaults based on the level.
 * @param options The log options to format.
 * @returns The formatted log options.
 */
const LOG_DEFAULTS: Record<LogLevel, Partial<LogOptions>> = {
  [LogType.info]: {
    color: 'white',
    title: 'INFO',
    icon: '📝',
    borderColor: 'white',
  },
  [LogType.success]: {
    color: 'green',
    title: 'SUCCESS',
    icon: '✅',
    borderColor: 'green',
  },
  [LogType.warn]: {
    color: 'yellow',
    title: 'WARNING',
    icon: '⚠️',
    borderColor: 'yellow',
  },
  [LogType.error]: {
    color: 'red',
    title: 'ERROR',
    icon: '❌',
    borderColor: 'red',
  },
};

export const formatLogOptions = (options: LogOptions = {}): LogOptions => {
  const level: LogLevel = options.level ?? LogType.info;

  return {
    ...LOG_DEFAULTS[level],
    ...options,
    level,
  };
};
