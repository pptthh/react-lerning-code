import { SearchFormProps, SearchFormActions } from "../../components/SearchForm/searchForm";
import { SearchSummaryProps, SearchSummaryAction } from "../../components/SearchSummary/searchSummary";
import { ResultItemProps } from "../../components/FoundMovies/ResultItem";
import Movies from "../../services/rest/movie";
import SearchBy from "../../components/SearchForm/searchBy";

interface SearchResultState {
    searchSummary: SearchSummaryProps;
    searchForm: SearchFormProps;
    results: ResultItemProps[];
    moviesData: Movies;
}
export default SearchResultState;