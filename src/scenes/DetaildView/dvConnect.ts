import { connect } from "react-redux";
import DetailedViewUI from "./dvUI";
import RootState from "../../services/rootState";
import DetailedViewState from "./dvState";
import { Movie } from "../../services/rest/movie";
import { ResultItemProps } from "../../components/FoundMovies/ResultItem";

const mapDispatchToProps: DetailedViewState = {
    results:[],
    moviesData: {data:[], total: 0, offset: 0, limit: 0},
}
const mapSubdictsToProps = (state: RootState): DetailedViewState => ({
    ... state.detailedView,
    results: state.detailedView.moviesData.data.map(
        (item: Movie):ResultItemProps => ({
            ...item,
            releaseYear: item.release_date.substring(0,4),
        })
    ),
});

const mapStateToProps = (state: RootState) => mapSubdictsToProps(state);

const DetailedView = connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailedViewUI);

export default DetailedView;
