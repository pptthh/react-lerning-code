import createReducer, { ICase, ISwitch } from "../../utils/createReducer";
import DetailedViewActions from "./dvActions";
import DetailedViewState from "./dvState";
import { Movie } from "../../services/rest/movie";

const stateInit: DetailedViewState = {
    data:[],
};

const initDetailedView = ({ state, payload }: ICase<DetailedViewState>): DetailedViewState => ({
    ...state,
});

const movieClicked = ({ state, payload }: ICase<DetailedViewState>): DetailedViewState => ({
    ...state,
    detailedPanel:
        state.data.find(
            (movie:Movie) => movie.id === payload
        ),
});

const SWITCH: ISwitch<DetailedViewState> = {
    [DetailedViewActions.INIT_DETAILED_VIEW]: initDetailedView,
    [DetailedViewActions.MOVIE_CLICKED]: movieClicked,
};

const DetailedViewReducer = createReducer(SWITCH, stateInit);
export default DetailedViewReducer;
