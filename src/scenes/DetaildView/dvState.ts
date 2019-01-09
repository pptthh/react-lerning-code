import { Movie } from "../../services/rest/movie";
import { ResultItemProps } from "../../components/FoundMovies/ResultItem";

interface DetailedViewState {
    detailedPanel?: Movie;
    data: Movie[];
    results: ResultItemProps[];
}
export default DetailedViewState;