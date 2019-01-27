import { NextFunction, Request, Response } from 'express';
import { renderToString } from 'react-dom/server';
import RootActions, { IActions } from '../scenes/Root/rootActions';
import store from '../scenes/Root/rootStore';
import { LOG } from '../utils';
import ServerState from './serverState';
import ssrApp from './ssrApp';
import htmlWrapper from './ssrHtml';

// tslint:disable-next-line
const Express = require('express');
const port = process.env.port || Number('8888');
process.env.NODE_SIDE = 'server';

const asyncHadler = (
    next: NextFunction,
    res: Response,
    html: string,
) => (
    res.send(
        htmlWrapper(
            html,
            store.getState(),
        ),
    ),
    next
);

// We are going to fill these out in the sections to follow
const handleRender = (req: Request, res: Response, next: NextFunction): NextFunction => {
    const html: string = renderToString(ssrApp(req));
    LOG('\t\t===============================');
    LOG(typeof html);
    LOG(html);
    LOG('\t\t===============================');

    if (html) {
        return asyncHadler(next, res, html);
    }

    store.dispatch({
        type: RootActions.INIT_SERVER,
        payload: {req, res, next},
    } as IActions<ServerState>);

    return next;
};

const app = Express();
// Serve static files
app.use('/public', Express.static('public'));
app.get('/test', (req: Request, res: Response, next: NextFunction) => res.send('Testing'));
app.use(handleRender);
app.listen(
    port,
    () => LOG(`SSR started listening on port: ${port}`),
);
LOG('SSR starting ...');
