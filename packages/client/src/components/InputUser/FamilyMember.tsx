import React, { Component, useEffect, useState } from 'react'
import UserInput from './InputUser'
import girl from "../../icons/image/girl.svg";
import nephew from "../../icons/image/nephew.svg";
import granddaughter from "../../icons/image/granddaughter.svg";
import { Avatar, createStyles, makeStyles, } from '@material-ui/core';
import BaseHttpService from '../../api';



export const FamilyMember = () => {
    const http = new BaseHttpService()
    const useStyles = makeStyles(() =>
        createStyles({
            root: {
                display: 'flex',
                'border-bottom': '0.1px solid #919BB3',
                padding: '5px',
            },
            details: {
                display: 'flex',
                padding: '5px',
                flexDirection: 'column',
            },
            sub: {
                color: '#C4C4C4'
            },
        }),
    );
    const classes = useStyles();

    const [member, setMember] = useState({
        famliy: [
            { id: 1, firstName: "Rachel", lastName: "Berkowitz", Image: girl, role: "girl" },
            { id: 2, firstName: "Amos", lastName: "Cohen", Image: nephew, role: "nephew" },
            { id: 3, firstName: "Anat", lastName: "Levy", Image: granddaughter, role: "granddaughter" },
            { id: 4, firstName: "david", lastName: "Cohen", Image: nephew, role: "nephew" },
        ]
    });
    const [user, setUser] = useState(null);

    useEffect(() => {
        const result = http.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                console.log("res", res.data);
                // setMember(res.data);
            })
    });

    const addNewMamber = (event: any) => {
        console.log('event');

    }


    return (
        <div>
            <div className='divText'>
                הוסיפו בני משפחה למעגל החיבוקים של סבתא
                </div>

            {member.famliy.map((Member) => (

                <div className={classes.root} onClick={() => console.log('key =', Member.id)}>
                    <Avatar className={classes.details} aria-label="recipe" src={Member.Image} />
                    <div className={classes.details} >
                        {Member.firstName} {Member.lastName}
                        <sub className={classes.sub}>{Member.role}</sub>
                    </div>
                </div>
            ))}
            <UserInput onClick={()=> addNewMamber} />
        </div>
    )

}

export default FamilyMember;
