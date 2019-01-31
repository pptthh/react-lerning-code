import * as React from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, RouterProps, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { AnyAction, Store } from 'redux';
import DetailedView from '../DetaildView/dvConnect';
import DvUrlProps, { dvUrlPath } from '../DetaildView/dvUrlProps';
import SearchResults from '../SearchResults/srConnect';
import SrUrlProps, { srUrlPath } from '../SearchResults/srUrlProps';
import RootState from './rootState';

const search =
    (store: Store<RootState, AnyAction>) =>
        (props: SrUrlProps) => (
            <Provider store={store}>
                <SearchResults {...props}/>
            </Provider>);

const film =
    (store: Store<RootState, AnyAction>) =>
        (props: DvUrlProps) => (
            <Provider store={store}>
                <DetailedView {...props}/>
            </Provider>);

const links = () => (
<ul>
    <li><Link to='/'>home</Link></li>
    <li><Link to='/search'>search</Link></li>
    <li><Link to='/search/'>search/</Link></li>
    <li><Link to='/search/pulp'>search/pulp</Link></li>
    <li><Link to='/search/the'>search/the</Link></li>
    <li><Link to='/search/5'>search/5</Link></li>
    <li><Link to='/film'>film</Link></li>
    <li><Link to='/film/'>film/</Link></li>
    <li><Link to='/film/19'>film/19</Link></li>
    <li><Link to='/film/680'>film/680</Link></li>
    <li><Link to='/film/185'>film/185</Link></li>
    <li><Link to='/film/353081'>film/353081</Link></li>
    <li><Link to='/404'>404 not found</Link></li>
</ul>);

const Home = () => <Redirect to='/search'/>;
export const pageNotFound = () => <div><h2>The linked page was not found</h2>{links()}</div>;

const RouterSwitch = ({store}: {store: Store<RootState, AnyAction>}) => (
<Switch>
    <Route path='/' component={Home}  exact={true}/>
    <Route path={srUrlPath} component={search(store)} />
    <Route path={dvUrlPath} component={film(store)} />
    <Route component={pageNotFound} />
</Switch>);

export default RouterSwitch;
