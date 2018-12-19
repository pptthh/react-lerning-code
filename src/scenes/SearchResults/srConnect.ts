import { connect } from "react-redux";
import searchResultsUI, { SearchResultsActions } from "./srUI";
import RootState from "../../services/rootState";
import SearchResultState from "./srState";
import SearchResultActions from "./srActions";
import { IActions } from "../../services/rootActions";

const mapDispatchToProps = (dispatch: (a:IActions<unknown>) => void):SearchResultsActions => ({
    searchSummaryAction: {
        changeSortBy: (e:unknown) => dispatch({type:SearchResultActions.CHANGE_SORT_BY, payload:e}),
    },
    searchFormActions: {
        searchAction: (e:unknown) => dispatch({type:SearchResultActions.CLICK_SEARCH, payload:e}),
        searchByAction: (e:unknown) => dispatch({type:SearchResultActions.CHANGE_SEARCH_BY, payload:e}),
        searchFieldTypeAction: (e:unknown) => dispatch({type:SearchResultActions.CHANGE_SEARCH_TEXT, payload:e}),
    }
});

const mapSubdictsToProps =
    (state: RootState): SearchResultState => ({
        ...state.searchResult,
        // results: {...state.searchResult.results},
        // searchForm: {...state.searchResult.searchForm},
        searchSummary: {
            // resultSort: state.searchResult.searchSummary.resultSort,
            resultCount: !state.searchResult.moviesData ? 0 :
                    state.searchResult.moviesData.total,
        },
    });

const mapStateToProps = (state: RootState) => mapSubdictsToProps(state);

const SearchResults = connect(
    mapStateToProps,
    mapDispatchToProps
)(searchResultsUI);
export default SearchResults
