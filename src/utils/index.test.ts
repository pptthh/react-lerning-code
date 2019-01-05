import { NOOP, throwError } from ".";
import { IActions } from "../scenes/Root/rootActions";

export interface ReducerTest <State = unknown>{
    action:IActions,
    expectedState?:State,
    initState?:State,
    skip?:boolean,
};

export const createReducerTestRunner =
(Reducer:any) =>
(test:ReducerTest) => {
    test.skip ?
        xit(test.action.type, () => {}) :
        it(test.action.type, () => {
            !test.expectedState ?
                Reducer(test.initState, test.action) :
                expect(Reducer(test.initState, test.action)).toEqual(test.expectedState);
        })
}

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
