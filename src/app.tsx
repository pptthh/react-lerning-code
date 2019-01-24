import * as React from 'react';
import store from './scenes/Root/rootStore';
import RouterSwitch from './scenes/Root/rootView';
import BrowserRouter from './utils/browserRouter';

const App: React.SFC = () =>
<BrowserRouter>
    <RouterSwitch store={store}/>
</BrowserRouter>;

export default App;
