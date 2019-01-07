import createReducer, { ICase, ISwitch } from "../../utils/createReducer";
import DetailedViewActions from "./dvActions";
import DetailedViewState from "./dvState";
import Movies, { Movie } from "../../services/rest/movie";
import SearchResultActions from "../SearchResults/srActions";
import FetchMovies, { getRequest4Genre } from "../../services/rest/FetchMovies";
import FetchProps from "../../services/rest/FetchProps";
import { throwError, DBG, GET_ID } from "../../utils";

const stateInit: DetailedViewState = {
    data:[],
    results:[],
};

const initDetailedView = ({ state, payload }: ICase<DetailedViewState>): DetailedViewState => ({
    ...state,
});

const matchId = (id:number) => (movie:Movie) => movie.id === id;

const movieClicked = ({ state, payload }: ICase<DetailedViewState>): DetailedViewState => (
    GET_ID(payload) && FetchMovies({
    ... payload,
    request: getRequest4Genre(state),
} as FetchProps<Movies>),
{
    ...state,
    detailedPanel:
        state.data.find(matchId(GET_ID(payload))) ||
        state.results.find(matchId(GET_ID(payload))),
});

const clickSearchSuccess = ({ state, payload }: ICase<DetailedViewState>): DetailedViewState => ({
    ... state,
    data: (payload as Movies).data,
});

const genreLoadSuccess = ({ state, payload }: ICase<DetailedViewState>): DetailedViewState => ({
    ... state,
    results: (payload as Movies).data,
});
const genreLoadFail = ({ state, payload }: ICase<DetailedViewState>): DetailedViewState => (
DBG(),
{
    ... state,
});

const SWITCH: ISwitch<DetailedViewState> = {
    [DetailedViewActions.INIT_DETAILED_VIEW]: initDetailedView,
    [DetailedViewActions.MOVIE_CLICKED]: movieClicked,
    [SearchResultActions.CLICK_SEARCH_SUCCESS]: clickSearchSuccess,
    [DetailedViewActions.GENRE_LOAD_SUCCESS]: genreLoadSuccess,
    [DetailedViewActions.GENRE_LOAD_SUCCESS]: genreLoadFail,
};

const DetailedViewReducer = createReducer(SWITCH, stateInit);
export default DetailedViewReducer;
