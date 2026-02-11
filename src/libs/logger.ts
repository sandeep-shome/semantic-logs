import boxen from 'boxen';
import chalk from 'chalk';
import { formatInput, formatLogOptions, WATER_MARK } from './utils';
import { LogOptions } from '../types/index';

/**
 * Emit a log message to the console with the given options.
 * @param {unknown} msg - The message to log.
 * @param {LogOptions} [options] - The options for logging.
 * @example
 * emitLog('Hello World', { title: 'Semantic-logs', color: 'green' });
 */
export const emitLog = (msg: unknown, options?: LogOptions): void => {
  const formattedOptions = formatLogOptions(options || {});

  process.stdout.write(
    boxen(
      chalk[formattedOptions?.color || 'yellow'](formatInput(msg) + WATER_MARK),
      {
        padding: formattedOptions?.padding || 1,
        margin: formattedOptions?.margin || 1,
        align: formattedOptions?.textAlignment || 'left',
        title: formattedOptions?.icon
          ? formattedOptions?.icon + '\x20\x20' + formattedOptions?.title
          : formattedOptions?.title || '',
        titleAlignment: formattedOptions?.titleAlignment || 'center',
        borderStyle: formattedOptions?.borderStyle || 'classic',
        borderColor: formattedOptions?.borderColor || 'yellow',
        backgroundColor: formattedOptions?.backgroundColor || '',
      },
    ),
  );
};
