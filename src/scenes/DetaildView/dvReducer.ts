import createReducer, { ICase, ISwitch } from "../../utils/createReducer";
import DetailedViewActions from "./dvActions";
import DetailedViewState from "./dvState";
import Movies, { Movie } from "../../services/rest/movie";
import SearchResultActions from "../SearchResults/srActions";
import FetchMovies, { getRequest4Genre } from "../../services/rest/FetchMovies";
import FetchProps from "../../services/rest/FetchProps";
import { object } from "prop-types";
import { throwError, DBG } from "../../utils";

const stateInit: DetailedViewState = {
    data:[],
    results:[],
};

const initDetailedView = ({ state, payload }: ICase<DetailedViewState>): DetailedViewState => ({
    ...state,
});

const matchId = (id:number) => (movie:Movie) => movie.id === id;
const getId = (p:unknown):number =>
    typeof p === 'object' &&
    Object(p).hasOwnproperty('id') ?
    Object(p).id :
    throwError('does not contains id property' + p);

const movieClicked = ({ state, payload }: ICase<DetailedViewState>): DetailedViewState => (
FetchMovies({
    ... payload,
    request: getRequest4Genre(state),
} as FetchProps<Movies>),
{
    ...state,
    detailedPanel:
        DBG && state.data.find(matchId(getId(payload))) ||
        state.results.find(matchId(getId(payload))),
});

const clickSearchSuccess = ({ state, payload }: ICase<DetailedViewState>): DetailedViewState => ({
    ... state,
    data: (payload as Movies).data,
});

const SWITCH: ISwitch<DetailedViewState> = {
    [DetailedViewActions.INIT_DETAILED_VIEW]: initDetailedView,
    [DetailedViewActions.MOVIE_CLICKED]: movieClicked,
    [SearchResultActions.CLICK_SEARCH_SUCCESS]: clickSearchSuccess,
};

const DetailedViewReducer = createReducer(SWITCH, stateInit);
export default DetailedViewReducer;
