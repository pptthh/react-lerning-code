import DetailedViewActions from "../DetaildView/dvActions";
import SearchResultActions from "../SearchResults/srActions";

export interface IActions<T = unknown> {
    type: RootActions | DetailedViewActions | SearchResultActions;
    payload?: T;
}

enum RootActions {
    INIT = 'init',
};

export default RootActions;

