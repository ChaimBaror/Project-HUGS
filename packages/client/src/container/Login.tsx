import React, { useEffect, useState } from "react";
import { COLORS } from "../components/Colors.js";
import { makeStyles } from "@material-ui/core/styles";
import HugsLogo from "../components/HugsLogo";
import Button from "../components/Button";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  root: {
    background: COLORS.main_background,
    height: "100%",
    width: "100%",
    position: "absolute",
  },
});


const Login = () => {
  const history = useHistory();

  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <div style={{margin:"70px auto",textAlign:"center"}}>
      <HugsLogo width="100px" height="100px" />
      </div>
      <Button
       text={t("login")}
       width="88%"
       height="10%"
       radius= "10px"
       background = "White"
       color ="rgba(11, 32, 76, 1)"
       onClick={() => history.push("/condition", { from: "Login" })}
       />

    </div>
  );
};

export default Login;
