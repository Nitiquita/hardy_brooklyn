"use strict";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";

import Home from "./components/Home";
import Events from "./components/Events"
import Admin from "./components/Admin";
import About from "./components/About";

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <HashRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/admin' component={Admin}/>
      </Switch>
    </HashRouter>,
    document.getElementById("app")
  );
});
