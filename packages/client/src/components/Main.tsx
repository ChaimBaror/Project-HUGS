import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Test from '../test/Test' 
import Translation from "../languageSelect";
import Example1 from "./Example1";

export default function Main() {
  return (
    <Router>
      <Switch>
       

        <Route path="/test">
        <Test />
        </Route>

        <Route path="/translation">
        <Translation />
        </Route>
        
        <Route path="/example1">
        <Example1 />
        </Route>
         <Route path="/">
        <Login />
        </Route>

      

        
      </Switch>
    </Router>
  );
}
