import { combineReducers, Reducer, ReducersMapObject } from 'redux';
import RootState from './rootState';
import SearchResultReducer from '../scenes/SearchResults/srReducer';
import DetailedViewReducer from '../scenes/DetaildView/dvReducer';

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

/**
import {combineReducers, Reducer, ReducersMapObject} from "redux";
import {AppState} from "../services/StoreDomain";

const appState: ReducersMapObject = {
    ediTcList: ediTcListReducer as any,
    view: appViewReducer as any,
    serverDiff: serverDiffReducer
};

/**/