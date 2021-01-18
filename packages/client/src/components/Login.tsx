import React, { useEffect, useState } from "react";
import { COLORS } from "./Colors.js";
import { makeStyles } from "@material-ui/core/styles";
import HugsLogo from "./HugsLogo";
import Button from "./Button";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  root: {
    background: COLORS.main_background,
    height: "100%",
    width: "100%",
    position: "absolute",
  },
});


// });


const Login = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.root}>
      <HugsLogo width="100px" height="100px" />
      <Button
       text={t("next")}
       width="88%"
       height="10%"
       radius= "10px"
       background = "White"
       color ="rgba(11, 32, 76, 1)"
       onClick={()=>console.log("Login")}
       />

    </div>
  );
};

export default Login;
