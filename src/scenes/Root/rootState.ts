import SearchResultState from "../SearchResults/srState";
import DetailedViewState from "../DetaildView/dvState";

interface RootState {
    searchResult: SearchResultState;
    detailedView: DetailedViewState;
}

export default RootState;