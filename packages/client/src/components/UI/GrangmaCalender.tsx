import { Pagination } from '@material-ui/lab';
import React, { Component, useEffect, useState } from 'react';
import { Button } from '@material-ui/core';

const GrangmaCalender = () => {
    const[grangmaCalendar, setGrangmaCalendar] = useState([{dey:'',date:0}])
    const[numWeeks, setNumWeeks] = useState(0)
    const now = new Date();
    const dayOfWeeks = ['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT'];

    useEffect(() => {
    let newweekly=[]
        let now = new Date();
        now.setDate(now.getDate() + numWeeks * 7);
        for (let i = 0 ; i < 7 ; i++){
            // dayOfWeeks.map((day , i)=>{
            // console.log(dayOfWeeks[i], now.getDate() - now.getDay()+ i)   
            newweekly.push(
                    {dey : dayOfWeeks[i] ,
                     date : now.getDate() - now.getDay() + i })
        }
        setGrangmaCalendar(newweekly)
    }, [numWeeks])
  
  
    const checkIf = (day: any) => {
        if (day == 'MON') return <p style={{borderBottom: '4px solid #F76940' }} />
        if (day == 'WED') return <p style={{borderBottom: '4px solid #8462AA' }} />
        if (day == 'SUN') return <p style={{borderBottom: '4px solid #1FD0DE' }} />
    }
    const checkActe = (day: any) => {
        if (day == dayOfWeeks[now.getDay()]) return "#EDF0F7"
        else return ""
    }

    return (
        <div style={{ display: "flex", justifyContent: 'space-between',height:'70px' }}>
            <Button onClick={() => setNumWeeks(numWeeks - 1)}> <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.5 1L1 8.04797L8.5 15.0959" stroke="#2E2E30" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </Button>
            {grangmaCalendar.map(day => (
                <div style={{ background: checkActe(day.dey), width: '10%', borderRadius: '15px', textAlign: "center" }}>
                    <div>{day.dey}</div>
                    <div>{day.date}</div>

                    {checkIf(day.dey)}
                    <p style={{ borderBottom: '4px solid #F76940' }} />
                    <p style={{ borderBottom: '4px solid #8462AA' }} />

                </div>
            ))}
            <Button onClick={() => setNumWeeks(numWeeks + 1)}><svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0.578125L8.5 7.6261L1 14.6741" stroke="#2E2E30" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            </Button>

        </div>
    )

}

export default GrangmaCalender;
