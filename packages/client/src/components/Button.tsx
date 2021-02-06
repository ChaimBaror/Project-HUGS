import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  text: string;
  width:string;
  height:string;
  background : string;
  radius:string;
  color:string;
  onClick:any
}

const Button = (props: Props) => {

  const useStyles = makeStyles({
  root: {
    position: "absolute",
    "border-radius": props.radius,
    "background": props.background,
    "height": props.height,
    "width": props.width,
    "color": props.color,
    "font-size": "150%",
    "box-shadow": "2px 2px 8px #888888",  
    "left": "0%",
    "right": "0%",
    "margin": "auto",
    "bottom": "2.96%",
    "border": "none",
  },
});
  const classes = useStyles();
   
  return (
    <button className={classes.root} onClick={props.onClick}>
      {props.text}
      </button>
  );
};

export default Button;
