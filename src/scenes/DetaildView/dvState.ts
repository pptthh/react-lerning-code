import { DetailedPanelProps } from "../../components/DetailedPanel/detailedPanelProps";
import { SearchSummaryProps } from "../../components/SearchSummary/searchSummary";
import { ResultItemProps } from "../../components/FoundMovies/ResultItem";
import Movies from "../../services/rest/movie";

interface DetailedViewState {
    detailedPanel?: DetailedPanelProps;
    // searchResults: SearchSummaryProps;
    results: ResultItemProps[];
    moviesData: Movies;
}
export default DetailedViewState;