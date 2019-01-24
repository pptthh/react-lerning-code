import * as React from 'react';
import { renderToString } from 'react-dom/server';
import store from '../scenes/Root/rootStore';
import Root from '../scenes/Root/rootView';

const ssrApp: string = renderToString(
    <Root
        store={store}
    />,
);

export default ssrApp;
