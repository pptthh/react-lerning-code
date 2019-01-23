import { NextFunction, Request, Response } from 'express';
import { LOG } from '../utils';

// tslint:disable-next-line
const Express = require('express');

const port = process.env.port || Number('8888');

// We are going to fill these out in the sections to follow
const handleRender = (req: Request, res: Response, next: NextFunction): NextFunction => {
    LOG('handleRender', 'req', 'res');
    res.send('Hello World!');
    return next;
};

const renderFullPage = (html: undefined, preloadedState: unknown) => {
    /* ... */
};

const app = Express();
// Serve static files
app.use('/public', Express.static('public'));
app.use(handleRender);
app.listen(
    port,
    () => LOG(`Start listening on port: ${port}!`),
);
LOG('SSR started');
