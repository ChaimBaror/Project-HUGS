import React, { useState } from 'react';

const MyGrandmaHugs = () => {
    const [myHugs, setMyHugs] = useState();

    const hugs = (hugs: String) => {
        let color = '#F76940'
        let title=" ביקור עם ילדים "
        if(hugs=="A"){
            color = '#8462AA'
            title= "משלוח פרחים"
        }
        return<div>
        <div style={{ color: color , borderRight: "3px solid", direction: 'rtl', padding: "0px 15px" }}>
            <sup style={{ fontFamily: 'RAG-Sans 1.0', fontSize: '15px', lineHeight: '15px', fontWeight: 500 }}>
            {title}
                </sup>
            <div style={{ color: "#B2BAC9" }}>
                ⏱
                <span> יום א </span>
                <span> 15/8 </span>
                <span> 17:00-18:30 </span>
            </div>
        </div>
        <hr />
        </div>
    }
    return (
        <div>
            <h3 style={{ textAlign: "center", padding: "5px 0px", color: "#0B204C" }}>:החיבוקים שלי </h3>
            {hugs("#F76940")}
            {hugs("A")}
            {hugs("B")}
        </div>
    )

}
export default MyGrandmaHugs;
