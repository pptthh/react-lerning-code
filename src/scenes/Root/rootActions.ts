import DetailedViewActions from '../DetaildView/dvActions';
import SearchResultActions from '../SearchResults/srActions';
import store from './rootStore';

interface OfflineAction<T> {
    type: RootActions | DetailedViewActions | SearchResultActions;
    meta?: unknown;
    payload?: T;
}
interface OfflineEfect {
    url: string;
    method: string;
    json?: JSON;
    body?: string;
    headers?: string;
}
export interface IActions<T = unknown> {
    type: RootActions | DetailedViewActions | SearchResultActions;
    payload?: T;
    meta?: {
        offline: {
            // the network action to execute:
            effect: OfflineEfect,

            // action to dispatch when effect succeeds:
            commit?: OfflineAction<T>,

            // action to dispatch if network action fails permanently:
            rollback?: OfflineAction<T>,
        },
    };
}

enum RootActions {
    INIT = 'init',
    // INIT_SERVER = 'initServer',
    // CLOSE_REQUEST = 'closeRequest',
    URL_CHANGED = 'urlChanged',
    // URL_FILM_ID = 'urlFilmId',
    // URL_SEARCH = 'urlSearch',
}

export default RootActions;

export const dispatchAction =
    (type: RootActions | DetailedViewActions | SearchResultActions, payload?: unknown) => (
    setTimeout(() => {
        store.dispatch({type, payload});
    }, 0)
);
