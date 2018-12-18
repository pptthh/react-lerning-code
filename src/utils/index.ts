// tslint:disable-next-line
export const NOOP = () => {};

const c = console;
export const LOG = c.log;

export const throwError = (message?: string): any => { throw new Error(message); };

export const ECHO = <T>(value:T) => value;