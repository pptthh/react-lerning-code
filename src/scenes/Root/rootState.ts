import ServerState from '../../ssr/serverState';
import DetailedViewState from '../DetaildView/dvState';
import SearchResultState from '../SearchResults/srState';

interface RootState {
    searchResult: SearchResultState;
    detailedView: DetailedViewState;
    ssr: ServerState;
}

export default RootState;
