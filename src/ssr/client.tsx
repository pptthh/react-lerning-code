import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import App from '../app';
import { DEV } from '../utils';

const AppWithHot = hot(module)(App);

ReactDOM.hydrate(
    DEV ? <AppWithHot /> :
        <App/>,
    document.getElementById('root'),
);
