import React, { useEffect, useState } from "react";
import { COLORS } from "./Colors.js";
import { makeStyles } from '@material-ui/core/styles';


interface Props {
  headerHeight: string;
  badyHeight: string;
  BackArrow: any;
  HugsLogo: any;
  children: any;
}
const Container = (props: Props) => {
const useStyles = makeStyles({
  root: {
    background: "rgba(40, 36, 92, 1)",
    height: '100%',
    width: '100%',
    position: 'absolute'
  },
  header: {
    height: props.headerHeight,
    width: '100%',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
  },
  bady: {
    height: props.badyHeight,
    background: 'white',
    padding: '13%',
    top: '128px',
    'border-radius': '40px 40px 0px 0px',
  },
  backArrow: {
    position: 'absolute',
    left: '90%',
    top: '4%',
  }
});


  const classes = useStyles();

  return(
    <div className={classes.root}>
      <header className={classes.header}>
        <div className={classes.backArrow}>
          {props.BackArrow}
        </div>
        <div>
          {props.HugsLogo}
        </div>
      </header>

      <div className={classes.bady}>
        {props.children}
      </div>
    </div>
  )
};

export default Container;
