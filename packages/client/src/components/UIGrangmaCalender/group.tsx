import React, { useEffect, useState } from 'react';
import { Chart } from "react-google-charts";
import { BackArrow } from '../BackArrow';
import grandma from "../../icons/image/grandma.svg";
import flowers from "../../icons/Phone.svg";
import HomeIcon from '@material-ui/icons/Home';
import { ChartWrapperOptions } from 'react-google-charts/dist/types';



const Group = () => {
    const [progress, setProgress] = useState(10);
    const po = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0xNC43Njk3IDYuMTA4NTdDMTQuNjQzOCA1Ljk4MjUxIDE0LjQ5NDIgNS44ODI1MSAxNC4zMjk2IDUuODE0MjhDMTQuMTY0OSA1Ljc0NjA2IDEzLjk4ODUgNS43MTA5NCAxMy44MTAzIDUuNzEwOTRDMTMuNjMyMSA1LjcxMDk0IDEzLjQ1NTYgNS43NDYwNiAxMy4yOTEgNS44MTQyOEMxMy4xMjY0IDUuODgyNTEgMTIuOTc2OCA1Ljk4MjUxIDEyLjg1MDggNi4xMDg1N0MxMi43MjQ5IDYuMjM0NjEgMTIuNTc1NCA2LjMzNDU5IDEyLjQxMDkgNi40MDI4MUMxMi4yNDYzIDYuNDcxMDMgMTIuMDY5OSA2LjUwNjE0IDExLjg5MTggNi41MDYxNEMxMS43MTM2IDYuNTA2MTQgMTEuNTM3MiA2LjQ3MTAzIDExLjM3MjcgNi40MDI4MUMxMS4yMDgxIDYuMzM0NTkgMTEuMDU4NiA2LjIzNDYxIDEwLjkzMjcgNi4xMDg1N0MxMC44MDY4IDUuOTgyNTQgMTAuNjU3MyA1Ljg4MjU1IDEwLjQ5MjggNS44MTQzNEMxMC4zMjgyIDUuNzQ2MTIgMTAuMTUxOCA1LjcxMTAxIDkuOTczNjggNS43MTEwMUM5Ljc5NTU0IDUuNzExMDEgOS42MTkxNCA1Ljc0NjEyIDkuNDU0NTggNS44MTQzNEM5LjI5MDAyIDUuODgyNTUgOS4xNDA1MiA1Ljk4MjU0IDkuMDE0NjMgNi4xMDg1N0M4Ljg4ODczIDYuMjM0NjEgOC43MzkyMyA2LjMzNDU5IDguNTc0NjcgNi40MDI4MUM4LjQxMDExIDYuNDcxMDMgOC4yMzM3MiA2LjUwNjE0IDguMDU1NTggNi41MDYxNEM3Ljg3NzQ0IDYuNTA2MTQgNy43MDEwNCA2LjQ3MTAzIDcuNTM2NDggNi40MDI4MUM3LjM3MTkyIDYuMzM0NTkgNy4yMjI0MiA2LjIzNDYxIDcuMDk2NTMgNi4xMDg1N0M2Ljk3MDYzIDUuOTgyNTQgNi44MjExMyA1Ljg4MjU1IDYuNjU2NTcgNS44MTQzNEM2LjQ5MjAxIDUuNzQ2MTIgNi4zMTU2MiA1LjcxMTAxIDYuMTM3NDggNS43MTEwMUM1Ljk1OTM0IDUuNzExMDEgNS43ODI5NCA1Ljc0NjEyIDUuNjE4MzggNS44MTQzNEM1LjQ1MzgyIDUuODgyNTUgNS4zMDQzMiA1Ljk4MjU0IDUuMTc4NDMgNi4xMDg1N0M1LjA1MjUzIDYuMjM0NjEgNC45MDMwMyA2LjMzNDU5IDQuNzM4NDcgNi40MDI4MUM0LjU3MzkxIDYuNDcxMDMgNC4zOTc1MiA2LjUwNjE0IDQuMjE5MzggNi41MDYxNEM0LjA0MTI0IDYuNTA2MTQgMy44NjQ4NCA2LjQ3MTAzIDMuNzAwMjggNi40MDI4MUMzLjUzNTcyIDYuMzM0NTkgMy4zODYyMiA2LjIzNDYxIDMuMjYwMzMgNi4xMDg1N0MzLjEzNDM2IDUuOTgyNTEgMi45ODQ4IDUuODgyNTEgMi44MjAxNyA1LjgxNDI4QzIuNjU1NTQgNS43NDYwNiAyLjQ3OTA4IDUuNzEwOTQgMi4zMDA4OCA1LjcxMDk0QzIuMTIyNjcgNS43MTA5NCAxLjk0NjIxIDUuNzQ2MDYgMS43ODE1OSA1LjgxNDI4QzEuNjE2OTYgNS44ODI1MSAxLjQ2NzM5IDUuOTgyNTEgMS4zNDE0MyA2LjEwODU3TDYuNDY2NDMgMTIuMDY3OUg5LjY0NDcyTDE0Ljc2OTcgNi4xMDg1N1oiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPg0KPHBhdGggZD0iTTYuNDY2NDUgMTIuMDY3OUw1LjY3MTg4IDE1LjI0NjJIMTAuNDM5M0w5LjY0NDc0IDEyLjA2NzkiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPg0KPHBhdGggZD0iTTcuNTYxNTEgMi4wMzgwNUM4LjU0NDg5IDEuMDgxODIgOS44NjIzOSAwLjU0Njc4MiAxMS4yMzQgMC41NDY2MzFWMi45MzAzNUMxMS4yMzQgMy43NzMyOSAxMC44OTkyIDQuNTgxNyAxMC4zMDMxIDUuMTc3NzRDOS43MDcwOCA1Ljc3Mzc5IDguODk4NjcgNi4xMDg2NCA4LjA1NTc0IDYuMTA4NjRDNy4yMTI4IDYuMTA4NjQgNi40MDQzOSA1Ljc3Mzc5IDUuODA4MzQgNS4xNzc3NEM1LjIxMjMgNC41ODE3IDQuODc3NDQgMy43NzMyOSA0Ljg3NzQ0IDIuOTMwMzVWMC41NDY2MzFDNS43MjAzOCAwLjU0NjYzMSA2LjUyODc5IDAuODgxNDg2IDcuMTI0ODMgMS40Nzc1M0M3LjcyMDg4IDIuMDczNTggOC4wNTU3NCAyLjg4MTk5IDguMDU1NzQgMy43MjQ5MiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+DQo8cGF0aCBkPSJNMy4yODgwNSA2LjEwODczQzIuODA0NzIgNi4wMDU0MyAyLjM3NjQ1IDUuNzI3NTUgMi4wODUxNiA1LjMyODI3QzEuNzkzODcgNC45Mjg5OSAxLjY2MDAxIDQuNDM2MzQgMS43MDkxOSAzLjk0NDU1QzEuNzU4MzcgMy40NTI3NiAxLjk4NzEzIDIuOTk2MzYgMi4zNTE3MiAyLjY2MjY3QzIuNzE2MzEgMi4zMjg5OCAzLjE5MTEzIDIuMTQxNDIgMy42ODUzNCAyLjEzNTg2SDQuODc3MiIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIi8+DQo8cGF0aCBkPSJNMTIuODIzMyA2LjEwODczQzEzLjMwNjYgNi4wMDU0MyAxMy43MzQ5IDUuNzI3NTUgMTQuMDI2MiA1LjMyODI3QzE0LjMxNzUgNC45Mjg5OSAxNC40NTEzIDQuNDM2MzQgMTQuNDAyMSAzLjk0NDU1QzE0LjM1MyAzLjQ1Mjc2IDE0LjEyNDIgMi45OTYzNiAxMy43NTk2IDIuNjYyNjdDMTMuMzk1IDIuMzI4OTggMTIuOTIwMiAyLjE0MTQyIDEyLjQyNiAyLjEzNTg2SDExLjIzNDEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPg0KPC9zdmc+DQo="
    useEffect(() => {
        const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 1000 ? 0 : prevProgress + 10));
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
        tooltip: {
            textStyle: {
                color: "red",
                fontSize: 16,
                bold: true,
            },
            ignoreBounds: true
        },

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
                        backgroundImage: `url(${grandma})`,
                        backgroundPosition: '50.3% 50%',
                        backgroundRepeat: 'no-repeat',
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
