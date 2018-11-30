import * as React from "react";
import * as ReactDOM from "react-dom";
import { hot } from 'react-hot-loader'

class App extends React.Component {
  render() {
    return <div>Hello Word! Juhuuu!</div>;
  }
}

const AppWithHot = hot(module)(App);

// fixme: find a proper soluton for testing the App whithout this setTimeout
setTimeout(() => 
  ReactDOM.render(<AppWithHot/>, document.getElementById("app")),
  0
);

export default App;