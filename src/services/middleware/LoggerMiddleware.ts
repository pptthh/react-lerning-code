import {AnyAction, Dispatch, Store} from "redux";
import { IActions } from "../../scenes/Root/rootActions";
import { LOG_DEBUG } from "../../utils";

/**
 * An example logger middleware implementation
 */
export default (store: unknown) =>
    (next: Dispatch<AnyAction>) =>
        (action: IActions) => {
            LOG_DEBUG('\t\t\tWill dispatch', action);
            
            // dispatch to the next reducer
            const nextAction = next(action);
            LOG_DEBUG('\t\t\tState after dispatch', (store as Store).getState());

            // This will likely be the action itself, unless
            // a middleware further in chain changed it.
            return nextAction;
        };
