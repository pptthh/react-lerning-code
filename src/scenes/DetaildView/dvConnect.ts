import { connect } from "react-redux";
import DetailedViewUI, { dvUIActions } from "./dvUI";
import RootState from "../Root/rootState";
import DetailedViewState from "./dvState";
import { IActions } from "../Root/rootActions";
import DetailedViewActions from "./dvActions";
import { Dispatch } from "redux";
import NetUtils from "../../utils/NetUtils";
import Movies from "../../services/rest/movie";
import FetchProps from "../../services/rest/FetchProps";

export const fetchGenre = (dispatch:Dispatch, id:number): FetchProps<Movies> => ({
    request: NetUtils.MOVIES_URL,
    success: (data: Movies) => dispatch({type:DetailedViewActions.GENRE_LOAD_SUCCESS, payload: data}),
    fail: (e: unknown) => dispatch({type:DetailedViewActions.GENRE_LOAD_FAILED, payload: e}),
    id:id,
});

const mapDispatchToProps = (dispatch: Dispatch):dvUIActions => ({
    resultsItemAction: {
        itemClick: (id: number) =>
            dispatch({
                type:DetailedViewActions.MOVIE_CLICKED,
                payload: fetchGenre(dispatch, id),
            }),
    }
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
