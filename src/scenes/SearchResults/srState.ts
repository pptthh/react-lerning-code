import { SearchFormProps } from "../../components/SearchForm/searchForm";
import { SearchSummaryProps } from "../../components/SearchSummary/searchSummary";
import { ResultItemProps } from "../../components/FoundMovies/ResultItem";

interface SearchResultState {
    searchForm: SearchFormProps;
    searchResults: SearchSummaryProps;
    results: ResultItemProps[];
}
export default SearchResultState;