import React, { Component } from 'react';
import HugsLogo from "./HugsLogo";
import Text from "./Text";
import RadioButton from "./RadioButton";
// import ImagePicker from "./ImagePicker";
import Button from "./Button";
import BackArrow from './BackArrow';
import './Screens.css';


export class FirstScreen extends Component {
    render() {

        return (
            <div className='root'>
                <div className='screenTop'>
                    <HugsLogo width="15%" height="auth" />
                    <div className='backArrow'>
                        <BackArrow />
                    </div>
                </div>


                <div className='screen'>
                    <div className='divText'>
                        <Text />עבור מי נפתח את מעגל המשפחה?
                </div>

                    <div className="divRadioButton">
                        <RadioButton />
                    </div>

                    <div className="textImage">
                        <div className="divText"> העלו תמונה</div><div className="center">
                            <button className="imagePicker">+</button>
                            {/* <ImagePicker /> */}
                        </div>
                    </div>
                    <Button
                        text="הבא"
                        width="65%"
                        height="6.3%"
                        radius="10px"
                        background="rgba(247, 105, 64, 1)"
                        color="white" />
                </div>
            </div>
        )
    }

}

export default FirstScreen
