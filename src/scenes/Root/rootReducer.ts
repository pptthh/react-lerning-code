import { combineReducers, Reducer, ReducersMapObject } from 'redux';
import ServerReducer from '../../ssr/serverReducer';
import { IS_SERVER } from '../../utils';
import DetailedViewReducer from '../DetaildView/dvReducer';
import SearchResultReducer from '../SearchResults/srReducer';
import RootState from './rootState';

/**
 * WARNING!!! Redux MAGIC: reducer naming must be in sync with State property names!!!
 * For details see the end of the Redux's composeReducers source code
 */

// export const rootReducer: Reducer<AppState> = combineReducers(appState);
const rootReducers: ReducersMapObject = {
    detailedView: DetailedViewReducer,
    searchResult: SearchResultReducer,
    // server: ServerReducer,
};

if (IS_SERVER()) {
    rootReducers.server = ServerReducer;
}

const RootReducer: Reducer<RootState> = combineReducers(rootReducers);
export default RootReducer;
