import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./HomePage";
import GroupPage from "./3";
import ResourcePage from "./Resource"
import Jamus from "./Jamus1";
import Jensen from "./Jensen1";
import May from "./May1";
import Journaling from "./Journaling";

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/3" component={GroupPage} />
      <Route exact path="/4" component={ResourcePage} />
      <Route exact path="/G1" component={Jamus} />
      <Route exact path="/G2" component={Jensen} />
      <Route exact path="/G3" component={May} />
      <Route exact path="/Journal" component={Journaling} />
    </Switch>
    </Router>
  );
}

export default App;
