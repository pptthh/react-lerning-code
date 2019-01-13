import { Dispatch } from 'redux';
import FetchProps, { fetchMovieById } from '../../services/rest/fetchProps';
import Movies from '../../services/rest/movie';
import netUtils from '../../utils/netUtils';
import RootActions from '../Root/rootActions';
import DetailedViewState from './dvState';
import { DvUiFnCalls } from './dvUI';
import DvUrlProps from './dvUrlProps';

enum DetailedViewActions {
    INIT_DETAILED_VIEW = 'initDetailedView',
    MOVIE_CLICKED = 'movieClicked',
    HIDE_DETAILS = 'hideDetals',
    GENRE_LOAD_SUCCESS = 'genreLoadSuccess',
    GENRE_LOAD_FAILED = 'genreLoadFail',
    URL_FETCH_MOVIE = 'urlFetchFilm',
    URL_FETCH_MOVIE_SUCCESS = 'urlFetchFilmSuccess',
    URL_FETCH_MOVIE_FAILED = 'urlFetchFilmFailed',
}

export default DetailedViewActions;

export const fetchGenre = (dispatch: Dispatch, id: string): FetchProps<Movies> => ({
    request: netUtils.MOVIES_URL,
    success: (data: Movies) => dispatch({type: DetailedViewActions.GENRE_LOAD_SUCCESS, payload: data}),
    fail: (e: unknown) => dispatch({type: DetailedViewActions.GENRE_LOAD_FAILED, payload: e}),
    id,
});

export const dvFnCalls = {
    [DetailedViewActions.MOVIE_CLICKED]: (dispatch: Dispatch) => (id: string | number) =>
    dispatch({
        type: DetailedViewActions.MOVIE_CLICKED,
        payload: fetchGenre(dispatch, String(id)),
    }),
    [RootActions.URL_FILM_ID]:
        (dispatch: Dispatch) =>
        (props: DetailedViewState & DvUiFnCalls & DvUrlProps): boolean => 
            !!props.detailedPanel ? true :
            (dispatch({
                type: DetailedViewActions.URL_FETCH_MOVIE,
                payload: fetchMovieById({
                    dispatch,
                    id: props.match.params.id ? props.match.params.id : '',
                }),
            }),
            true),
};
