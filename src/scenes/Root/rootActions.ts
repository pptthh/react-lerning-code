import { Dispatch } from 'redux';
import { LOG_DEBUG } from '../../utils';
import DetailedViewActions from '../DetaildView/dvActions';
import SearchResultActions from '../SearchResults/srActions';
import SearchResultState from '../SearchResults/srState';
import { SrUiFnCalls } from '../SearchResults/srUI';
import SrUrlProps from '../SearchResults/srUrlProps';

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
    URL_CHANGED = 'urlChanged',
    URL_FILM_ID = 'urlFilmId',
    URL_SEARCH = 'urlSearch',
}

export default RootActions;

export const rootFnCalls = {
    [RootActions.URL_SEARCH]:
        (dispatch: Dispatch<IActions>) =>
        (props: SearchResultState & SrUiFnCalls & SrUrlProps) =>
        !props.match.params || !props.match.params.query ||
        props.match.params.query === props.searchForm.searchField ?
            (LOG_DEBUG(RootActions.URL_SEARCH, true, props), true) :
            (setTimeout(() => {
                LOG_DEBUG(RootActions.URL_SEARCH, false, props);
                dispatch({
                    type: RootActions.URL_SEARCH,
                    payload: props.match.params.query,
                });
            }, 0),
            false),
};
