import createReducer, { ISwitch, ICase } from "../../utils/createReducer";
import SearchResultState from "./srState";
import SearchResultActions from "./srActions";
import SearchBy from "../../components/SearchForm/searchBy";

const stateInit: SearchResultState = {
    searchForm: {
        searchField: '',
        searchBy: SearchBy.TITLE,
    },
    searchResults: {resultCount: 0},
    results: [],
};

const initSearch = ({state, payload}: ICase<SearchResultState>): SearchResultState => ({
        ...state,
});

const SWITCH: ISwitch<SearchResultState> = {
    [SearchResultActions.INIT_SEARCH]: initSearch
};

const SearchResultReducer = createReducer(SWITCH, stateInit);
export default SearchResultReducer;
