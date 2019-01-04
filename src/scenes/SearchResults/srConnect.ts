import { connect } from "react-redux";
import searchResultsUI, { srUIActions } from "./srUI";
import RootState from "../Root/rootState";
import SearchResultState from "./srState";
import SearchResultActions from "./srActions";
import { IActions } from "../Root/rootActions";
import Movies, { Movie } from "../../services/rest/movie";
import { ResultItemProps } from "../../components/FoundMovies/ResultItem";
import FetchProps from "../../services/rest/FetchProps";
import DetailedViewActions from "../DetaildView/dvActions";

const fetchMovies = (dispatch:Function): FetchProps<Movies> => ({
    request: 'request is comming here',
    success: (data: Movies) => dispatch({type:SearchResultActions.CLICK_SEARCH_SUCCESS, payload: data}),
    fail: (e: unknown) => dispatch({type:SearchResultActions.CLICK_SEARCH_FAILED, payload: e}),
});

const mapDispatchToProps = (dispatch: (a:IActions) => void):srUIActions => ({
    searchSummaryAction: {
        changeSortBy: (e:unknown) => dispatch({type:SearchResultActions.CHANGE_SORT_BY, payload:e}),
    },
    searchFormActions: {
        searchAction: (e:unknown) => dispatch({
            type: SearchResultActions.CLICK_SEARCH,
            payload: fetchMovies(dispatch),
        }),
        searchByAction: (e:unknown) => dispatch({type:SearchResultActions.CHANGE_SEARCH_BY, payload:e}),
        searchFieldTypeAction: (e:unknown) => dispatch({type:SearchResultActions.CHANGE_SEARCH_TEXT, payload:e}),
    },
    resultsItemAction: {
        itemClick: (id: number) => dispatch({type:DetailedViewActions.MOVIE_CLICKED, payload: id}),
    }
});

const mapSubdictsToProps =
    (state: RootState): SearchResultState => ({
        ...state.searchResult,
        searchSummary: {
            ... state.searchResult.searchSummary,
            resultCount: !state.searchResult.moviesData ? 0 :
                    state.searchResult.moviesData.total,
        },
        results: state.searchResult.moviesData.data,
    });

const mapStateToProps = (state: RootState) => mapSubdictsToProps(state);

const SearchResults = connect(
    mapStateToProps,
    mapDispatchToProps
)(searchResultsUI);
export default SearchResults
