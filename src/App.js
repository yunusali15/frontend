import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Home from "./home/pages/Home";
import Finance from "./finance/pages/Finance";
import Vbs from "./vbs/pages/Vbs";
import Cca from "./cca/pages/Cca";
import Login from "./login/pages/Login";
import Signup from "./signup/pages/Signup";
import Navbar from "./shared/components/Navigation/NavBar";
import Services from "./services/pages/Services";
import Contacts from "./contacts/pages/Contacts";
import SpecificVenue from "./vbs/pages/SpecificVenue";
import BookingPage from "./vbs/pages/BookingPage";
import TestBookingPage from "./vbs/pages/TestBookingPage";
import ConfirmationPage from "./vbs/pages/ConfirmationPage";
import { LoginContext } from "./shared/context/LoginContext";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    //routes when logged in
    routes = (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/vbs" component={Vbs}/>
        <Route path="/vbs/confirmation" component={ConfirmationPage}/>
        <Route path="/vbs/:venueName" component={SpecificVenue}/>
        <Route path="/vbs/:venueName/BookingPage" component={BookingPage}/>
        <Route>
          <Route path="/TestBookingpage" component={TestBookingPage}/>
        </Route>
        <Route path="/finance" exact>
          <Finance />
        </Route>
        <Route path="/cca" exact>
          <Cca />
        </Route>
        <Route path = "/Services" exact>
          <Services />
        </Route>
        <Router path = "/Contacts" exact>
          <Contacts/>
        </Router>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    //routes when not logged in
    routes = (
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
        <Route exact path="/vbs">
          <Vbs />
        </Route>
        <Route exact path="/vbs/confirmation" component={ConfirmationPage}/>
        <Route exact path="/vbs/:venueName" component={SpecificVenue}/>
        <Route exact path="/vbs/:venueName/bookingpage" component={BookingPage}/>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Redirect to="/" /> 
      </Switch>
    );
  }

  return (
    <LoginContext.Provider
      value={{isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <Navbar/>
        <main>
          {routes}
        </main>
      </Router>
    </LoginContext.Provider>
  );
};

export default App;
