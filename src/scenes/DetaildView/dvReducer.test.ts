import { ICase } from '../../utils/createReducer';
import { createReducerTestRunner, ReducerTest } from '../../utils/index.test';
import RootActions from '../Root/rootActions';
import SearchResultActions from '../SearchResults/srActions';
import DetailedViewActions from './dvActions';
import DetailedViewReducer from './dvReducer';
import DetailedViewState from './dvState';

describe('DetailedViewReducer', () => {
    const tests: ReducerTest<DetailedViewState>[] = [
        { action: { type: RootActions.INIT }, skip: false },
        { action: { type: DetailedViewActions.INIT_DETAILED_VIEW }},
        { action: { type: DetailedViewActions.MOVIE_CLICKED, payload: { id: 0 }}},
        { action: { type: SearchResultActions.CLICK_SEARCH_SUCCESS, payload: { data: 'test' }}},
    ];
    tests.map(createReducerTestRunner(DetailedViewReducer));
});
