import RootActions from '../scenes/Root/rootActions';
import store from '../scenes/Root/rootStore';
import SearchResultActions from '../scenes/SearchResults/srActions';
import { LOG } from '../utils';
import createReducer, { ICase, ISwitch } from '../utils/createReducer';
import { asyncHadler } from './server';
import ServerState from './serverState';
import SSRapp from './ssrApp';

// tslint:disable-next-line
const UNDEFINED: any = undefined;

const initServer = ({ state, payload }: ICase<ServerState>): ServerState => (
    LOG('serverReducer.init - clear Server', typeof payload),
    payload as ServerState
);

const rootInit = ({ state, payload }: ICase<ServerState>): ServerState => (
    LOG('serverReducer.rootInit', '\n=============\npayload:', payload),
    state
);

const handleSuccess = ({ state, payload }: ICase<ServerState>): ServerState => (
    LOG('handleSuccess'),
    // LOG('serverReducer.handleSuccess', '\n=============\npayload:', payload),
    setTimeout(() => {
        LOG(SSRapp(state.req));
        store.dispatch({type: RootActions.CLOSE_REQUEST});
    }, Number('1')),
    state
);
const closeRequest = ({ state, payload }: ICase<ServerState>): ServerState => {
    LOG('closeRequest');
    const st = state;
    setTimeout(() => {
    // asyncHadler(
    //         st.res,
            LOG(SSRapp(st.req));
    //         UNDEFINED,
    //     );
    }, 0);
    return state;
    return UNDEFINED;
};

const handleFail = ({ state, payload }: ICase<ServerState>): ServerState =>
(
    LOG('handleFail'),
    // LOG('serverReducer.handleFail', '\n=============\n', payload),
    setTimeout(() => {
        state.res.send('some error happened');
    }, 0),
    state
);

const SWITCH: ISwitch<ServerState> = {
    [SearchResultActions.CLICK_SEARCH_SUCCESS]: handleSuccess,
    [SearchResultActions.CLICK_SEARCH_FAILED]: handleFail,
    [RootActions.CLOSE_REQUEST]: closeRequest,
    [RootActions.INIT_SERVER]: initServer,
    [RootActions.INIT]: rootInit,
};

// tslint:disable-next-line
const ServerReducer = createReducer(SWITCH, UNDEFINED);
export default ServerReducer;
