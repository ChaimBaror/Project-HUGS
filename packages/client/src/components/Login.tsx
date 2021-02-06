import React, { useEffect, useState } from "react";
import { COLORS } from "./Colors.js";
import { makeStyles } from "@material-ui/core/styles";
import HugsLogo from "./HugsLogo";
import Button from "./Button";

const useStyles = makeStyles({
  root: {
    background: COLORS.main_background,
    height: "100%",
    width: "100%",
    position: "absolute",
  },
});


// this test click login console.log()
const LoginClick = () => {
  console.log('Click Login');
}

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HugsLogo width="100px" height="100px" />
      <Button
       text=""
       width="88%"
       height="10%"
       radius= "10px"
       background = "White"
       color ="rgba(11, 32, 76, 1)"
       onClick={LoginClick}
       />
    </div>
  );
};

export default Login;
