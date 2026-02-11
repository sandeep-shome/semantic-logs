import { type ForegroundColorName, BackgroundColorName } from 'chalk';
import { type Boxes } from 'boxen';

export type LogLevel = 'info' | 'success' | 'warn' | 'error';
export type Alignment = 'left' | 'center' | 'right';

export enum LogType {
  info = 'info',
  success = 'success',
  warn = 'warn',
  error = 'error',
}

export type LogOptions = {
  level?: LogLevel | undefined;
  title?: string | undefined;
  color?: ForegroundColorName | undefined;
  borderColor?: ForegroundColorName | undefined;
  icon?: string | undefined;
  readonly textAlignment?: Alignment | undefined;
  readonly padding?: number | undefined;
  readonly margin?: number | undefined;
  readonly titleAlignment?: Alignment | undefined;
  readonly backgroundColor?: BackgroundColorName | undefined;
  readonly borderStyle?: keyof Boxes | undefined;
};
