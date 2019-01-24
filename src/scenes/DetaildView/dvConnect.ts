import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Dispatch } from 'redux';
import RootActions from '../Root/rootActions';
import RootState from '../Root/rootState';
import DetailedViewActions, { dvFnCalls } from './dvActions';
import DetailedViewState from './dvState';
import dvUI, { DvUiFnCalls } from './dvUI';
import DvUrlProps from './dvUrlProps';

const mapDispatchToProps = (dispatch: Dispatch): DvUiFnCalls => ({
    urlOpenedFnCalls: dvFnCalls[RootActions.URL_FILM_ID](dispatch),
    resultsItemFnCalls: {
        itemClick: dvFnCalls[DetailedViewActions.MOVIE_CLICKED](dispatch),
    },
});

const mapStateToProps = (
    state: RootState,
    match: DvUrlProps,
    ): DetailedViewState => ({
    ...state.detailedView,
    data: state.searchResult.moviesData.data,
});

const DetailedView =
// withRouter
(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(dvUI)
);
export default DetailedView;
