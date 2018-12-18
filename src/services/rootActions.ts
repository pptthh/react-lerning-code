import DetailedViewActions from "../scenes/DetaildView/dvActions";
import SearchResultActions from "../scenes/SearchResults/srActions";

export interface IActions<T> {
    type: Actions | DetailedViewActions | SearchResultActions;
    payload?: T;
}

enum Actions {
    ITIT = 'INIT',
};

export default Actions;

