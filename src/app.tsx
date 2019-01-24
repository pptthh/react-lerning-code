import * as React from 'react';
import store from './scenes/Root/rootStore';
import Root from './scenes/Root/rootView';

const App = () => <Root store={store}/>;

export default App;
