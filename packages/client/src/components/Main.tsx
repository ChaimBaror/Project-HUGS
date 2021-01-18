import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from './Container';
import BackArrow from "./BackArrow";
import HugsLogo from "./HugsLogo";
import Button from './Button';
import FamilyMember from "./InputUser/FamilyMember";
import Login from "./Login";
import { Translation, useTranslation } from "react-i18next";
import FirstScreen from "./FirstScreen";

export default function Main() {
  const { t } = useTranslation();

  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          <Login />
        </Route>
        <Route path="/First"  >
          <Container
            headerHeight='15%'
            badyHeight='71%'
            BackArrow={<BackArrow />}
            HugsLogo={<HugsLogo width="60%" height="60%" />}
          >
          <FirstScreen />
          </Container>
        </Route>

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

        <Route path="/Member">
          <Container
            headerHeight='15%'
            badyHeight='71%'
            BackArrow={<BackArrow />}
            HugsLogo={<HugsLogo width="60%" height="60%" />}>

            <FamilyMember />
          </Container>
        </Route>

        <Route path="/translation">
        {/* <Translation /> */}
        </Route>

      </Switch>
    </Router>
  );
}
