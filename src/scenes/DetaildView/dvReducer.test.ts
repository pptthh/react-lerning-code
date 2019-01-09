import DetailedViewReducer from "./dvReducer";
import { ICase } from "../../utils/createReducer";
import DetailedViewState from "./dvState";
import DetailedViewActions from "./dvActions";
import SearchResultActions from "../SearchResults/srActions";
import RootActions from "../Root/rootActions";
import { createReducerTestRunner, ReducerTest } from "../../utils/index.test";

describe('DetailedViewReducer', () => {
    const tests: ReducerTest<DetailedViewState>[] = [
        {action:{type: RootActions.INIT}, skip: false},
        {action:{type: DetailedViewActions.INIT_DETAILED_VIEW}},
        {action:{type: DetailedViewActions.MOVIE_CLICKED, payload:{id:0}}},
        {action:{type: SearchResultActions.CLICK_SEARCH_SUCCESS, payload:{data:'test'}}},
    ];
    tests.map(createReducerTestRunner(DetailedViewReducer))
});
