import { connect } from "react-redux";
import searchResultsUI from "./srUI";
import RootState from "../../services/rootState";
import SearchResultState from "./srState";

const mapDispatchToProps = (dispatch: Function) => ({

});
/*
const mapDispatchToProps = (dispatch: Function) => ({
    done: (data: number) => dispatch(Action.done(data)),
    edit: (data: number) => dispatch(Action.edit(data)),
});/* */

const mapSubdictsToProps =
    (state: RootState): SearchResultState =>
        state.searchResultState;

const mapStateToProps = (state: RootState) => mapSubdictsToProps(state);

const SearchResults = connect(
    mapStateToProps,
    mapDispatchToProps
)(searchResultsUI);
export default SearchResults
