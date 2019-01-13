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
    URL_FETCH_MOVIE_SUCCESS= 'urlFetchFilmSuccess',
    URL_FETCH_MOVIE_FAILED= 'urlFetchFilmFailed',
}

export default DetailedViewActions;

export const dvFnCalls = {
    [RootActions.URL_FILM_ID]: (props: DetailedViewState & DvUiFnCalls & DvUrlProps) =>
        !props.detailedPanel ? true :
        false,
};
