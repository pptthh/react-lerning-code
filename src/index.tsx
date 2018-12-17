import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from 'react-hot-loader'
import TestAll from "./TestAll";
import './styles.css';

setTimeout(() => { // fixme: during TESTing find a solution to remove this dilay 
    const AppWithHot = hot(module)(TestAll);
    ReactDOM.render(<AppWithHot/>, document.getElementById("root"));
}, 0);

export default TestAll;