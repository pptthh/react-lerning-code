import DetailedViewActions from "../DetaildView/dvActions";
import SearchResultActions from "../SearchResults/srActions";

interface OfflineAction<T> {
    type: RootActions | DetailedViewActions | SearchResultActions,
    meta?: unknown,
    payload?: T,
}
interface OfflineEfect {
    url: string,
    method: string,
    json?: JSON,
    body?: string,
    headers?: string,
}
export interface IActions<T = unknown> {
    type: RootActions | DetailedViewActions | SearchResultActions;
    payload?: T;
    meta?:{
        offline:{
            // the network action to execute:
            effect: OfflineEfect,
            
            // action to dispatch when effect succeeds:
            commit?: OfflineAction<T>,
            
            // action to dispatch if network action fails permanently:
            rollback?: OfflineAction<T>,
        }
    }
}

enum RootActions {
    INIT = 'init',
};

export default RootActions;

