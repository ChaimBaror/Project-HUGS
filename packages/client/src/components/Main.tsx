import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from './Container';
import BackArrow from "./BackArrow";
import HugsLogo from "./HugsLogo";
import Button from './Button';
import { Translation, useTranslation } from "react-i18next";
import Test from '../test/Test' 
// import Translation from "../languageSelect";
import Example1 from "./Example1";
import Example2 from "./Example2";
import GrandmotherCondition from "./UIGrangmaCalender/GrandmotherCondition";
import Screen from "../container/Screen";
import CircleOfFriends from "../container/CircleOfFriends";
import Login from "../container/Login";

export default function Main() {
  const { t } = useTranslation();

  return (
    <Router>
      <Switch>
        <Route path="/" exact><Login /></Route>
        <Route path="/Login"  component={Screen} />
        <Route path="/Member" component={CircleOfFriends} />
        <Route path="/condition" component={GrandmotherCondition} />


        <Route path="/Container">
          <Container
            headerHeight='15%'
            badyHeight='71%'
            BackArrow={<BackArrow />}
            HugsLogo={<HugsLogo width="60%" height="60%" />}
          >
            <Button
              text={t("next")}
              width="65%"
              height="6.3%"
              radius="10px"
              background="rgba(247, 105, 64, 1)"
              color="white"
              onClick={() => console.log("next")} />
          </Container>
        </Route>

      
        <Route path="/translation">
        {/* <Translation /> */}
        </Route>
        
        <Route path="/test">
          <Test />
        </Route>

        <Route path="/translation">
          {/* <Translation /> */}
        </Route>
        
        <Route path="/example1">
          <Example1 />
        </Route>

        <Route path="/example2">
          <Example2 />
        </Route> 

        <Route path="/">
          <Login />
        </Route>

      </Switch>
    </Router>
  );
}
