import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
import { BackArrow } from '../BackArrow';
import grandma from "../../icons/image/grandma.svg";
import flowers from "../../icons/Phone.svg";
import HomeIcon from '@material-ui/icons/Home';
import { ChartWrapperOptions } from 'react-google-charts/dist/types';



const Group = () => {
    const [progress, setProgress] = useState(10);
    const imageGrandmaUrl="https://png.pngtree.com/png-clipart/20190629/original/pngtree-hand-drawn-grandma-decorative-elements-png-image_4068774.jpg";
    const imageAvatarGrandma=imageGrandmaUrl||grandma;
    useEffect(() => {
        const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 3000);
        return () => {
            clearInterval(timer);
        };
    }, []);
    const data = [
        ['Task', 'Hours per Day'],
        ["🏠", progress],
        ['🌞', progress * 2],
        ['🌼', 100],
        ['📞', 2 + progress],
    ]

    const options = {
        chartArea: {
            width: '50%',
            height: '50%',
        },
        bar: { groupWidth: '95%' },
        pieSliceBorderColor: "#28245C",
        pieResidueSliceColor: 'red',
        legend: { position: "labeled" },
        width: 500, height: 220,
        // titlePosition: 'center',
        // slantedTextAngle: 0,
        title: `Some Hugs you sent to Grandma ?`,
        titleTextStyle: {
            color: 'FFFFFF',
            fontName: 'fruitfont',
            fontSize: 16,
            optAlignment: "c",
            bold: false,
        },

        pieSliceText: 'label',
        backgroundColor: 'none',
        pieHole: 0.6,
        is3D: false,
        // pieSliceTextStyle: { color: 'FFFFFF' },
        // pieStartAngle: 1,
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
        <div style={{ textAlign: "center" }}>   
            <div style={{ position: 'absolute' }}>  
                <Chart  
                    chartType="PieChart"
                    width="100%"
                    height='50%'
                    loader={<div>Loading Chart</div>}
                    data={[['Pac Man', 'Percentage'], ['', 3], ['', 1]]}
                    options={{  
                        backgroundColor: 'none',
                        pieSliceBorderColor: 'none',
                        pieHole: 0.9,
                        width: 500, height: 220,
                        pieStartAngle: 1,
                        legend: 'none',
                        pieSliceText: 'none',
                        tooltip: { trigger: 'none' },
                        slices: {
                            0: { color: 'FFFFFF' },
                            1: { color: 'transparent' },
                        },
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>
          
            <div style={{ position: 'relative' }}>

                <Chart
                    style={{
                        backgroundImage: `url(${imageAvatarGrandma})`,
                        backgroundPosition: '50.3% 50%',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '70px 70px',
                    }}

                    chartType="PieChart"
                    width="100%"
                    height='50%'
                    loader={<div >Loading Chart</div>}
                    data={data}
                    options={options}
                legend_toggle
                rootProps={{ 'data-testid': '2' }}
                />
            </div>
            
        </div>
    )}

export default Group;
