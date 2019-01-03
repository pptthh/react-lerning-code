import { Movie } from "../../services/rest/movie";

interface DetailedViewState {
    detailedPanel?: Movie;
    data: Movie[],
}
export default DetailedViewState;