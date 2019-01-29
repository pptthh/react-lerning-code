import RootActions from '../scenes/Root/rootActions';
import store from '../scenes/Root/rootStore';
import SearchResultActions from '../scenes/SearchResults/srActions';
import { IS_SERVER, LOG } from '../utils';
import createReducer, { ICase, ISwitch } from '../utils/createReducer';
import ServerState from './serverState';
import SSRapp from './ssrApp';

const stateInit: ServerState = {isServer: IS_SERVER()};

const initServer = ({ state, payload }: ICase<ServerState>): ServerState => (
    LOG('serverReducer.init - clear Server', typeof payload),
    payload as ServerState
);

const rootInit = ({ state, payload }: ICase<ServerState>): ServerState => (
    LOG('serverReducer.rootInit', '\n=============\npayload:', payload),
    stateInit
);

const handleSuccess = ({ state, payload }: ICase<ServerState>): ServerState => (
    LOG('handleSuccess'),
    // LOG('serverReducer.handleSuccess', '\n=============\npayload:', payload),
    setTimeout(() => {
        LOG('handleSuccess.setTimeout'),
        state.props && LOG(SSRapp(state.props.req));
        store.dispatch({type: SearchResultActions.CLOSE_REQUEST});
    }, Number('1')),
    state
);
const closeRequest = ({ state, payload }: ICase<ServerState>): ServerState => {
    LOG('closeRequest');
    setTimeout(() => {
        LOG('closeRequest.setTimeout');
        IS_SERVER() && state.props && state.callBack &&
        state.callBack(SSRapp(state.props.req));
    }, 0);
    return stateInit;
};

const handleFail = ({ state, payload }: ICase<ServerState>): ServerState =>
(
    LOG('handleFail'),
    // LOG('serverReducer.handleFail', '\n=============\n', payload),
    setTimeout(() => {
        LOG('handleFail.setTimeout');
        state.props && state.props.res.send('some error happened');
    }, 0),
    state
);

const SWITCH: ISwitch<ServerState> = {
    [SearchResultActions.CLICK_SEARCH_SUCCESS]: handleSuccess,
    [SearchResultActions.CLICK_SEARCH_FAILED]: handleFail,
    [SearchResultActions.CLOSE_REQUEST]: closeRequest,
    [SearchResultActions.INIT_SERVER]: initServer,
    [RootActions.INIT]: rootInit,
};

// tslint:disable-next-line
const ServerReducer = createReducer(SWITCH, stateInit);
export default ServerReducer;
