import * as React from 'react';
import { Provider } from 'react-redux';
import store from './rootStore';
import SearchResults from '../SearchResults/srConnect';
import DetailedView from '../DetaildView/dvConnect';

const Root = () =>
<>
    <Provider store={store}>
        <SearchResults/>
    </Provider>
    <Provider store={store}>
        <DetailedView/>
    </Provider>
</>;

export default Root;
