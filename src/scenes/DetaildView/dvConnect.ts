import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import FetchProps from '../../services/rest/fetchProps';
import Movies from '../../services/rest/movie';
import netUtils from '../../utils/netUtils';
import { IActions } from '../Root/rootActions';
import RootState from '../Root/rootState';
import DetailedViewActions from './dvActions';
import DetailedViewState from './dvState';
import DetailedViewUI, { DvUiFnCalls } from './dvUI';
import { withRouter } from 'react-router';

export const fetchGenre = (dispatch: Dispatch, id: number): FetchProps<Movies> => ({
    request: netUtils.MOVIES_URL,
    success: (data: Movies) => dispatch({type: DetailedViewActions.GENRE_LOAD_SUCCESS, payload: data}),
    fail: (e: unknown) => dispatch({type: DetailedViewActions.GENRE_LOAD_FAILED, payload: e}),
    id,
});

const mapDispatchToProps = (dispatch: Dispatch): DvUiFnCalls => ({
    resultsItemfnCalls: {
        itemClick: (id: number) =>
            dispatch({
                type: DetailedViewActions.MOVIE_CLICKED,
                payload: fetchGenre(dispatch, id),
            }),
    },
});

const mapSubdictsToProps = (state: RootState): DetailedViewState => ({
    ...state.detailedView,
    data: state.searchResult.moviesData.data,
});

const mapStateToProps = mapSubdictsToProps;

const DetailedView = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(DetailedViewUI));

export default DetailedView;
