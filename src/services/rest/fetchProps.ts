import { Dispatch } from 'redux';
import { IActions } from '../../scenes/Root/rootActions';
import SearchResultActions from '../../scenes/SearchResults/srActions';
import netUtils from '../../utils/netUtils';
import Movies from './movie';

interface FetchProps <T> {
    success?: (data: T) => void;
    fail?: (...msg: unknown[]) => void;
    request: string;
    id?: number;
    query?: string;
}
export default FetchProps;

interface FetchPropsCreator {
    dispatch: Dispatch;
    query?: string;
    id?: number;
}

export const fetchMovies = ({
    dispatch,
    query,
    id,
}: FetchPropsCreator): FetchProps<Movies> => ({
    request: netUtils.MOVIES_URL,
    success: (data: Movies) => dispatch({
        type: SearchResultActions.CLICK_SEARCH_SUCCESS,
        payload: data,
    }),
    fail: (e: unknown) => dispatch({
        type: SearchResultActions.CLICK_SEARCH_FAILED,
        payload: e,
    }),
    query,
    id,
});
