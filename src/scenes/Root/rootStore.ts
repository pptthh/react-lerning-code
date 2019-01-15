import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import { applyMiddleware, compose, createStore } from 'redux';
import LoggerMiddleware from '../../services/middleware/loggerMiddleware';
import { DEV, PROD, TEST } from '../../utils';
import RootReducer from './rootReducer';

const createStore4Prod = () =>
createStore(
    RootReducer,
    compose(
        applyMiddleware(),
        // offline(offlineConfig),
    ),
);

const createStore4Test = () =>
createStore(
    RootReducer,
    compose(
        applyMiddleware(LoggerMiddleware),
    ),
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
            // offline(offlineConfig),
        ),
    );
};

const store =
    DEV ? createStore4Dev() :
    TEST ? createStore4Test() :
    PROD ? createStore4Prod() :
        createStore4Prod();

export default store;

//  https://github.com/xgrommx/awesome-redux
//  redux-persist-store

// https://github.com/redux-offline/redux-offline
