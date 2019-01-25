import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import App from './app';
import './style.scss';

const rootDiv = document.getElementById('root');
const AppWithHot = hot(module)(
    App,
);
const DomRender = () => ReactDOM.render(<AppWithHot/>, rootDiv);

// fixme: during TESTing find a solution to remove this delay
setTimeout(DomRender, 0);

export default AppWithHot;
