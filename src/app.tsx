import * as React from 'react';
import { Provider } from 'react-redux';
import store from './services/rootStore';
import SearchResults from './scenes/SearchResults/srConnect';
import DetailedView from './scenes/DetaildView/dvConnect';
import TestElement from './TestElement';
import RootActions from './services/rootActions';
import TestData from './services/rest/testData';

store.subscribe(console.log);
store.dispatch({type: RootActions.INIT, payload: TestData});
const App = () =>
<>
<TestElement name='Search Results'>
    <Provider store={store}>
        <SearchResults/>
    </Provider>
</TestElement>

<TestElement name='DetailedView'>
    <Provider store={store}>
        <DetailedView/>
    </Provider>
</TestElement>
<TestElement name=''><></></TestElement>
</>;

export default App;
