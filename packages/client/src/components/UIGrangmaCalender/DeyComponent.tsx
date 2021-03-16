import React from 'react';

interface props {
    fullDate:number
}
const DeyComponent = (props: props) => {
    const d =new Date(props.fullDate);
    
    
    const dayOfWeeks = ['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT'];

    const checkIf = (day: any) => {
        if (day == 0) return <hr style={{ borderBottom: '4px solid #F76940' }} />
        if (day == 3) return <hr style={{ borderBottom: '4px solid #8462AA' }} />
        if (day == 5) return <hr style={{ borderBottom: '4px solid #1FD0DE' }} />
        if (day == 2) return <hr style={{ borderBottom: '4px solid #F76940' }} />
        if (day == 1) return <hr style={{ borderBottom: '4px solid #8462AA' }} />
        else return <hr style={{ borderBottom: '4px solid #EDF0F7' }} />
    }
    const checkActe = (day: any) => {
        if (day.getDate() == new Date().getDate() && day.getMonth() == new Date().getMonth() ) return "#EDF0F7"
        else return ""
    }

    return (
        <div style={{
            background: checkActe(d),
            width:'10%',
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
            <hr style={{ borderBottom: '4px solid #EDF0F7' }} />
            <hr style={{ borderBottom: '4px solid #EDF0F7' }} />
            </div>
        </div>

    )

}

export default DeyComponent;
