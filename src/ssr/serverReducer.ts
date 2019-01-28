import RootActions from '../scenes/Root/rootActions';
import store from '../scenes/Root/rootStore';
import SearchResultActions from '../scenes/SearchResults/srActions';
import { LOG } from '../utils';
import createReducer, { ICase, ISwitch } from '../utils/createReducer';
import { asyncHadler } from './server';
import ServerState from './serverState';
import SSRapp from './ssrApp';

const initServer = ({ state, payload }: ICase<ServerState>): ServerState =>
(
    LOG('serverReducer.init - clear Server', typeof payload),
    payload as ServerState
);

const rootInit = ({ state, payload }: ICase<ServerState>): ServerState =>
(
    LOG('serverReducer.rootInit', '\n=============\npayload:', payload),
    state
);

const handleSuccess = ({ state, payload }: ICase<ServerState>): ServerState =>
(
    LOG('serverReducer.handleSuccess', '\n=============\npayload:', payload),
    setTimeout(() => {
        asyncHadler(
            state.next,
            state.res,
            SSRapp(state.req),
        );
        store.dispatch({type: RootActions.CLOSE_REQUEST});
    }, Number('10')),
    state
);

const handleFail = ({ state, payload }: ICase<ServerState>): ServerState =>
(
    LOG('serverReducer.handleFail', '\n=============\n', payload),
    setTimeout(() => {
        state.res.send('some error happened');
    }, 0),
    state
);

const SWITCH: ISwitch<ServerState> = {
    [SearchResultActions.CLICK_SEARCH_SUCCESS]: handleSuccess,
    [SearchResultActions.CLICK_SEARCH_FAILED]: handleFail,
    [RootActions.CLOSE_REQUEST]: initServer,
    [RootActions.INIT_SERVER]: initServer,
    [RootActions.INIT]: rootInit,
};

// tslint:disable-next-line
const ServerReducer = createReducer(SWITCH, null as any);
export default ServerReducer;
