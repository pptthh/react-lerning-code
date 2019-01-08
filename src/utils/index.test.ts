import { CLONE, DBG, EVENT_VALUE, EVENT_VALUE_ERROR, LOG, NOOP, throwError } from '.';
import { IActions } from '../scenes/Root/rootActions';

export interface ReducerTest <State = unknown> {
    action: IActions;
    expectedState?: State;
    initState?: State;
    skip?: boolean;
}

export const createReducerTestRunner =
(Reducer: Function) =>
(test: ReducerTest) => {
    test.skip ?
        xit(test.action.type, NOOP) :
        it(test.action.type, () => {
            !test.expectedState ?
                Reducer(test.initState, test.action) :
                expect(Reducer(test.initState, test.action)).toEqual(test.expectedState);
        });
};

describe('utils testing', () => {
    it('NOOP', () => {
        expect(NOOP).not.toEqual(undefined);
        expect(NOOP).not.toBeNull();
        expect(NOOP()).toBeUndefined();
    });

    it('throwError throws an Error', () => {
        expect(throwError).toThrowError();
    });

    it('EVENT_VALUE', () => {
        expect(EVENT_VALUE({}))
            .toEqual(EVENT_VALUE_ERROR);
        const readedValue = 0;
        expect(EVENT_VALUE({target: {value: readedValue}}))
            .toEqual(readedValue);
    });

    it('CLONE', () => {
        const obj = {value: 'value'};
        expect(CLONE(obj)).toEqual(obj);
        expect(CLONE(obj) === obj).toEqual(false);
    });

    it('EVENT_VALUE', () => {
        expect(EVENT_VALUE({}))
            .toEqual(EVENT_VALUE_ERROR);
        const readedValue = 0;
        expect(EVENT_VALUE({target: {value: readedValue}}))
            .toEqual(readedValue);
    });

    it('DBG', () => {
        expect(DBG()).toEqual(true);
    });

    it('console', () => {
        expect(LOG('console.log')).toBeUndefined();
    });
});
