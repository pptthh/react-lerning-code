// tslint:disable-next-line
export const NOOP = () => {};

const c = console;
export const LOG = c.log;

export const throwError = (message?: string): never => { throw new Error(message); };
