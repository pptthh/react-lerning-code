process.env.NODE_SERVER = 'true';

import { NextFunction, Request, Response } from 'express';
import DetailedViewActions from '../scenes/DetaildView/dvActions';
import { dispatchAction, IActions, RootActions } from '../scenes/Root/rootActions';
import RootState from '../scenes/Root/rootState';
import store from '../scenes/Root/rootStore';
import SearchResultActions from '../scenes/SearchResults/srActions';
import { LOG } from '../utils';
import Express from '../utils/express';
import ServerState from './serverState';
import SSRapp from './ssrApp';
import htmlWrapper from './ssrHtml';

const port = process.env.port || Number('8888');
const exportState = (): RootState => {
    const state = store.getState();
    delete state.ssr;
    return state;
};
export const asyncHadler = <T>(
    res: Response,
    html: string,
    next: T,
    ) => (
        LOG('\t\tasyncHadler'),
        res.send(
            htmlWrapper(
                html,
                exportState(),
            ),
        ),
        dispatchAction(DetailedViewActions.RESET),
        next
);

// We are going to fill these out in the sections to follow
const handleRender = (req: Request, res: Response, next: NextFunction): NextFunction => {
    LOG('\n\tstart serving for\t\t', req.url);
    store.dispatch({
        type: SearchResultActions.INIT_SERVER,
        payload: {
            isServer: true,
            props: {req, res},
            callBack: (htmlText: string) => asyncHadler(res, htmlText, undefined),
        },
    } as IActions<ServerState>);

    const html = SSRapp(req);

    LOG('\thandleRender', !html ? 'start asyncHadler' : `return ${html.length} characters`);
    return !html ? next :
        asyncHadler(res, html, next);
};

const app = Express();
// Serve static files
app.use('/public', Express.static('public'));
app.get('/', (req: Request, res: Response, next: NextFunction) => res.redirect('/search'));
app.get('/test', (req: Request, res: Response, next: NextFunction) => res.send('Testing ...'));
app.use(handleRender);
app.listen(
    port,
    () => LOG(`SSR started listening on port: ${port}`),
);
LOG('SSR starting ...');
