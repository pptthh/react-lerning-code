import { List } from 'immutable';
import { ResultItemProps } from '../../components/FoundMovies/resultItem';
import { Movie } from '../../services/rest/movie';

interface DetailedViewState {
    detailedPanel?: Movie;
    data: Movie[];
    results: List<ResultItemProps>;
    id?: number;
    filedId?: string;
}
export default DetailedViewState;
