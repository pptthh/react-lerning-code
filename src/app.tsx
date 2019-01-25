import * as React from 'react';
import store from './scenes/Root/rootStore';
import RouterSwitch from './scenes/Root/rootView';
import { BrowserRouter as Router } from './utils/browserRouter';

const App: React.SFC = () =>
<Router>
    <RouterSwitch store={store}/>
</Router>;

export default App;
