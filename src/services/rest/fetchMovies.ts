import searchByEnum from '../../components/SearchForm/searchBy';
import sortByEnum, { SortByRestTranslator } from '../../components/SearchSummary/sortBy';
import DetailedViewState from '../../scenes/DetaildView/dvState';
import SearchResultState from '../../scenes/SearchResults/srState';
import { LOG_ERROR, LOG_WARNING, NOOP, TEST } from '../../utils';
import netUtils from '../../utils/netUtils';
import FetchProps from './fetchProps';
import Movies, { transformMoviesData, validateMovies } from './movie';

export const getRequest = (state: SearchResultState) =>
netUtils.MOVIES_URL +
'?search=' + state.searchForm.searchField +
'&searchBy=' + state.searchForm.searchBy +
'&sortBy=' + SortByRestTranslator[state.searchSummary.resultSort] +
'&sortOrder=desc' +
'';
export const getRequest4Genre = (state: DetailedViewState) =>
netUtils.MOVIES_URL +
'?search=' + (state.detailedPanel && state.detailedPanel.genres[0]) +
'&searchBy=' + searchByEnum.GERNE +
'&sortBy=' + SortByRestTranslator[sortByEnum.RATING] +
'&sortOrder=desc' +
'';

const FetchMovies = ({
    success = LOG_WARNING,
    fail = LOG_ERROR,
    request,
}: FetchProps<Movies>) => {
    // fix me: remove next line find a solutom to testing Reducers
    TEST ? NOOP() :
    fetch(request, requestInit)
    .then(netUtils.checkStatus)
    .then(netUtils.getJsonResponse)
    .then(transformMoviesData)
    .then(validateMovies)
    .then(success)
    .catch(e => (fail(e), e));
};

const requestInit: RequestInit = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        // 'Authorization': 'Basic ' + base64Encode('admin:admin'),
    },
};

export default FetchMovies;
