import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from 'react-hot-loader'
import TestAll from "./TestAll";

const AppWithHot = hot(module)(TestAll);

ReactDOM.render(<AppWithHot/>, document.getElementById("root"));

export default AppWithHot;