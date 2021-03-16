import React, { useEffect, useState } from "react";
import { COLORS } from "./Colors.js";
import { makeStyles } from '@material-ui/core/styles';


interface Props {
  userId: string;
}

const useStyles = makeStyles({
  root: {
    background: COLORS.main_background,
    height:'100%',
    width:'100%'
  },
});

const Introduction = (props:Props) => {
  const classes = useStyles();

  return(
    <div className={classes.root}></div>
  )
};

export default Introduction;
