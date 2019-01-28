import { NextFunction, Request, Response } from 'express';
import RootActions, { IActions } from '../scenes/Root/rootActions';
import store from '../scenes/Root/rootStore';
import { LOG } from '../utils';
import ServerState from './serverState';
import SSRapp from './ssrApp';
import htmlWrapper from './ssrHtml';

process.env.NODE_SERVER = 'true';

// tslint:disable-next-line
const Express = require('express');
const port = process.env.port || Number('8888');

export const asyncHadler = (
    next: NextFunction,
    res: Response,
    html: string,
) => (
    LOG('\t\tasyncHadler'),
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
    store.dispatch({
        type: RootActions.INIT_SERVER,
        payload: {req, res},
    } as IActions<ServerState>);

    const html = SSRapp(req);

    return typeof html !== 'string' || !html ? next :
        asyncHadler(next, res, html);
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
