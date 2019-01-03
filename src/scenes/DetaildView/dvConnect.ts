import { connect } from "react-redux";
import DetailedViewUI from "./dvUI";
import RootState from "../Root/rootState";
import DetailedViewState from "./dvState";

const mapDispatchToProps: DetailedViewState = {}

const mapSubdictsToProps = (state: RootState): DetailedViewState => ({
    ... state.detailedView,
});

const mapStateToProps = (state: RootState) => mapSubdictsToProps(state);

const DetailedView = connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailedViewUI);

export default DetailedView;
