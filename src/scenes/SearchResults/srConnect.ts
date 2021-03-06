import { List } from 'immutable';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';
import { ResultItemProps } from '../../components/FoundMovies/resultItem';
import DetailedViewActions, { fetchGenre } from '../DetaildView/dvActions';
import RootActions from '../Root/rootActions';
import RootState from '../Root/rootState';
import SearchResultActions, { srFnCalls } from './srActions';
import SearchResultState from './srState';
import srUI, { SrUiFnCalls } from './srUI';
import SrUrlProps from './srUrlProps';

const mapDispatchToProps = (dispatch: Dispatch): SrUiFnCalls => ({
    searchMatchQuery: srFnCalls[SearchResultActions.URL_SEARCH](dispatch),
    searchSummaryAction: {
        changeSortBy: (e: unknown) => dispatch({ type: SearchResultActions.CHANGE_SORT_BY, payload: e }),
    },
    searchFormActions: {
        searchAction: (e: unknown) => dispatch(
            srFnCalls.offlineActions.searchAction(dispatch),
        ),
        searchByAction: (e: unknown) => dispatch({ type: SearchResultActions.CHANGE_SEARCH_BY, payload: e }),
        searchFieldTypeAction: (e: unknown) => dispatch({ type: SearchResultActions.CHANGE_SEARCH_TEXT, payload: e }),
    },
    resultsItemAction: {
        itemClick: (id: number) => dispatch({
            type: DetailedViewActions.MOVIE_CLICKED,
            payload: fetchGenre(dispatch, String(id)),
        }),
    },
});

const mapStateToProps = (
        state: RootState,
        match: SrUrlProps,
    ): SearchResultState => ({
    ...state.searchResult,
    searchSummary: {
        ...state.searchResult.searchSummary,
        resultCount: !state.searchResult.moviesData ? 0 :
                state.searchResult.moviesData.total,
    },
    results: List<ResultItemProps>(state.searchResult.moviesData.data),
    searchForm: {
        ...state.searchResult.searchForm,
        searchField: state.searchResult.searchForm.searchField,
    },
});

const SearchResults =
withRouter
(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(srUI),
);
export default SearchResults;
