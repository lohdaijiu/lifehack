import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./Home";
import GroupPage from "./3";
import ResourcePage from "./Resource"

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/3" component={GroupPage} />
      <Route exact path="/4" component={ResourcePage} />
    </Switch>
    </Router>
  );
}

export default App;
