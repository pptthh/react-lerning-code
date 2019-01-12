import DetailedViewState from '../DetaildView/dvState';
import SearchResultState from '../SearchResults/srState';
import UrlState from '../URL/urlState';

interface RootState {
    searchResult: SearchResultState;
    detailedView: DetailedViewState;
    url: UrlState;
}

export default RootState;
