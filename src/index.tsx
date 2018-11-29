import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from 'react-hot-loader'

class App extends React.Component {
  render() {
    return <div>Hello Word! Juhuuu!</div>;
    // return <div>Hello {this.props.name}</div>;
  }
}

const AppWithHot = hot(module)(App);

ReactDOM.render(<AppWithHot/>, document.getElementById("app"));