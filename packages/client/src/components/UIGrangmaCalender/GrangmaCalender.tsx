import React, { Component, useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import DeyComponent from './DeyComponent';
import GrandmaHugsCard from './GrandmaHugsCard';

const GrangmaCalender = () => {
    const[grangmaCalendar, setGrangmaCalendar] = useState([{fullDate: 0}])
    const[numWeeks, setNumWeeks] = useState(0)
    const now = new Date();

    useEffect(() => {
    let newweekly=[]
        let now = new Date();
        now.setDate(now.getDate() + numWeeks * 7);  
        for (let i = 0 ; i < 7 ; i++){
                now.setDate( now.getDate() - now.getDay()+ i)
            newweekly.push(
                    {
                     fullDate: now.valueOf(),
                    })
        }
        setGrangmaCalendar(newweekly)        
    }, [numWeeks])
  
  
 
    return (
        <div >
            <div style={{height:'35px'}}>
        <div style={{ 
        position:"absolute",
        display: "flex",
        justifyContent: 'space-between',
        background:"#FFFFFF",
        margin: '0px',
        padding: '0px',
        width: '100%',
        left: '0px',
        top: '33%',
        borderRadius: '20px'
        }}>
            <Button style={{minWidth:'0px'}} onClick={() => setNumWeeks(numWeeks - 1)}> <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 1L1 8.04797L8.5 15.0959" stroke="#2E2E30" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </Button>
            {grangmaCalendar.map(day => (
                <DeyComponent fullDate={day.fullDate}/>
            ))}
            <Button style={{minWidth:'0px'}} onClick={() => setNumWeeks(numWeeks + 1)}><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0.578125L8.5 7.6261L1 14.6741" stroke="#2E2E30" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </Button>
        </div>
        </div>
        <br/>
        <div>
                <div style={{  position: 'absolute', display:"flex", overflowY: 'auto',left: '0px',width: '100%'}}>
                {grangmaCalendar.map(day => (
                <GrandmaHugsCard fullDate={day.fullDate}/>
            ))}
            </div>
            </div>
               </div>
    )

}

export default GrangmaCalender;
