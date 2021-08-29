import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Home from "./home/pages/Home";

//Venue Booking System
import VenueSelection from "./vbs/pages/VenueSelection/VenueSelection";
import SpecificVenue from "./vbs/pages/SpecificVenue/SpecificVenue";
import BookingPage from "./vbs/pages/BookingPage/BookingPage";
import ConfirmationPage from "./vbs/pages/ConfirmationPage/ConfirmationPage";
import Login from "./login/pages/Login";

//VBS Admin
import AdminMain from "./admin/pages/AdminMain";
import AdminView from "./admin/pages/AdminView";

import Navbar from "./shared/components/Navigation/NavBar";
import Contacts from "./contacts/pages/Contacts";
import { LoginContext } from "./shared/context/LoginContext";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let routes;

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  if (isLoggedIn) {
    //routes when logged in
    routes = (
      <Switch>
        <Route path="/admin" exact>
          <AdminMain />
        </Route>
        <Route path="/adminview" exact>
          <AdminView />
        </Route>
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
          component={BookingPage}
        />
        <Router path="/Contacts" exact>
          <Contacts />
        </Router>
        <Route path="/admin" exact>
          <Login />
        </Route>
        {/* <Route path="/signup" exact>
          <Signup />
        </Route> */}
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <>
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
    </>
  );
};

export default App;
