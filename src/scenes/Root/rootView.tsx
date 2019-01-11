import * as React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Link, Route, RouteComponentProps, Switch } from 'react-router-dom';
import DetailedView from '../DetaildView/dvConnect';
import DvUrlProps, { dvUrlPath } from '../DetaildView/dvUrlProps';
import SearchResults from '../SearchResults/srConnect';
import SrUrlProps, { srUrlPath } from '../SearchResults/srUrlProps';
import store from './rootStore';

const search = (props: SrUrlProps) => <Provider store={store}><SearchResults {...props}/></Provider>;
const film = (props: DvUrlProps) => <Provider store={store}><DetailedView  {...props}/></Provider>;

const Home = () => <div><h2>Home</h2></div>;
const NotFound = () => <div><h2>page not found</h2></div>;

const Root = () =>
<Router>
<>
    <ul>
        <li><Link to='/'>home</Link></li>
        <li><Link to='/search'>search</Link></li>
        <li><Link to='/search/'>search/</Link></li>
        <li><Link to='/search/pulp'>search/pulp</Link></li>
        <li><Link to='/film'>film</Link></li>
        <li><Link to='/film/'>film/</Link></li>
        <li><Link to='/film/353081'>film/353081</Link></li>
        <li><Link to='/404'>404 not found</Link></li>
    </ul>
    <hr/>
    <Switch>
        <Route path='/' component={Home}  exact={true}/>
        <Route path={srUrlPath} component={search} />
        <Route path={dvUrlPath} component={film} />
        <Route component={NotFound} />
    </Switch>
</>
</Router>;

export default Root;

// const About = () => <div><h2>About</h2></div>;

// const Topics = ({ match }: any) =>

// <div>
// <h2>Topics</h2>
// <ul>
//     <li>
//     <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//     </li>
//     <li>
//     <Link to={`${match.url}/components`}>Components</Link>
//     </li>
//     <li>
//     <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//     </li>
// </ul>

// <Route path={`${match.path}/:topicId`} component={Topic} />
// <Route exact={true} path={match.path} render={() => <h3>Please select a topic.</h3>}
// />
// </div>;

// const Topic = ({ match }: any) => <div><h3>{match.params.topicId}</h3></div>;
