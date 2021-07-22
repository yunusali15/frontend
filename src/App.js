import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Home from "./home/pages/Home";
import Finance from "./finance/pages/Finance";
// import Vbs from "./vbs/pages/Vbs";
import VenueSelection from "./vbs/pages/VenueSelection";
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
        <Route exact path="/vbs" component={VenueSelection} />
        <Route exact path="/vbs/confirmation" component={ConfirmationPage}/>
        <Route exact path="/vbs/:venueName" component={SpecificVenue}/>
        <Route exact path="/vbs/:venueName/bookingpage" component={TestBookingPage}/>

        <Route path="/finance" exact>
          <Finance />
        </Route>
        <Route path="/cca" exact>
          <Cca />
        </Route>
        <Route path="/Services" exact>
          <Services />
        </Route>
        <Router path="/Contacts" exact>
          <Contacts />
        </Router>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    //routes when not logged in
    routes = (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/vbs" component={VenueSelection}></Route>
        <Route exact path="/vbs/confirmation" component={ConfirmationPage} />
        <Route exact path="/vbs/:venueName" component={SpecificVenue} />
        <Route
          exact
          path="/vbs/:venueName/bookingpage"
          component={TestBookingPage}
        />
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
    <div>
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap');
        </style>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap');
        </style>
      </head>
      <LoginContext.Provider value={{ isLoggedIn, login, logout }}>
        <Router>
          <Navbar />
          <main>{routes}</main>
        </Router>
      </LoginContext.Provider>
    </div>
  );
};

export default App;
