import createReducer, { ICase, ISwitch } from "../../utils/createReducer";
import DetailedViewActions from "./dvActions";
import DetailedViewState from "./dvState";
import Movies, { Movie } from "../../services/rest/movie";
import SearchResultActions from "../SearchResults/srActions";

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
