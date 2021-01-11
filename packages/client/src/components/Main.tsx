import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Login";
import Container from './Container';
import BackArrow from "./BackArrow";
import HugsLogo from "./HugsLogo";
import Button from './Button';
import FamilyMember  from './InputUser/FamilyMember';



export default function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact > <Login /></Route>
      
     
        <Route path="/Container"> <Container
         headerHeight='15%'
         badyHeight='71%'
         BackArrow={<BackArrow />}
         HugsLogo ={ <HugsLogo width="60%" height="60%" />}
        >
          chaim baror
          <Button
          text="הבא"
          width="65%"
          height="6.3%"
          radius="10px"
          background="rgba(247, 105, 64, 1)"
          color="white"
          onClick={()=>console.log("chaim baror")} />

          </Container> </Route>

         
          
        <Route path="/Member"> 
        <Container
         headerHeight='15%'
         badyHeight='71%'
         BackArrow={<BackArrow />}
         HugsLogo ={ <HugsLogo width="60%" height="60%" />}>
           
          <FamilyMember />
          </Container> 
          </Route>
       
      </Switch>
    </Router>
  );
}
