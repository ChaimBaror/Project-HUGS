import React, { useEffect, useState } from "react";
import { COLORS } from "./Colors.js";
import { makeStyles } from "@material-ui/core/styles";
import HugsIcon from "../icons/HugsIcon.svg";
import { ReactSVG } from "react-svg";

interface Props {
  width: string;
  height:string
}

const HugsLogo = (props:Props) => {
  const useStyles = makeStyles({
    logo: {
        width: props.width,
        height: props.height,    
    },
  });
  
  const classes = useStyles();
  return (
    <ReactSVG
      beforeInjection={(svg) => {
        svg.setAttribute('style', `width: ${props.width}`)
        svg.setAttribute('style', `height: ${props.height}`)
        svg.classList.add(classes.logo)
    }}
      src={HugsIcon}
    />
  );
};

export default HugsLogo;
