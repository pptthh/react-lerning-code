import { combineReducers, Reducer, ReducersMapObject } from 'redux';
import RootState from './rootState';
import SearchResultReducer from '../SearchResults/srReducer';
import DetailedViewReducer from '../DetaildView/dvReducer';

/**
 * WARNING!!! Redux MAGIC: reducer naming must be in sync with State property names!!!
 * For details see the end of the Redux's composeReducers source code
*/

// export const rootReducer: Reducer<AppState> = combineReducers(appState);
const rootReducers:ReducersMapObject = {
    detailedView: DetailedViewReducer,
    searchResult: SearchResultReducer,
}
const RootReducer: Reducer<RootState> = combineReducers(rootReducers);
export default RootReducer;
