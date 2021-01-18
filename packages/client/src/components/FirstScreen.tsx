import React, { Component } from 'react';
import Button from "./Button";
import './Screens.css';
import { useTranslation } from 'react-i18next';
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';


export const FirstScreen =()  =>{

        const { t } = useTranslation();
        const options = [
            t("Grandpa"),
            t("grandmother"),
            t("else"),
         ];

        return (
            <div className='root'>
            

              
                    <div className='divText'>
                        {t("familyCircle")}
                    </div>

                    <div className="divRadioButton" >

                    <RadioGroup
                    name="role"
                    id="role"
                    // value={state.role}
                    // onChange={handleInputChange}
                >
                    {options.map((option) => (
                        <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
                    ))}
                </RadioGroup>
           
                    </div>

                    <div className="textImage">
                        <div className="divText">{t("UploadPhoto")}  </div><div className="center">
                            <button className="imagePicker">+</button>
                        </div>
                    </div>

                    <Button
                        text={t("next")}
                        width="65%"
                        height="6.3%"
                        radius="10px"
                        background="rgba(247, 105, 64, 1)"
                        color="white"
                        onClick={()=>console.log(t("next"))} />

               
            </div>

        )
    

}

export default FirstScreen;
