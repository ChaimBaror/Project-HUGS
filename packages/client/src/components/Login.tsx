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


const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HugsLogo width="100px" height="100px" />
      <Button
       text="Login"
       width="366px"
       height="70px"
       radius= "10px"
       background = "White"
       />

    </div>
  );
};

export default Login;
