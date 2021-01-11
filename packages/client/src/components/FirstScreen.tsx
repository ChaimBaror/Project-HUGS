import React, { Component } from 'react';
import HugsLogo from "./HugsLogo";
import Text from "./Text";
import RadioButton from "./RadioButton";
// import ImagePicker from "./ImagePicker";
import Button from "./Button";
import BackArrow from './BackArrow';
import './Screens.css';


export class FirstScreen extends Component {
    onChangeValue(event: any) {
        console.log(event.target.value);
    }

    render() {

        return (
            <div className='root'>
                <div className='screenTop logo'>
                    <div className='backArrow'>
                        <BackArrow />
                    </div>
                    <HugsLogo width="60%" height="60%" />
                </div>


                <div className='screen'>
                    <div className='divText'>
                        <Text />עבור מי נפתח את מעגל המשפחה?
                    </div>

                    <div className="divRadioButton" onChange={this.onChangeValue}>
                        <br />
                        סבא
                         <input type="radio" value="grandfather" name="gender" />
                        <br />
                        <br />
                         סבתא
                         <input type="radio" value="grandmother" name="gender" />
                        <br />
                        <br />
                         אחר
                         <input type="radio" value="Other" name="gender" />
                        <br />

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
                        color="white"
                        onClick={()=>console.log("הבא")} />

                </div>
            </div>

        )
    }

}

export default FirstScreen
