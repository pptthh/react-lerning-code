import FetchMovieById from '../../services/rest/fetchMovieById';
import FetchMovies, { getRequest4Genre } from '../../services/rest/fetchMovies';
import FetchProps, { fetchMovieById } from '../../services/rest/fetchProps';
import Movies, { Movie } from '../../services/rest/movie';
import { DBG, GET_ID, LOG_DEBUG, NOOP } from '../../utils';
import createReducer, { ICase, ISwitch } from '../../utils/createReducer';
import RootActions from '../Root/rootActions';
import SearchResultActions from '../SearchResults/srActions';
import DetailedViewActions from './dvActions';
import DetailedViewState from './dvState';

const stateInit: DetailedViewState = {
    data: [],
    results: [],
};

const initDetailedView = ({ state, payload }: ICase<DetailedViewState>): DetailedViewState => ({
    ...state,
});

const matchId = (id: number) => (movie: Movie) => movie.id === id;

const urlFilmId = ({ state, payload }: ICase<DetailedViewState>): DetailedViewState => (
    state = {
        ...state,
        id: GET_ID(payload),
    },
    FetchMovieById(payload as FetchProps<Movie>),
    state
);

const movieClicked = ({ state, payload }: ICase<DetailedViewState>): DetailedViewState => (
    state = {
        ...state,
        id: GET_ID(payload),
        detailedPanel:
            state.data.find(matchId(GET_ID(payload))) ||
            state.results.find(matchId(GET_ID(payload))),
    },
    GET_ID(payload) && FetchMovies({
        ...payload,
        request: getRequest4Genre(state),
    } as FetchProps<Movies>),
    state
);

const clickSearchSuccess = ({ state, payload }: ICase<DetailedViewState>): DetailedViewState => ({
    ...state,
    data: (payload as Movies).data,
});

const genreLoadSuccess = ({ state, payload }: ICase<DetailedViewState>): DetailedViewState => ({
    ...state,
    results: (payload as Movies).data,
});
const genreLoadFail = ({ state, payload }: ICase<DetailedViewState>): DetailedViewState => (
    DBG(),
    state
);

const SWITCH: ISwitch<DetailedViewState> = {
    [DetailedViewActions.INIT_DETAILED_VIEW]: initDetailedView,
    [DetailedViewActions.MOVIE_CLICKED]: movieClicked,
    [SearchResultActions.CLICK_SEARCH_SUCCESS]: clickSearchSuccess,
    [DetailedViewActions.GENRE_LOAD_SUCCESS]: genreLoadSuccess,
    [DetailedViewActions.GENRE_LOAD_FAILED]: genreLoadFail,
    [RootActions.URL_FILM_ID]: urlFilmId,
    // [DetailedViewActions.URL_FETCH_MOVIE_SUCCESS]: (u: unknown) => LOG_DEBUG(DetailedViewActions.URL_FETCH_MOVIE_SUCCESS,u,),
    // [DetailedViewActions.URL_FETCH_MOVIE_FAILED]: (u: unknown) => LOG_DEBUG(DetailedViewActions.URL_FETCH_MOVIE_FAILED,u,),
};

const DetailedViewReducer = createReducer(SWITCH, stateInit);
export default DetailedViewReducer;
