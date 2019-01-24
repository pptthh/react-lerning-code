import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { Router, StaticRouter } from 'react-router-dom';
import store from '../scenes/Root/rootStore';
import Root from '../scenes/Root/rootView';

const renderFullPage = (html: undefined, preloadedState: unknown) => {
    /* ... */
};

const router: any = StaticRouter;

const ssrApp: string = renderToString(
    <Root
        store={store}
        Router={router}
    />,
);

export default ssrApp;
