import { Request } from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import store from '../scenes/Root/rootStore';
import RouterSwitch from '../scenes/Root/rootView';

const SSRapp = (req: Request) =>
renderToString(
<StaticRouter location={req.url} context={{}}>
    <RouterSwitch store={store}/>
</StaticRouter>);

export default SSRapp;
