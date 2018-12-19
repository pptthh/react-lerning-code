import SearchResultState from "../scenes/SearchResults/srState";
import DetailedViewState from "../scenes/DetaildView/dvState";

interface RootState {
    searchResult: SearchResultState;
    detailedView: DetailedViewState;
}

export default RootState;