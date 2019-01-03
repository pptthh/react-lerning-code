import RootActions from "../Root/rootActions";
import createReducer, { ICase, ISwitch } from "../../utils/createReducer";
import DetailedViewActions from "./dvActions";
import DetailedViewState from "./dvState";
import { Movie } from "../../services/rest/movie";

const stateInit: DetailedViewState = {};

const initDetailedView = ({ state, payload }: ICase<DetailedViewState>): DetailedViewState => ({
    ...state,
});

const movieClicked = ({ state, payload }: ICase<DetailedViewState>): DetailedViewState => ({
    ...state,
    detailedPanel: payload as Movie
});

// const rootInit = ({ state, payload }: ICase<DetailedViewState>): DetailedViewState => ({
//     ...state,
//     // moviesData : payload as Movies,
// });

const SWITCH: ISwitch<DetailedViewState> = {
    [DetailedViewActions.INIT_DETAILED_VIEW]: initDetailedView,
    [DetailedViewActions.MOVIE_CLICKED]: movieClicked,
    // [RootActions.INIT]: rootInit,
};

const DetailedViewReducer = createReducer(SWITCH, stateInit);
export default DetailedViewReducer;
