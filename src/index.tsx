import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from 'react-hot-loader'
import TestAll from "./TestAll";
import './styles.css';
import { PROD, TEST, DEV } from "./utils";
import App from "./app";

const rootDiv = document.getElementById("root");
const AppWithHot = hot(module)(
    PROD ? App :
    TEST ? TestAll :
    DEV ? TestAll :
    App
);
const DomRender = () => ReactDOM.render(<AppWithHot/>, rootDiv);

// fixme: during TESTing find a solution to remove this dilay 
setTimeout(DomRender, 0);

export default AppWithHot;
