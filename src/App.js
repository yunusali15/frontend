import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Home from "./home/pages/Home";
import Finance from "./finance/pages/Finance";
import Vbs from "./vbs/pages/Vbs";
import Cca from "./cca/pages/Cca";
import Login from "./login/pages/Login";
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
        <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/finance" exact>
            <Finance />
          </Route>
          <Route path="/vbs" exact>
            <Vbs />
          </Route>
          <Route path="/cca" exact>
            <Cca />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
