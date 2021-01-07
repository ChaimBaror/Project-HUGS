import React, { useEffect, useState } from "react";
import { COLORS } from "./Colors.js";
import { makeStyles } from '@material-ui/core/styles';
import BackArrow from "./BackArrow";
import HugsLogo from './HugsLogo';
import RadioButton from './RadioButton';
import Button from './Button';

const useStyles = makeStyles({
  root: {
    background: COLORS.main_background,
    height: '100%',
    width: '100%',
    position: 'absolute'
  },
});

const Container = (props: any) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <div className='root'>
        <header className='screenTop logo'>

          <div className='screenTop logo'>
            <div className='backArrow'>
              {props.BackArrow}
            </div>
            {props.HugsLogo}
          </div>
        </header>


        <div className='screen'>
       
          {props.Button}
        </div>
      </div>
    </div>
  )
};

export default Container;
