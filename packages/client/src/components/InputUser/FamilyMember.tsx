import React, { useEffect, useState } from 'react'
import UserInput from './InputUser'
import girl from "../../icons/image/girl.svg";
import nephew from "../../icons/image/nephew.svg";
import daughter from "../../icons/image/granddaughter.svg";
import grandchild from "../../icons/image/grandchild.svg";
import grandson from "../../icons/image/grandson.svg";
import { Avatar, createStyles, makeStyles, } from '@material-ui/core';
import BaseHttpService from '../../api';
import { useTranslation } from 'react-i18next';



export const FamilyMember = () => {
    const { t } = useTranslation();

    const http = new BaseHttpService()
    const useStyles = makeStyles(() =>
        createStyles({
            root: {
                height: '48vh',
                overflow: 'auto',
            },
            rowCred:{
                display: 'flex',
                'border-bottom': '0.1px solid #C4C4C4',
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
    const [user, setUser] = useState();
    const [member, setMember] = useState([{ id: 1, firstName: "", lastName: "", Image: "", role: "" }]);

    useEffect(() => {
        setMember([
        { id: 1, firstName: "Rachel", lastName: "Berkowitz", Image: girl, role: "girl" },
        { id: 2, firstName: "Amos", lastName: "Cohen", Image: nephew, role: "nephew" },
        { id: 3, firstName: "Anat", lastName: "Levy", Image: daughter, role: "daughter" },
    ])
        // const setUser = JSON.parse(atob(localStorage.getItem('accessToken').split('.')[1]))
        const allMember = http.get(`/allMember/${user}`)
            .then(res => {
                console.log("res", res.data);
                // setMember(res.data);
            })
    },[]);

    const addNewMamber = (event: any) => {

        console.log('addNewMamber', event);
        let image

        switch (event.role) {
            case t("girl"):
                image = girl;
                break;
            case  t("daughter"):
                image = daughter;
                break;
            case t("grandchild"):
                image = grandchild;
                break;
            case t("nephew"):
                image = nephew;
                break;
            case t("grandson"):
                image = grandson;
                break;
            default:
                image = nephew;
                break;
        }
        const newMember = {
            id: Math.random() * 10000,
            firstName: event.firstName,
            lastName: event.lastName,
            Image: image,
            role: event.role
        }

        setMember(
            [...member, newMember])
        console.log(http.post('/post', newMember))
        console.log("member", member);

    }

    const deletePersonHandler = (personIndex: any) => {
        const mewmember = [...member]
        const deleteuser = mewmember.splice(personIndex, 1);
        setMember(mewmember);

        http.delete(`/member/${user}`, deleteuser)
    }


    return (
        <div>
            <div className='divText'>
            {t("AddMemberTitle")} 
            </div>
            <div className={classes.root}>
            {member.map((Member, index) => (
            <div className={classes.rowCred} onClick={() =>
                window.confirm(`Are you sure you wish to delete this ${Member.firstName}?`) && deletePersonHandler(index)}>
                <Avatar className={classes.details} aria-label="recipe" src={Member.Image} />
                <div className={classes.details} >
                    {Member.firstName} {Member.lastName}
                    <sub className={classes.sub}>{Member.role}</sub>
                </div>
            </div>
            ))}
              </div>
            <div>
            <UserInput setAddUser={addNewMamber} />
            </div>
        </div>
    )

}

export default FamilyMember;
