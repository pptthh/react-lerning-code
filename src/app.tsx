import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import store from './scenes/Root/rootStore';
import Root from './scenes/Root/rootView';

const App = () => <Root
    store={store}
    Router={undefined}
    />;

export default App;
