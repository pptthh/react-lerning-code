import * as React from 'react';
import store from './scenes/Root/rootStore';
import Root from './scenes/Root/rootView';

store.subscribe(console.log);
const App = () => <Root/>;

export default App;
