import { createStore, applyMiddleware, compose } from 'redux';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import RootReducer from './rootReducer';
import LoggerMiddleware from '../../services/middleware/LoggerMiddleware';
import { DEV, TEST, PROD } from '../../utils';

const createStore4Prod = () =>
createStore(
    RootReducer,
    compose(
        applyMiddleware(),
        offline(offlineConfig)
    )
);

const createStore4Test = () =>
createStore(
    RootReducer,
    compose(
        applyMiddleware(LoggerMiddleware),
    )
);

const createStore4Dev = () => {
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
            applyMiddleware(LoggerMiddleware),
            offline(offlineConfig),
        )
    );
}

const store =
    DEV ? createStore4Dev() :
    TEST ? createStore4Test() :
    createStore4Prod();

export default store;

//  https://github.com/xgrommx/awesome-redux
//  redux-persist-store

// https://github.com/redux-offline/redux-offline