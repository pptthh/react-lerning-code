import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import { AnyAction, applyMiddleware, compose, createStore, Store } from 'redux';
import LoggerMiddleware from '../../services/middleware/loggerMiddleware';
import { DEV, PROD, TEST } from '../../utils';
import RootReducer from './rootReducer';
import RootState from './rootState';

// tslint:disable-next-line:no-any
const win: any = (() =>
    global ? global :
    window ? window :
    {}
)();

const preloadedState = win.__PRELOADED_STATE__;
if (preloadedState) {
    delete win.__PRELOADED_STATE__;
}

const createStore4Prod = () =>
createStore(
    RootReducer,
    preloadedState,
    compose(
        applyMiddleware(),
        // offline(offlineConfig),
    ),
);

const createStore4Test = () =>
createStore(
    RootReducer,
    preloadedState,
    compose(
        applyMiddleware(LoggerMiddleware),
    ),
);

const createStore4Dev = () => {
    const composeEnhancers =
        typeof win === 'object' &&
        win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            }) : compose;

    return createStore(
        RootReducer,
        preloadedState,
        composeEnhancers(
            applyMiddleware(LoggerMiddleware),
            // offline(offlineConfig),
        ),
    );
};

const store: Store<RootState, AnyAction> =
    DEV ? createStore4Dev() :
    TEST ? createStore4Test() :
    PROD ? createStore4Prod() :
        createStore4Prod();

export default store;

//  https://github.com/xgrommx/awesome-redux
//  redux-persist-store

// https://github.com/redux-offline/redux-offline
