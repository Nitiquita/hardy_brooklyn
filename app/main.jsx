"use strict";
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Switch,
  Route,
  HashRouter,
  Redirect
} from "react-router-dom";

import Home from "./components/Home";
import Admin from "./components/Admin";
import Recaptcha from "react-recaptcha";
import { isAuthenticated } from "./components/Nav";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated === true ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/admin" component={Admin} />
        <Recaptcha sitekey="6LffelcUAAAAAAZsezOIREOirUQMKa9mtk7lpELa" />
      </Switch>
    </HashRouter>,
    document.getElementById("app")
  );
});
