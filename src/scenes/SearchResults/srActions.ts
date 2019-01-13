import { string } from 'prop-types';
import { Dispatch } from 'redux';
import FetchProps, { fetchMovies } from '../../services/rest/fetchProps';
import Movies from '../../services/rest/movie';
import netUtils from '../../utils/netUtils';
import RootActions, { IActions } from '../Root/rootActions';
import SearchResultState from './srState';
import { SrUiFnCalls } from './srUI';
import SrUrlProps from './srUrlProps';

enum SearchResultActions {
    INIT_SEARCH = 'initSearch',
    CHANGE_SEARCH_TEXT = 'changeSearchText',
    CHANGE_SEARCH_BY = 'changeSearchBy',
    CHANGE_SORT_BY = 'changeSorthBy',
    CLICK_SEARCH = 'clickSearch',
    CLICK_SEARCH_SUCCESS = 'clickSearchSuccess',
    CLICK_SEARCH_FAILED = 'clickSearchFail',
}

export default SearchResultActions;

export const srFnCalls = {
    [RootActions.URL_SEARCH]: (
        (dispatch: Dispatch<IActions>) =>
        (props: SearchResultState & SrUiFnCalls & SrUrlProps) =>
        !props.match.params || !props.match.params.query ||
        props.match.params.query === props.oldQuery ? true :
            (dispatch({
                type: RootActions.URL_SEARCH,
                payload: fetchMovies({
                    dispatch,
                    query: props.match.params.query,
                }),
            }),
            false
            )
    ),
    offlineActions: {
        searchAction: (dispatch: Dispatch): IActions<FetchProps<Movies>> => ({
            type: SearchResultActions.CLICK_SEARCH,
            payload: fetchMovies({dispatch}),
            meta: {
                offline: {
                    effect: {
                        url: netUtils.MOVIES_URL,
                        method: 'GET',
                    },
                    commit: {
                        type: SearchResultActions.CLICK_SEARCH_SUCCESS,
                    },
                    rollback: {
                        type: SearchResultActions.CLICK_SEARCH_FAILED,
                    },
                },
            },
        }),
    },
};
