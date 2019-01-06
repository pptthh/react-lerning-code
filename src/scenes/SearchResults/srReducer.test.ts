import SearchResultActions from "./srActions";
import RootActions from "../Root/rootActions";
import { createReducerTestRunner, ReducerTest } from "../../utils/index.test";
import SearchResultReducer from "./srReducer";
import SearchResultState from "./srState";
import DetailedViewActions from "../DetaildView/dvActions";

describe('SearchResultReducer', () => {
    const tests: ReducerTest<SearchResultState>[] = [
        {action:{type: RootActions.INIT}, skip: false},
        {action:{type:SearchResultActions.CHANGE_SEARCH_TEXT}},
        {action:{type:SearchResultActions.CHANGE_SEARCH_BY}},
        {action:{type:SearchResultActions.CLICK_SEARCH,payload:{request: '',}}},
        {action:{type:SearchResultActions.CLICK_SEARCH_SUCCESS}},
        {action:{type:SearchResultActions.CLICK_SEARCH_FAILED}},
        {action:{type:SearchResultActions.CHANGE_SORT_BY}},
        {action:{type:SearchResultActions.INIT_SEARCH}},
        {action:{type:DetailedViewActions.MOVIE_CLICKED}},
        {action:{type:DetailedViewActions.HIDE_DETAILS}},
    ];
    tests.map(createReducerTestRunner(SearchResultReducer))
});
