import { createStore } from 'redux';
import RootReducer from './rootReducer';

// tslint:disable-next-line
const win = window as any;
const store = createStore(
    RootReducer,
    win.__REDUX_DEVTOOLS_EXTENSION__ &&
    win.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
