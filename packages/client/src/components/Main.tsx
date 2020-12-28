import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Button from "./Button";


export default function Main() {
  return (
    <Router>

      <Switch>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
