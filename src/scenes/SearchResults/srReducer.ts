import createReducer, { ISwitch, ICase } from "../../utils/createReducer";
import SearchResultState from "./srState";
import SearchResultActions from "./srActions";
import SearchBy from "../../components/SearchForm/searchBy";
import RootActions from "../../services/rootActions";
import Movies, { EmptyMovieList } from "../../services/rest/movie";

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

const SWITCH: ISwitch<SearchResultState> = {
    [SearchResultActions.INIT_SEARCH]: initSearch,
    [RootActions.INIT]: rootInit,
};

const SearchResultReducer = createReducer(SWITCH, stateInit);
export default SearchResultReducer;
