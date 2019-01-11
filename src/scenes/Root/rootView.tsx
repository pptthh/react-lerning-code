import * as React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router, Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import DetailedView from '../DetaildView/dvConnect';
import DvUrlProps, { dvUrlPath } from '../DetaildView/dvUrlProps';
import SearchResults from '../SearchResults/srConnect';
import SrUrlProps, { srUrlPath } from '../SearchResults/srUrlProps';
import store from './rootStore';

const search = (props: SrUrlProps) => <Provider store={store}><SearchResults {...props}/></Provider>;
const film = (props: DvUrlProps) => <Provider store={store}><DetailedView  {...props}/></Provider>;
const links = () =>
<ul>
    <li><Link to='/'>home</Link></li>
    <li><Link to='/search'>search</Link></li>
    <li><Link to='/search/'>search/</Link></li>
    <li><Link to='/search/pulp'>search/pulp</Link></li>
    <li><Link to='/film'>film</Link></li>
    <li><Link to='/film/'>film/</Link></li>
    <li><Link to='/film/353081'>film/353081</Link></li>
    <li><Link to='/404'>404 not found</Link></li>
</ul>;
const Home = () => <div><h2>Home</h2>{links()}</div>;
const NotFound = () => <div><h2>The linked page was not found</h2>{links()}</div>;

const Root = () =>
<Router>
    <Switch>
        <Route path='/' component={Home}  exact={true}/>
        <Route path={srUrlPath} component={search} />
        <Route path={dvUrlPath} component={film} />
        <Route component={NotFound} />
    </Switch>
</Router>;

export default Root;
