import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
import { BackArrow } from './../BackArrow';
import grandma from "../../icons/image/grandma.svg";


const Group = () => {
    const [progress, setProgress] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);
    const data = [
        ['Task', 'Hours per Day'],
        ['Work', 1],
        ['Eat', 5],
        ['Commute', 1],
        ['Sleep', 0],
    ]

    const options = {

        legend: { position: "none" },
        // width: 400, height: 220,
        // titlePosition: 'center',
        slantedTextAngle: 0,
        title: `כמה Hugs שלחתם לסבתא?` ,
        titleTextStyle:{
            color: 'FFFFFF',
            fontName: 'Arial',
            fontSize: 20,
            bold:false,
        },
   
        pieSliceText: 'label',
        backgroundColor: 'none',
        pieHole: 0.6,
        is3D: false,
        pieSliceTextStyle: { color: 'FFFFFF' },
        // pieStartAngle: 10,
        slices: [
            {
                color: "#F76940"
            },
            {
                color: "1FD0DE"
            },
            {
                color: "8462AA"
            },
            {
                color: "5D5AA6"
            }
        ],

    };


    return (
 
   <div style ={{textAlign:"center"}}>
        <Chart
            style={{ 
            backgroundImage: `url(${grandma})`,
            backgroundPosition:'50.55% 50%',
            backgroundRepeat: 'no-repeat',
            }}
            chartType="PieChart"
            width="100%"
            height='60%'
            loader={<div >Loading Chart</div>}
            data={data}
            options={options}
            legend_toggle
            // rootProps={{ 'data-testid': '4' }}


        />

      </div>
       
    )

}

export default Group;
