import { NextFunction, Response } from 'express';
import { renderToString } from 'react-dom/server';
import store from '../scenes/Root/rootStore';
import { LOG } from '../utils';
import ssrApp from './ssrApp';
import htmlWrapper from './ssrHtml';

// tslint:disable-next-line
const Express = require('express');

const port = process.env.port || Number('8888');

// We are going to fill these out in the sections to follow
const handleRender = (req: Request, res: Response, next: NextFunction): NextFunction => {
    const html: string = renderToString(ssrApp(req)) || '<h1>500 Big Error happened</h1>';
    LOG(html);
    res.send(
        htmlWrapper(
            html,
            store.getState(),
        ),
    );
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
