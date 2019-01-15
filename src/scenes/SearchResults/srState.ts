import { ResultItemProps } from '../../components/FoundMovies/resultItem';
import { SearchFormFnCalls, SearchFormProps } from '../../components/SearchForm/searchForm';
import { SearchSummaryAction, SearchSummaryProps } from '../../components/SearchSummary/searchSummary';
import Movies from '../../services/rest/movie';

interface SearchResultState {
    searchSummary: SearchSummaryProps;
    searchForm: SearchFormProps;
    results: ResultItemProps[];
    moviesData: Movies;
    details: number;
}
export default SearchResultState;
