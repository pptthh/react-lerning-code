import createReducer, { ISwitch, ICase } from "../../utils/createReducer";
import SearchResultState from "./srState";
import SearchResultActions from "./srActions";

const stateInit: SearchResultState = {
    prop: '',
    // searchForm: '',
    // searchResults: [],
    // results: [],
};


const initSearch = ({state, payload}: ICase<SearchResultState>): SearchResultState => ({
        ...state,
    prop: payload,
});

const SWITCH: ISwitch<SearchResultState> = {
    [SearchResultActions.INIT_SEARCH]: initSearch
};

const SearchResultReducer = createReducer(SWITCH, stateInit);
export default SearchResultReducer;
