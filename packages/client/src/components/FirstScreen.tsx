import React, { Component } from 'react';
import { COLORS } from "./Colors.js";
import { makeStyles } from "@material-ui/core/styles";
import HugsLogo from "./HugsLogo";
import Text from "./Text";
import RadioButton from "./RadioButton";
// import ImagePicker from "./ImagePicker";
import Button from "./Button";

const useStyles = makeStyles({
    root: {
        background: COLORS.main_background,
        height: "100%",
        width: "100%",
        position: "absolute",
    },
    screenTop: {
        top:"36.22px",
        left:"176.01px"
    },
    screen: {
        background: COLORS.white,
        height: "768px",
        width: "414px",
        top : "128px",
        "border-radius": "40px 40px 0px 0px",
    },

});


const FirstScreen = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.screenTop}>
              <HugsLogo width="55.05px" height="53.95px" />
              {/* <BackArrow  /> */}
            </div>
            <div  className={classes.screen}>
                <Text />
                <RadioButton />
                {/* <ImagePicker /> */}
                <Button
                    text="הבא"
                    width="266px"
                    height="46px"
                    radius="10px"
                    background="rgba(247, 105, 64, 1)"
                />
            </div>
        </div>
    )

}

export default FirstScreen
