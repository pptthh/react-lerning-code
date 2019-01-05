// tslint:disable-next-line
export const NOOP = () => {};

export const TEST = process.env.NODE_ENV === 'test';
export const PROD = process.env.NODE_ENV === 'poduction';
export const DEV = process.env.NODE_ENV === 'development';

const cnsl = DEV ? console : {log:NOOP,debug:NOOP,info:NOOP,warn:NOOP,error:NOOP};
export const LOG = cnsl.log; // (msg: any) => { return; };
export const LOG_DEBUG = cnsl.debug;
export const LOG_INFO = cnsl.info;
export const LOG_WARNING = cnsl.warn;
export const LOG_ERROR = cnsl.error;

export const throwError = (message?: string): any => { throw new Error(message); };

export const ECHO = <T>(value:T) => value;

export const CLONE = <T>(value:T) => ({
    ... value
})

export const EVENT_VALUE = (event:unknown):unknown => (
    typeof event === 'object' &&
    Object(event).hasOwnProperty('target') &&
    Object(event)['target'] ?
        Object(event)['target']['value'] :
        '>>> Something went wrong !!! <<<'
);

export const DBG = ():boolean => {if (DEV) debugger; return true;}
