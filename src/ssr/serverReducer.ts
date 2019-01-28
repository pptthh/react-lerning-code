import RootActions from '../scenes/Root/rootActions';
import SearchResultActions from '../scenes/SearchResults/srActions';
import { LOG } from '../utils';
import createReducer, { ICase, ISwitch } from '../utils/createReducer';
import ServerState from './serverState';

const initServer = ({ state, payload }: ICase<ServerState>): ServerState =>
(
    LOG('serverReducer.initServer'),
    payload as ServerState
);

const rootInit = ({ state, payload }: ICase<ServerState>): ServerState =>
(
    LOG('serverReducer.rootInit'),
    state
);

const handleSuccess = ({ state, payload }: ICase<ServerState>): ServerState =>
(
    LOG('serverReducer.handleSuccess'),
    state
);

const handleFail = ({ state, payload }: ICase<ServerState>): ServerState =>
(
    LOG('serverReducer.handleFail'),
    state
);

const SWITCH: ISwitch<ServerState> = {
    [SearchResultActions.CLICK_SEARCH_SUCCESS]: handleSuccess,
    [SearchResultActions.CLICK_SEARCH_FAILED]: handleFail,
    [RootActions.INIT_SERVER]: initServer,
    [RootActions.INIT]: rootInit,
};

// tslint:disable-next-line
const ServerReducer = createReducer(SWITCH, null as any);
export default ServerReducer;
