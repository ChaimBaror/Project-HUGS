import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirstScreen from "./FirstScreen";
import Login from "./Login";



export default function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          <Login />
        </Route>
        <Route path="/first">
          <FirstScreen />
        </Route>
      </Switch>
    </Router>
  );
}
