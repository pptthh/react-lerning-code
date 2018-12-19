import createReducer, { ISwitch, ICase } from "../../utils/createReducer";
import SearchResultState from "./srState";
import SearchResultActions from "./srActions";
import SearchBy from "../../components/SearchForm/searchBy";
import TestData from "../../services/rest/testData";
import RootActions from "../../services/rootActions";

const stateInit: SearchResultState = {
    searchForm: {
        searchField: '',
        searchBy: SearchBy.TITLE,
    },
    searchSummary: {resultCount: 0},
    results: [],
};
/**
Type '{
    searchForm: {searchField: string; searchBy: SearchBy.TITLE;};
    searchSummary: { resultCount: number;
};
    results: never[];}'
    is missing the following properties from type 
    'SearchResultState': searchFormActions, searchSummaryActionts
 */
const initSearch = ({state, payload}: ICase<SearchResultState>): SearchResultState => ({
        ...state,
});

const rootInit = ({ state, payload }: ICase<SearchResultState>): SearchResultState => ({
    ...state,
    moviesData : TestData,
});

const SWITCH: ISwitch<SearchResultState> = {
    [SearchResultActions.INIT_SEARCH]: initSearch,
    [RootActions.INIT]: rootInit,
};

const SearchResultReducer = createReducer(SWITCH, stateInit);
export default SearchResultReducer;
