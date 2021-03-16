import React, { useState } from 'react';

const MyGrandmaHugs = () => {
    const [myHugs, setMyHugs] = useState();

    const hugs = (hugs: String) => {
        let color = '#F76940'
        let title = " ביקור עם ילדים "
        if (hugs == "A") {
            color = '#8462AA'
            title = "משלוח פרחים"
        }
        return <div>
            <div style={{ color: color, borderRight: "3px solid", direction: 'rtl', padding: "0px 15px" }}>
                <sup style={{ fontFamily: 'RAG-Sans 1.0', fontSize: '15px', lineHeight: '15px', fontWeight: 500 }}>
                    {title}
                </sup>
                <div style={{ color: "#B2BAC9" }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="#B2BAC9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 4.19995V8.99995L12.2 10.6" stroke="#B2BAC9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg> 

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
