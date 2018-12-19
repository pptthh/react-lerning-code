// tslint:disable-next-line
export const NOOP = () => {};

export const LOG = console.log;

export const throwError = (message?: string): any => { throw new Error(message); };

export const ECHO = <T>(value:T) => value;

export const CLONE = <T>(value:T) => ({
    ... value
})