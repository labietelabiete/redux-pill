import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

import { HOME, DASHBOARD, LOGIN } from "./constants/routes";

import "./sass/main.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={LOGIN}>
            <Login />
          </Route>
          <Route path={DASHBOARD}>
            <Dashboard />
          </Route>
          <Route path={HOME}>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
