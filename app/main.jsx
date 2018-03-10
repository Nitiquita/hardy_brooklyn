"use strict";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, HashRouter} from "react-router-dom";

import Home from "./components/Home";
import Admin from "./components/Admin";

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
