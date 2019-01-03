import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from './rootReducer';
import LoggerMiddleware from '../../services/middleware/LoggerMiddleware';
import { DEV } from '../../utils';

const createDevStore = () => {    //  dev env
    // tslint:disable-next-line
    const win = window as any;
    const composeEnhancers =
        typeof win === 'object' &&
        win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            }) : compose;

    return createStore(
        RootReducer,
        composeEnhancers(
            applyMiddleware(
                LoggerMiddleware,
            )
        )
    );
}

const store = !DEV ?
    createStore(RootReducer) :
    createDevStore();

export default store;

//  https://github.com/xgrommx/awesome-redux
//  redux-persist-store
