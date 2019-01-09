import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from 'react-hot-loader'
import TestAll from "./TestAll";
import './styles.css';
import { PROD, TEST, DEV } from "./utils";
import App from "./app";

const rootDiv = document.getElementById("root");
const AppWithHot = hot(module)(
    App
);
const DomRender = () => ReactDOM.render(<AppWithHot/>, rootDiv);

// fixme: during TESTing find a solution to remove this delay 
setTimeout(DomRender, 0);

export default AppWithHot;
