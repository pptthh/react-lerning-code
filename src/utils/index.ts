// tslint:disable-next-line
export const NOOP = () => {};

export const TEST = process.env.NODE_ENV === 'test';
export const PROD = process.env.NODE_ENV === 'poduction';
export const DEV = process.env.NODE_ENV === 'development';

const cnsl = DEV ? console : {log: NOOP, debug: NOOP, info: NOOP, warn: NOOP, error: NOOP};
export const LOG = cnsl.log; // (msg: any) => { return; };
export const LOG_DEBUG = cnsl.debug;
export const LOG_INFO = cnsl.info;
export const LOG_WARNING = cnsl.warn;
export const LOG_ERROR = cnsl.error;

export const throwError = (message?: string): object => { throw new Error(message); };

export const ECHO = <T>(value: T) => value;

export const CLONE = <T>(value: T) => ({
    ...value,
});

export const EVENT_VALUE_ERROR: string = '>>> Something went wrong !!! <<<';
export const EVENT_VALUE = (event: unknown): unknown => (
    typeof event === 'object' &&
    Object(event).hasOwnProperty('target') &&
    Object(event).target ?
        Object(event).target.value :
        EVENT_VALUE_ERROR
);

export const GET_ID = (p: unknown): number =>
    typeof p === 'object' &&
    Object(p).hasOwnProperty('id') ?
        Object(p).id :
        throwError('does not contains id property' + p);

export const DBG = (): boolean => {if (DEV) { debugger; } return true; };
