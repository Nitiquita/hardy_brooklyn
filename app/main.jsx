"use strict";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";
import {connect, Provider} from 'react-redux'

// import store from './store'

import Home from "./components/Home";
import Events from "./components/Events"
import Admin from "./components/Admin";
import About from "./components/About";

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(
    // <Provider store={store}>
    <HashRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/admin' component={Admin}/>
      </Switch>
    </HashRouter>
    // </Provider>
    ,
    document.getElementById("app")
  );
});
