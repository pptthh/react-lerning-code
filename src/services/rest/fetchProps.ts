import { Dispatch } from 'redux';
import DetailedViewActions, { fetchGenre } from '../../scenes/DetaildView/dvActions';
import SearchResultActions from '../../scenes/SearchResults/srActions';
import netUtils from '../../utils/netUtils';
import Movies, { Movie } from './movie';

export interface FetchProps <T> {
    success?: (data: T) => void;
    fail?: (...msg: unknown[]) => void;
    request: string;
    id?: string;
    query?: string;
}

interface FetchPropsCreator {
    dispatch: Dispatch;
    query?: string;
    id?: string;
}

export const fetchMovies = ({
    dispatch,
    query,
}: FetchPropsCreator): FetchProps<Movies> => ({
    request: netUtils.MOVIES_URL,
    success: (data: Movies) => dispatch({
        type: SearchResultActions.CLICK_SEARCH_SUCCESS,
        payload: data,
    }),
    fail: (e: unknown) => dispatch({
        type: SearchResultActions.CLICK_SEARCH_FAILED,
        payload: e,
    }),
    query,
});

export const fetchMovieById = ({
    dispatch,
    id,
}: FetchPropsCreator): FetchProps<Movie> => ({
    request: netUtils.MOVIES_URL + '/' + id,
    success: (data: Movie) => dispatch({
        type: DetailedViewActions.URL_FETCH_MOVIE_SUCCESS,
        payload: {
            movie: data,
            genreFetchProps: fetchGenre(dispatch, String(id)),
        },
    }),
    fail: (e: unknown) => dispatch({
        type: DetailedViewActions.URL_FETCH_MOVIE_FAILED,
        payload: { error: e, id },
    }),
    id,
});
