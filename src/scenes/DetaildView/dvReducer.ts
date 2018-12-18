import createReducer, { ISwitch, ICase } from "../../utils/createReducer";
import DetailedViewState from "./dvState";
import DetailedViewActions from "./dvActions";

const stateInit: DetailedViewState = {
    prop: '',
};

const initDetailedView = ({state, payload}: ICase<DetailedViewState>): DetailedViewState => ({
        ...state,
    prop: payload,
});

const SWITCH: ISwitch<DetailedViewState> = {
    [DetailedViewActions.INIT_DETAILED_VIEW]: initDetailedView
};

const DetailedViewReducer = createReducer(SWITCH, stateInit);
export default DetailedViewReducer;
