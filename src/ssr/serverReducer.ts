import DetailedViewActions from '../scenes/DetaildView/dvActions';
import { RootActions } from '../scenes/Root/rootActions';
import store from '../scenes/Root/rootStore';
import SearchResultActions from '../scenes/SearchResults/srActions';
import { IS_SERVER, LOG } from '../utils';
import createReducer, { ICase, ISwitch } from '../utils/createReducer';
import ServerState from './serverState';
import SSRapp from './ssrApp';

const stateInit: ServerState = {isServer: IS_SERVER()};

const reset = ({ state, payload }: ICase<ServerState>): ServerState => stateInit;

const initServer = ({ state, payload }: ICase<ServerState>): ServerState =>
    payload as ServerState;

const rootInit = ({ state, payload }: ICase<ServerState>): ServerState =>
    stateInit;

const handleSuccess = ({ state, payload }: ICase<ServerState>): ServerState => (
    setTimeout(() => {
        LOG('\t after handleSuccess');
        store.dispatch({type: SearchResultActions.CLOSE_REQUEST});
    }, 0),
    state
);
const closeRequest = ({ state, payload }: ICase<ServerState>): ServerState => (
    setTimeout(() => {
        LOG('\tafter closeRequest');
        IS_SERVER() && state.props && state.callBack &&
        state.callBack(SSRapp(state.props.req));
    }, 0),
    stateInit
);

const handleFail = ({ state, payload }: ICase<ServerState>): ServerState => (
    setTimeout(() => {
        LOG('\tafter handleFail');
        IS_SERVER() && state.props && state.callBack &&
        state.callBack('some error happened');
    }, 0),
    stateInit
);

const SWITCH: ISwitch<ServerState> = {
    [SearchResultActions.CLICK_SEARCH_SUCCESS]: handleSuccess,
    [SearchResultActions.CLICK_SEARCH_FAILED]: handleFail,
    [SearchResultActions.CLOSE_REQUEST]: closeRequest,
    [SearchResultActions.INIT_SERVER]: initServer,
    [DetailedViewActions.INIT]: rootInit,
    [DetailedViewActions.RESET]: reset,
};

const ServerReducer = createReducer(SWITCH, stateInit);
export default ServerReducer;
