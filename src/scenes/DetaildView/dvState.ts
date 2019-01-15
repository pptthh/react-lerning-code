import { ResultItemProps } from '../../components/FoundMovies/resultItem';
import { Movie } from '../../services/rest/movie';

interface DetailedViewState {
    detailedPanel?: Movie;
    data: Movie[];
    results: ResultItemProps[];
}
export default DetailedViewState;
