import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import FetchProps from '../../services/rest/fetchProps';
import Movies from '../../services/rest/movie';
import netUtils from '../../utils/netUtils';
import DetailedViewActions from '../DetaildView/dvActions';
import { fetchGenre } from '../DetaildView/dvConnect';
import RootActions, { IActions } from '../Root/rootActions';
import RootState from '../Root/rootState';
import SearchResultActions, { srFnCalls } from './srActions';
import SearchResultState from './srState';
import srUI, { SrUiFnCalls } from './srUI';
import SrUrlProps from './srUrlProps';

const fetchMovies = (dispatch: Dispatch): FetchProps<Movies> => ({
    request: netUtils.MOVIES_URL,
    success: (data: Movies) => dispatch({type: SearchResultActions.CLICK_SEARCH_SUCCESS, payload: data}),
    fail: (e: unknown) => dispatch({type: SearchResultActions.CLICK_SEARCH_FAILED, payload: e}),
});

const offlineActions = {
    searchAction: (dispatch: Dispatch): IActions<FetchProps<Movies>> => ({
        type: SearchResultActions.CLICK_SEARCH,
        payload: fetchMovies(dispatch),
        meta: {
            offline: {
                effect: {
                    url: netUtils.MOVIES_URL,
                    method: 'GET',
                },
                commit: {
                    type: SearchResultActions.CLICK_SEARCH_SUCCESS,
                },
                rollback: {
                    type: SearchResultActions.CLICK_SEARCH_FAILED,
                },
            },
        },
    }),
};

const mapDispatchToProps = (dispatch: Dispatch): SrUiFnCalls => ({
    searchMatchQuery: srFnCalls[RootActions.URL_SEARCH](dispatch),
    searchSummaryAction: {
        changeSortBy: (e: unknown) => dispatch({type: SearchResultActions.CHANGE_SORT_BY, payload: e}),
    },
    searchFormActions: {
        searchAction: (e: unknown) => dispatch(
            offlineActions.searchAction(dispatch),
        ),
        searchByAction: (e: unknown) => dispatch({type: SearchResultActions.CHANGE_SEARCH_BY, payload: e}),
        searchFieldTypeAction: (e: unknown) => dispatch({type: SearchResultActions.CHANGE_SEARCH_TEXT, payload: e}),
    },
    resultsItemAction: {
        itemClick: (id: number) => dispatch({
            type: DetailedViewActions.MOVIE_CLICKED,
            payload: fetchGenre(dispatch, id),
        }),
    },
});

const mapSubdictsToProps =
       (state: RootState, match: SrUrlProps): SearchResultState => ({
        ...state.searchResult,
        searchSummary: {
            ...state.searchResult.searchSummary,
            resultCount: !state.searchResult.moviesData ? 0 :
                    state.searchResult.moviesData.total,
        },
        results: state.searchResult.moviesData.data,
        searchForm: {
            ...state.searchResult.searchForm,
            searchField: state.searchResult.searchForm.searchField,
        },
    });

const mapStateToProps = mapSubdictsToProps;

const SearchResults = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(srUI));
export default SearchResults;
