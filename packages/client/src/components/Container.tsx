import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router";


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
      top: '3%',
    },
    center:{
      "text-align": 'center',
    }
  });
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <div>
        <div className={classes.backArrow} 
        onClick={() => { history.goBack();}}
>
          {props.BackArrow} 
        </div>
        <div className={classes.center}>
          {props.HugsLogo}
        </div>
        </div>
      </header>

      <div className={classes.bady}>
        {props.children}
      
      </div>
    </div>
  )
};

export default Container;
