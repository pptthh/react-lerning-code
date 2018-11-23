import React from "react";
import ReactDOM from "react-dom";
import Hello from "./components/Hello.jsx";
import CreateElement from "./components/CreateElement.js";
import ComponentExample from "./components/ComponentExample.jsx";
import PureComponentExample from "./components/PureComponentExample.jsx";

import "./styles.css";

let time = 0;

const App = () => (
  <div className="App">
    <Hello title="React Learning" time={time} />
    <hr />
    <CreateElement />
    <hr />
    <ComponentExample />
    <hr />
    <PureComponentExample />
  </div>
);

const rootElement = document.getElementById("root");

setInterval(() => {
  time = new Date().getTime();
  ReactDOM.render(<App />, rootElement);
}, 25);
