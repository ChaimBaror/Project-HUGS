import React from 'react';

interface props {
    fullDate:number
}
const DeyComponent = (props: props) => {
    const d =new Date(props.fullDate);
    
    
    const dayOfWeeks = ['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT'];

    const checkIf = (day: any) => {
        if (day == 'MON') return <hr style={{ borderBottom: '4px solid #F76940' }} />
        if (day == 'WED') return <hr style={{ borderBottom: '4px solid #8462AA' }} />
        if (day == 'SUN') return <hr style={{ borderBottom: '4px solid #1FD0DE' }} />
    }
    const checkActe = (day: any) => {
        if (day.getDate() == new Date().getDate() && day.getMonth() == new Date().getMonth() ) return "#EDF0F7"
        else return ""
    }

    return (
        <div style={{
            background: checkActe(d),
            borderRadius: '15px',
            padding: '1% 3%',
            textAlign: "center"
        }}>
            <div style={{
               fontSize: '9px',
               opacity: '0.3',
            }}>{dayOfWeeks[d.getDay()]}</div>
            <div style={{color: '#0B204C',fontWeight: 600,}}>{d.getDate()}</div>
           
           <div >
            {checkIf(d.getDay())}
            <hr style={{ borderBottom: '4px solid #F76940' }} />
            <hr style={{ borderBottom: '4px solid #8462AA' }} />
            </div>
        </div>

    )

}

export default DeyComponent;
