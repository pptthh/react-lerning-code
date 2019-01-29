import { createReducerTestRunner, ReducerTest } from '../../utils/index.test';
import DetailedViewActions from '../DetaildView/dvActions';
import { RootActions } from '../Root/rootActions';
import SearchResultActions from './srActions';
import SearchResultReducer from './srReducer';
import SearchResultState from './srState';

describe('SearchResultReducer', () => {
    const tests: ReducerTest<SearchResultState>[] = [
        {action: {type: DetailedViewActions.INIT}, skip: false},
        {action: {type: SearchResultActions.CHANGE_SEARCH_TEXT}},
        {action: {type: SearchResultActions.CHANGE_SEARCH_BY}},
        {action: {type: SearchResultActions.CLICK_SEARCH, payload: {request: ''}}},
        {action: {type: SearchResultActions.CLICK_SEARCH_SUCCESS}},
        {action: {type: SearchResultActions.CLICK_SEARCH_FAILED}},
        {action: {type: SearchResultActions.CHANGE_SORT_BY}},
        {action: {type: SearchResultActions.INIT_SEARCH}},
        {action: {type: DetailedViewActions.MOVIE_CLICKED, payload: {id: 0}}},
        {action: {type: DetailedViewActions.HIDE_DETAILS, payload: {id: 0}}},
    ];
    tests.map(createReducerTestRunner(SearchResultReducer));
});
