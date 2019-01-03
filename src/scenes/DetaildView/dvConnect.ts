import { connect } from "react-redux";
import DetailedViewUI, { dvUIActions } from "./dvUI";
import RootState from "../Root/rootState";
import DetailedViewState from "./dvState";
import { IActions } from "../Root/rootActions";
import DetailedViewActions from "./dvActions";

const mapDispatchToProps = (dispatch: (a:IActions) => void):dvUIActions => ({
    actions: {
        clickSearch: () => dispatch({type: DetailedViewActions.MOVIE_CLICKED}),
    },
})

const mapSubdictsToProps = (state: RootState): DetailedViewState => ({
    ... state.detailedView,
    data: state.searchResult.moviesData.data,
});

const mapStateToProps = (state: RootState) => mapSubdictsToProps(state);

const DetailedView = connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailedViewUI);

export default DetailedView;
