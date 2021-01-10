import React, { Component } from 'react'
import UserInput from './InputUser'
import girl from "../../icons/image/girl.svg";
import nephew from "../../icons/image/nephew.svg";
import granddaughter from "../../icons/image/granddaughter.svg";
import { Avatar, Card, createStyles, makeStyles, Theme, useTheme } from '@material-ui/core';


export const FamilyMember = () => {
    const useStyles = makeStyles(() =>
        createStyles({
            root: {
                display: 'flex',
                'border-bottom': '0.1px solid #919BB3',
                padding:'5px',
            },
            details: {
                display: 'flex',
                padding:'5px',
                flexDirection: 'column',   
            },
            sub:{
                color:'#C4C4C4'
            },
            button:{
            position: "absolute",
            "font-size": "150%",
            "box-shadow": "2px 2px 8px #888888",  
            "left": "0%",
            "right": "0%",
            "margin": "auto",
            "bottom": "2.96%",
            "border": "none",
            }
        }),
    );


    const classes = useStyles();
  
    const state = {
        famliy: [
            { firstName: "Rachel", lastName: "Berkowitz", Image: girl, role: "girl" },
            { firstName: "Amos", lastName: "Cohen", Image: nephew, role: "nephew" },
            { firstName: "Anat", lastName: "Levy", Image: granddaughter, role: "granddaughter" }

        ]
    }




    return (
        <div>
            <div className='divText'>
                הוסיפו בני משפחה למעגל החיבוקים של סבתא
                </div>

            {state.famliy.map((Member) => (

                <div className={classes.root}>
                    <Avatar className={classes.details} aria-label="recipe" src={Member.Image} />
                  <div className={classes.details}>
                   {Member.firstName} {Member.lastName}
                    <sub className={classes.sub}>{Member.role}</sub>
                    </div>
                </div>

            ))}

        
            < UserInput />
          
        </div>
    )

}

export default FamilyMember;
