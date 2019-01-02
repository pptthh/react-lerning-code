import createReducer, { ISwitch, ICase } from "../../utils/createReducer";
import SearchResultState from "./srState";
import SearchResultActions from "./srActions";
import SearchBy from "../../components/SearchForm/searchBy";
import RootActions from "../../services/rootActions";
import Movies, { EmptyMovieList } from "../../services/rest/movie";
import { EVENT_VALUE } from "../../utils";

const stateInit: SearchResultState = {
    searchForm: {
        searchField: '',
        searchBy: SearchBy.TITLE,
    },
    searchSummary: {resultCount: 0},
    results: [],
    moviesData: EmptyMovieList,
};

const initSearch = ({state, payload}: ICase<SearchResultState>): SearchResultState => ({
    ...state
});

const rootInit = ({ state, payload }: ICase<SearchResultState>): SearchResultState => ({
    ...state,
    moviesData : payload as Movies,
});

const changeSearchText = ({ state, payload }: ICase<SearchResultState>): SearchResultState => ({
    ...state,
    searchForm: {
        ... state.searchForm,
        searchField: EVENT_VALUE(payload) as string,
    }
});

const changeSearchBy =  ({ state, payload }: ICase<SearchResultState>): SearchResultState => ({
    ... state,
    searchForm: {
        ... state.searchForm,
        searchBy: EVENT_VALUE(payload) as SearchBy,
    }
});

const SWITCH: ISwitch<SearchResultState> = {
    [SearchResultActions.CHANGE_SEARCH_TEXT]: changeSearchText,
    [SearchResultActions.CHANGE_SEARCH_BY]: changeSearchBy,
    [SearchResultActions.INIT_SEARCH]: initSearch,
    [RootActions.INIT]: rootInit,
};

const SearchResultReducer = createReducer(SWITCH, stateInit);
export default SearchResultReducer;
