import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../style.module.css";
import { Button } from "@material-ui/core";

interface Props {
  //  props here
}

// react hooks
const Example1 = (props: Props) => {

    
  // like state in component
  const [background, setBackground] = useState("blue");

  const onClick = () => {
    if (background == "blue") setBackground("pink");
    else setBackground("blue");
  };

  return (
    <div className={styles.container} style={{ background: background }}>
      <Button
        style={{ background: "white", top: "30px", width: "100%" }}
        onClick={onClick}
      >
        click me to change background
      </Button>
    </div>
  );
};

export default Example1;
