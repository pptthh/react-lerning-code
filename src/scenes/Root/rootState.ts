import DetailedViewState from '../DetaildView/dvState';
import SearchResultState from '../SearchResults/srState';

interface RootState {
    searchResult: SearchResultState;
    detailedView: DetailedViewState;
}

export default RootState;
