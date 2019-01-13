import searchByEnum from '../../components/SearchForm/searchBy';
import sortByEnum from '../../components/SearchSummary/sortBy';
import FetchMovies, { getRequest } from '../../services/rest/fetchMovies';
import FetchProps from '../../services/rest/fetchProps';
import Movies, { EmptyMovieList } from '../../services/rest/movie';
import { DBG, EVENT_VALUE, GET_ID } from '../../utils';
import createReducer, { ICase, ISwitch } from '../../utils/createReducer';
import netUtils from '../../utils/netUtils';
import DetailedViewActions from '../DetaildView/dvActions';
import RootActions from '../Root/rootActions';
import SearchResultActions from './srActions';
import SearchResultState from './srState';

const stateInit: SearchResultState = {
    searchSummary: {
        resultSort: sortByEnum.RELEASE_DATE,
        resultCount: 0,
    },
    searchForm: {
        searchField: '',
        searchBy: searchByEnum.TITLE,
    },
    results: [],
    moviesData: EmptyMovieList,
    details: 0,
};

const initSearch = ({state, payload}: ICase<SearchResultState>): SearchResultState => ({
    ...state,
});

const rootInit = ({ state, payload }: ICase<SearchResultState>): SearchResultState => ({
    ...state,
    moviesData: payload as Movies,
});

const changeSearchText = ({ state, payload }: ICase<SearchResultState>): SearchResultState => ({
        ...state,
        searchForm: {
            ...state.searchForm,
            searchField: EVENT_VALUE(payload) as string,
    },
});

const changeSearchBy = ({ state, payload }: ICase<SearchResultState>): SearchResultState => ({
    ...state,
    searchForm: {
        ...state.searchForm,
        searchBy: EVENT_VALUE(payload) as searchByEnum,
    },
});

const changeSorthBy = ({state, payload}: ICase<SearchResultState>): SearchResultState => ({
    ...state,
    searchSummary: {
        ...state.searchSummary,
        resultSort: EVENT_VALUE(payload) as sortByEnum,
    },
});

const clickSearch = ({ state, payload }: ICase<SearchResultState>): SearchResultState => (
netUtils.setUrlPath('search/' + state.searchForm.searchField),
FetchMovies({
    ...payload,
    request: getRequest(state),
} as FetchProps<Movies>),
{   ...state,
    oldQuery: state.searchForm.searchField,
    searchForm: {
        ...state.searchForm,
        searchDisabled: true,
    },
});

const clickSearchSuccess = ({ state, payload }: ICase<SearchResultState>): SearchResultState => ({
    ...state,
    moviesData: payload as Movies,
    searchForm: {
        ...state.searchForm,
        searchDisabled: false,
    },
});

const clickSearchFailed = ({ state, payload }: ICase<SearchResultState>): SearchResultState => (DBG(), {
    ...state,
    moviesData: EmptyMovieList,
    searchForm: {
        ...state.searchForm,
        searchDisabled: false,
    },
});

const movieClicked = ({ state, payload }: ICase<SearchResultState>): SearchResultState => ({
    ...state,
    details: GET_ID(payload),
});

const urlSearch = ({ state, payload }: ICase<SearchResultState>): SearchResultState => ({
    ...state,
    oldQuery: payload as string,
    searchForm: {
        ...state.searchForm,
        searchField: payload as string,
    },
});

const SWITCH: ISwitch<SearchResultState> = {
    [SearchResultActions.CHANGE_SEARCH_TEXT]: changeSearchText,
    [SearchResultActions.CHANGE_SEARCH_BY]: changeSearchBy,
    [SearchResultActions.CLICK_SEARCH]: clickSearch,
    [SearchResultActions.CLICK_SEARCH_SUCCESS]: clickSearchSuccess,
    [SearchResultActions.CLICK_SEARCH_FAILED]: clickSearchFailed,
    [SearchResultActions.CHANGE_SORT_BY]: changeSorthBy,
    [SearchResultActions.INIT_SEARCH]: initSearch,
    [DetailedViewActions.MOVIE_CLICKED]: movieClicked,
    [DetailedViewActions.HIDE_DETAILS]: movieClicked,
    [RootActions.URL_SEARCH]: urlSearch,
    [RootActions.INIT]: rootInit,
};

const SearchResultReducer = createReducer(SWITCH, stateInit);
export default SearchResultReducer;
