"use strict";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Admin from "./components/Admin";
import About from "./components/About";

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/admin' component={Admin}/>
      </Switch>
    </BrowserRouter>,
    document.getElementById("app")
  );
});
