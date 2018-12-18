import SearchResultState from "../scenes/SearchResults/srState";
import DetailedViewState from "../scenes/DetaildView/dvState";

interface RootState {
    searchResultState: SearchResultState;
    detailedViewState: DetailedViewState;
}

export default RootState;