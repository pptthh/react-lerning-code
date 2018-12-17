import { NOOP, throwError } from ".";

describe('utils testing', () => {
    it('NOOP', () => {
        expect(NOOP).not.toEqual(undefined);
        expect(NOOP).not.toBeNull();
        expect(NOOP()).toBeUndefined();
    });

    it('throwError throws an Error', () => {
        expect(throwError).toThrowError();
    });
});
