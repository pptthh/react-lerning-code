import { IActions } from "../scenes/Root/rootActions";

export interface ICase<T> {
    state: T;
    payload?: unknown;
}

// fixme: rename ISwitch to SwitchMap
export interface ISwitch<T> {
    [s: string]: ({state, payload}: ICase<T>) => T;
}

// fixme: rename Switch to SwitchMap
export const createReducer =
    <T>(Switch: ISwitch<T>, stateInit: T) => 
        (state: T = stateInit, {type, payload}: IActions<unknown>): T => (
            Switch.hasOwnProperty(type) ? Switch[type]({state, payload}) :
                state
        );

export default createReducer;
