import { Logger } from '..';
import { emitLog } from '../libs/logger';
import { jest } from '@jest/globals';

// 1. Mock the external library function
jest.mock('../libs/logger', () => ({
  emitLog: jest.fn(),
}));

describe('Logger Class', () => {
  let logger: Logger;

  beforeEach(() => {
    logger = new Logger();
    // Clear mock call history between tests
    jest.clearAllMocks();
  });

  describe('log method', () => {
    it('should call emitLog with the message and options', () => {
      const message = 'Test message';
      const options = { level: 'info', title: 'Test Title' };
      // eslint-disable-next-line
      logger.log(message, options as any);

      expect(emitLog).toHaveBeenCalledWith(message, options);
      expect(emitLog).toHaveBeenCalledTimes(1);
    });

    it('should work with only a message', () => {
      const message = 'Hello World';

      logger.log(message);

      expect(emitLog).toHaveBeenCalledWith(message, undefined);
      expect(emitLog).toHaveBeenCalledTimes(1);
    });
  });

  describe('createLogger method', () => {
    it('should return a function that calls emitLog with preset options', () => {
      const presetOptions = { level: 'error', icon: '🔥' };
      // eslint-disable-next-line
      const customLogger = logger.createLogger(presetOptions as any);

      const message = 'System Failure';
      customLogger(message);

      expect(emitLog).toHaveBeenCalledWith(message, presetOptions);
      expect(emitLog).toHaveBeenCalledTimes(1);
    });

    it('should allow multiple loggers with different presets', () => {
      // eslint-disable-next-line
      const infoLogger = logger.createLogger({ level: 'info' } as any);
      // eslint-disable-next-line
      const warnLogger = logger.createLogger({ level: 'warn' } as any);

      infoLogger('Info msg');
      warnLogger('Warn msg');

      expect(emitLog).toHaveBeenCalledWith('Info msg', { level: 'info' });
      expect(emitLog).toHaveBeenCalledWith('Warn msg', { level: 'warn' });
      expect(emitLog).toHaveBeenCalledTimes(2);
    });
  });
});
