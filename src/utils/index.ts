// tslint:disable-next-line
export const NOOP = () => {};

export const LOG = console.log;

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

export const DBG = ():boolean => {debugger; return true;}
