import RootActions from "../../services/rootActions";
import createReducer, { ICase, ISwitch } from "../../utils/createReducer";
import DetailedViewActions from "./dvActions";
import DetailedViewState from "./dvState";
import TestData from "../../services/rest/testData";

const stateInit: DetailedViewState = {
    results: [],
};

const initDetailedView = ({ state, payload }: ICase<DetailedViewState>): DetailedViewState => ({
    ...state,
});

const rootInit = ({ state, payload }: ICase<DetailedViewState>): DetailedViewState => ({
    ...state,
    moviesData : TestData,
});

const SWITCH: ISwitch<DetailedViewState> = {
    [DetailedViewActions.INIT_DETAILED_VIEW]: initDetailedView,
    [RootActions.INIT]: rootInit,
};

const DetailedViewReducer = createReducer(SWITCH, stateInit);
export default DetailedViewReducer;
