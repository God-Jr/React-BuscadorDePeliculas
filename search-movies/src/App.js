import React, { Component } from "react";
import Details from "./pages/Details";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import { Switch, Route } from "react-router-dom";

import "./App.css";
import "bulma/css/bulma.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details/:movieId" component={Details} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
