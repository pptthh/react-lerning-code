/**
 * WARNING!!! Redux MAGIC: reducer naming must be in sync with State property names!!!
 * For details see the end of the Redux's composeReducers source code
*/

import { combineReducers } from 'redux';


export default combineReducers({
});


/**
import {combineReducers, Reducer, ReducersMapObject} from "redux";
import {AppState} from "../services/StoreDomain";
import {ediTcListReducer} from "./EdiTc/reducer";
import {appViewReducer} from "./AppView/reducer";
import {serverDiffReducer} from "./ServerDiffPage/reducer";


const appState: ReducersMapObject = {
    ediTcList: ediTcListReducer as any,
    view: appViewReducer as any,
    serverDiff: serverDiffReducer
};

export const rootReducer: Reducer<AppState> = combineReducers(appState);
/**/