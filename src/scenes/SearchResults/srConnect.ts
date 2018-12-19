import { connect } from "react-redux";
import searchResultsUI, { SearchResultsActions } from "./srUI";
import RootState from "../../services/rootState";
import SearchResultState from "./srState";
import SearchResultActions from "./srActions";

const mapDispatchToProps = ():SearchResultsActions => ({
    searchSummaryAction: {
        onChange: (e:unknown) => ({type:SearchResultActions.CHANGE_SEARCH_BY, payload:e}),
    },
    searchFormActions: {
        searchAction: (e:unknown) => ({type:SearchResultActions.CHANGE_SEARCH_BY, payload:e}),
        searchByAction: (e:unknown) => ({type:SearchResultActions.CHANGE_SEARCH_BY, payload:e}),
        searchFieldAction: (e:unknown) => ({type:SearchResultActions.CHANGE_SEARCH_BY, payload:e}),
    }
    // changeSearchBy: (e:unknown) => ({type:SearchResultActions.CHANGE_SEARCH_BY, payload:e}),
    // changeSearchText: (e:unknown) => ({type:SearchResultActions.CHANGE_SEARCH_TEXT, payload:e}),
    // clickSearch: (e:unknown) => ({type:SearchResultActions.CLICK_SEARCH, payload:e}),
    // clickResults: (e:unknown) => ({type:SearchResultActions.CLICK_RESULTS, payload:e}),
});

const mapSubdictsToProps =
    (state: RootState): SearchResultState =>
        state.searchResultState;

const mapStateToProps = (state: RootState) => mapSubdictsToProps(state);

const SearchResults = connect(
    mapStateToProps,
    mapDispatchToProps
)(searchResultsUI);
export default SearchResults
