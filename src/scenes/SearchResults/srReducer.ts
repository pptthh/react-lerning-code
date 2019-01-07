import createReducer, { ISwitch, ICase } from "../../utils/createReducer";
import SearchResultState from "./srState";
import SearchResultActions from "./srActions";
import SearchBy from "../../components/SearchForm/searchBy";
import RootActions from "../Root/rootActions";
import Movies, { EmptyMovieList } from "../../services/rest/movie";
import { EVENT_VALUE, GET_ID, DBG } from "../../utils";
import FetchMovies, { getRequest4Genre, getRequest } from "../../services/rest/FetchMovies";
import FetchProps from "../../services/rest/FetchProps";
import NetUtils from "../../utils/NetUtils";
import DetailedViewActions from "../DetaildView/dvActions";
import DetailedView from "../DetaildView/dvConnect";
import SortBy, { SortByRestTranslator } from "../../components/SearchSummary/sortBy";

const stateInit: SearchResultState = {
    searchSummary: {
        resultSort: SortBy.RELEASE_DATE,
        resultCount: 0,
    },
    searchForm: {
        searchField: '',
        searchBy: SearchBy.TITLE,
    },
    results: [],
    moviesData: EmptyMovieList,
    details: 0,
};

const initSearch = ({state, payload}: ICase<SearchResultState>): SearchResultState => ({
    ...state
});

const rootInit = ({ state, payload }: ICase<SearchResultState>): SearchResultState => ({
    ...state,
    moviesData: payload as Movies,
});

const changeSearchText = ({ state, payload }: ICase<SearchResultState>): SearchResultState => ({
    ...state,
    searchForm: {
        ... state.searchForm,
        searchField: EVENT_VALUE(payload) as string,
    }
});

const changeSearchBy = ({ state, payload }: ICase<SearchResultState>): SearchResultState => ({
    ... state,
    searchForm: {
        ... state.searchForm,
        searchBy: EVENT_VALUE(payload) as SearchBy,
    }
});

const changeSorthBy = ({state, payload}: ICase<SearchResultState>): SearchResultState => ({
    ...state,
    searchSummary: {
        ...state.searchSummary,
        resultSort: EVENT_VALUE(payload) as SortBy,
    }
});

const clickSearch = ({ state, payload }: ICase<SearchResultState>): SearchResultState => (
FetchMovies({
    ... payload,
    request: getRequest(state),
} as FetchProps<Movies>),
{   ... state,
    searchForm: {
        ... state.searchForm,
        searchDisabled: true,
    }
});

const clickSearchSuccess = ({ state, payload }: ICase<SearchResultState>): SearchResultState => ({
    ... state,
    moviesData: payload as Movies,
    searchForm: {
        ... state.searchForm,
        searchDisabled: false,
    },
});

const clickSearchFailed = ({ state, payload }: ICase<SearchResultState>): SearchResultState => (DBG(),{
    ... state,
    moviesData: EmptyMovieList,
    searchForm: {
        ... state.searchForm,
        searchDisabled: false,
    }
});

const movieClicked = ({ state, payload }: ICase<SearchResultState>): SearchResultState => ({
    ... state,
    details: GET_ID(payload),
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
    [RootActions.INIT]: rootInit,
};

const SearchResultReducer = createReducer(SWITCH, stateInit);
export default SearchResultReducer;
