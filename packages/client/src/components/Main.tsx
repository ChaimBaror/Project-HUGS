import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirstScreen from "./FirstScreen";



export default function Main() {
  return (
    <Router>

      <Switch>
        <Route path="/">
          <FirstScreen />
        </Route>
      </Switch>
    </Router>
  );
}
