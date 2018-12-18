import { connect } from "react-redux";
import searchResultsUI, { SearchResultsUIAction } from "./srUI";
import RootState from "../../services/rootState";
import SearchResultState from "./srState";
import SearchResultActions from "./srActions";

const mapDispatchToProps = ():SearchResultsUIAction => ({
    changeSearchBy: (e:unknown) => ({type:SearchResultActions.CHANGE_SEARCH_BY, payload:e}),
    changeSearchText: (e:unknown) => ({type:SearchResultActions.CHANGE_SEARCH_TEXT, payload:e}),
    clickSearch: (e:unknown) => ({type:SearchResultActions.CLICK_SEARCH, payload:e}),
    clickResults: (e:unknown) => ({type:SearchResultActions.CLICK_RESULTS, payload:e}),
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
