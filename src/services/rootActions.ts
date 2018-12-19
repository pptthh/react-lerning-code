import DetailedViewActions from "../scenes/DetaildView/dvActions";
import SearchResultActions from "../scenes/SearchResults/srActions";

export interface IActions<T> {
    type: RootActions | DetailedViewActions | SearchResultActions;
    payload?: T;
}

enum RootActions {
    INIT = 'init',
};

export default RootActions;

