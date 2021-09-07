import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

import { HOME, DASHBOARD } from "./constants/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
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
