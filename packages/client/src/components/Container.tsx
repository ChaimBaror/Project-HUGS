import React, { useEffect, useState } from "react";
import { COLORS } from "./Colors.js";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: COLORS.main_background,
    height:'100%',
    width:'100%',
    position:'absolute'
  },
});

const Container = () => {
  const classes = useStyles();

  return(
    <div className={classes.root}>
        <></>
    </div>
  )
};

export default Container;
