import React, { useEffect, useState } from "react";
import { COLORS } from "./Colors.js";
import { makeStyles } from "@material-ui/core/styles";
import HugsLogo from "./HugsLogo";

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
    </div>
  );
};

export default Login;
