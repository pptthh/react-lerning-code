import { connect } from "react-redux";
import searchResultsUI, { SearchResultsActions } from "./srUI";
import RootState from "../../services/rootState";
import SearchResultState from "./srState";
import SearchResultActions from "./srActions";
import { IActions } from "../../services/rootActions";
import Movies, { Movie } from "../../services/rest/movie";
import { ResultItemProps } from "../../components/FoundMovies/ResultItem";
import FetchProps from "../../services/rest/FetchProps";

const mapDispatchToProps = (dispatch: (a:IActions<unknown>) => void):SearchResultsActions => ({
    searchSummaryAction: {
        changeSortBy: (e:unknown) => dispatch({type:SearchResultActions.CHANGE_SORT_BY, payload:e}),
    },
    searchFormActions: {
        searchAction: (e:unknown) => dispatch({
            type: SearchResultActions.CLICK_SEARCH,
            payload: {
                request: 'request',
                success: (data: Movies) => dispatch({type:SearchResultActions.CLICK_SEARCH_SUCCESS, payload: data}),
                fail:  (e: Error) => dispatch({type:SearchResultActions.CLICK_SEARCH_FAILED, payload: e}),
            } as FetchProps<Movies>
        }),
        searchByAction: (e:unknown) => dispatch({type:SearchResultActions.CHANGE_SEARCH_BY, payload:e}),
        searchFieldTypeAction: (e:unknown) => dispatch({type:SearchResultActions.CHANGE_SEARCH_TEXT, payload:e}),
    }
});

const mapSubdictsToProps =
    (state: RootState): SearchResultState => ({
        ...state.searchResult,
        searchSummary: {
            resultCount: !state.searchResult.moviesData ? 0 :
                    state.searchResult.moviesData.total,
        },
        results: state.searchResult.moviesData.data.map(
            (item: Movie):ResultItemProps => ({
                ...item,
                releaseYear: item.release_date.substring(0,4),
            })
        ),
    });

const mapStateToProps = (state: RootState) => mapSubdictsToProps(state);

const SearchResults = connect(
    mapStateToProps,
    mapDispatchToProps
)(searchResultsUI);
export default SearchResults
