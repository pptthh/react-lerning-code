import { Dispatch } from 'redux';
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
    [RootActions.URL_SEARCH]:
        (dispatch: Dispatch<IActions>) =>
        (props: SearchResultState & SrUiFnCalls & SrUrlProps) =>
        !props.match.params || !props.match.params.query ||
        props.match.params.query === props.oldQuery ?
            true :
            (setTimeout(() => {
                dispatch({
                    type: RootActions.URL_SEARCH,
                    payload: props.match.params.query,
                });
            }, 0),
            false),
};
