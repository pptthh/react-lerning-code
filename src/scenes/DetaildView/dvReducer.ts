import RootActions from "../../services/rootActions";
import createReducer, { ICase, ISwitch } from "../../utils/createReducer";
import DetailedViewActions from "./dvActions";
import DetailedViewState from "./dvState";
import Movies, { EmptyMovieList } from "../../services/rest/movie";

const stateInit: DetailedViewState = {
    results: [],
    moviesData: EmptyMovieList,
};

const initDetailedView = ({ state, payload }: ICase<DetailedViewState>): DetailedViewState => ({
    ...state,
});

const rootInit = ({ state, payload }: ICase<DetailedViewState>): DetailedViewState => ({
    ...state,
    moviesData : payload as Movies,
});

const SWITCH: ISwitch<DetailedViewState> = {
    [DetailedViewActions.INIT_DETAILED_VIEW]: initDetailedView,
    [RootActions.INIT]: rootInit,
};

const DetailedViewReducer = createReducer(SWITCH, stateInit);
export default DetailedViewReducer;
