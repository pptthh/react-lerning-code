import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import store from '../scenes/Root/rootStore';
import Root from '../scenes/Root/rootView';

const renderFullPage = (html: undefined, preloadedState: unknown) => {
    /* ... */
};

const ssrApp: string = renderToString(
    <Root
        store={store}
        Router={undefined}
    />,
);

export default ssrApp;
