import { IActions } from "../services/rootActions";

export interface ICase<T> {
    state: T;
    payload?: unknown;
}

export interface ISwitch<T> {
    [s: string]: ({state, payload}: ICase<T>) => T;
}

export const createReducer =
    <T>(Switch: ISwitch<T>, stateInit: T) => 
        (state: T = stateInit, {type, payload}: IActions<unknown>): T => (
            console.log('\tswitch',type, payload),
            Switch.hasOwnProperty(type) ? Switch[type]({state, payload}) :
                state
        );


export default createReducer;
