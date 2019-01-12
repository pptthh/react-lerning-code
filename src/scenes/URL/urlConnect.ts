import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Dispatch } from 'redux';
import RootActions from '../Root/rootActions';
import RootState from '../Root/rootState';
import UrlProps from './urlProps';
import UrlState from './urlState';
import urlUI, { UrlUiFnCalls } from './urlUI';

const mapDispatchToProps = (dispatch: Dispatch): UrlUiFnCalls => ({
    queryNotMatch: (query: string) => dispatch({
        type: RootActions.URL_SEARCH,
        payload: query,
    }),
    filmIdNotMatch: (id: string) => dispatch({
        type: RootActions.URL_FILM_ID,
        payload: id,
    }),
});

const mapSubdictsToProps =
       (state: RootState, match: UrlProps): UrlState => ({
        ...state.url,
        match,
    });

const mapStateToProps = mapSubdictsToProps;

const UrlView = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(urlUI));

export default UrlView;
