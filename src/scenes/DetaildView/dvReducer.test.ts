import DetailedViewReducer from "./dvReducer";
import { ICase } from "../../utils/createReducer";
import DetailedViewState from "./dvState";
import DetailedViewActions from "./dvActions";
import SearchResultActions from "../SearchResults/srActions";
import RootActions, { IActions } from "../Root/rootActions";

interface ReducerTest <State>{
    action:IActions,
    expectedState?:State,
    initState?:State,
    ignore?:boolean,
}

describe('DetailedViewReducer', () => {
    // it('reducer functions test', () => {
        
        const tests: ReducerTest<DetailedViewState>[] = [
            {ignore: true ,action:{type: RootActions.INIT}},
            {action:{type: DetailedViewActions.INIT_DETAILED_VIEW}},
            {action:{type: DetailedViewActions.MOVIE_CLICKED}},
            {action:{type: SearchResultActions.CLICK_SEARCH_SUCCESS, payload:{data:'test'}}},
        ];
        tests.map(
            (test:ReducerTest<DetailedViewState>) => {
                test.ignore ? xit(test.action.type, () => {}) :
                    it(test.action.type, () => {
                        const state:DetailedViewState = DetailedViewReducer(undefined, test.action);
                        test.expectedState ? expect(state).toEqual(test.expectedState) : undefined;
                    })
            });
        // for(let key:string in DetailedViewReducer)
        // {
            // ICase<DetailedViewState>
            // DetailedViewReducer[key]()
        // }
        
        // expect(NOOP).not.toEqual(undefined);
        // expect(NOOP).not.toBeNull();
        // expect(NOOP()).toBeUndefined();
    // });

    // xit('throwError throws an Error', () => {
    //     // expect(throwError).toThrowError();
    // });
});
