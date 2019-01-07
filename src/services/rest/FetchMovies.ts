import { LOG_WARNING, LOG_ERROR, TEST } from "../../utils";
import Movies, { validateMovies, transformMoviesData } from "./movie";
import NetUtils from "../../utils/NetUtils";
import FetchProps from "./FetchProps";
import SearchResultState from "../../scenes/SearchResults/srState";
import SortBy, { SortByRestTranslator } from "../../components/SearchSummary/sortBy";
import DetailedViewState from "../../scenes/DetaildView/dvState";
import SearchBy from "../../components/SearchForm/searchBy";

export const getRequest = (state:SearchResultState) => 
NetUtils.MOVIES_URL +
'?search=' + state.searchForm.searchField +
'&searchBy=' + state.searchForm.searchBy +
'&sortBy=' + SortByRestTranslator[state.searchSummary.resultSort] +
'&sortOrder=desc' +
'';
export const getRequest4Genre = (state:DetailedViewState) => 
!state.detailedPanel ? '' :
NetUtils.MOVIES_URL +
'?search=' + state.detailedPanel.genres[0] +
'&searchBy=' + SearchBy.GERNE +
'&sortBy=' + SortByRestTranslator[SortBy.RATING] +
'&sortOrder=desc' +
'';

const FetchMovies = ({
    success = LOG_WARNING,
    fail = LOG_ERROR,
    request,
}: FetchProps<Movies>) => {
    const requestInit: RequestInit = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8',
            // 'Authorization': 'Basic ' + base64Encode('admin:admin'),
        },
    };
    
    // fix me: remove next line find a solutom to test Reducer:CLICK_SEARCH
    TEST ? undefined :
    fetch(request, requestInit)
    .then(NetUtils.checkStatus)
    .then(NetUtils.getJsonResponse)
    .then(transformMoviesData)
    .then(validateMovies)
    .then(data => success(data))
    .catch(e => (fail(e), e));
};

export default FetchMovies;
