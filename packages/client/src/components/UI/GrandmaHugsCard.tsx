import React, { useEffect } from 'react'
import CalendarStrip from 'react-native-calendar-strip';
import nephew from "../../icons/image/nephew.svg";
import daughter from "../../icons/image/granddaughter.svg";
import grandchild from "../../icons/image/grandchild.svg";
import grandson from "../../icons/image/grandson.svg";
import { makeStyles, Avatar } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';



const GrandmaHugsCard = () => {
  const useStyles = makeStyles({
    crod: { background: '#EDF0F7', borderRadius: '15px', width: "200px", padding: '0px 5px',margin: '0px 10px' },
    crodTitel:{ height: "5px", direction: 'rtl' },
    pHr:{ borderBottom: '0.1px solid #C4C4C4' },
    cradflex:{display: 'flex', justifyContent: 'space-between', direction: 'rtl'},
    ul: { margin: '0',padding: '0',direction: 'rtl'},
    li: { display: "block", margin: '5px', fontStyle: 'normal', fontWeight: 'normal', fontSize: '10px', lineHeight: '12px',color: '#2A2042'},
    avatar: {  height: "20%", width: '5%', direction: 'ltr', paddingTop: '25px' }
  });
  const classes = useStyles();

  const avatar = () => {
    <div>

    </div>
  }

  return (
    <div className={classes.crod} >
      <h5 className={classes.crodTitel}>10.13.2020</h5>
      <p className={classes.pHr}></p>
      <div className={classes.cradflex}>
        <div >
          <div className={classes.ul} >
            <div className={classes.li} style={{ borderRight: '4px solid #F76940' }}>&nbsp; טלפון</div>
            <div className={classes.li} style={{ borderRight: '4px solid #1FD0DE' }}>&nbsp;יציאה לגינה</div>
            <div className={classes.li} style={{ borderRight: '4px solid #8462AA' }}>&nbsp;משלוח פרחים</div>
            <div className={classes.li} style={{ borderRight: '4px solid #5D5AA6' }}>&nbsp;משלוח</div>
          </div>
        </div>
        <div className={classes.avatar}>
          <AvatarGroup spacing="small" max={4}>
            <Avatar variant="circle" alt="Cindy Baker" src={daughter} />
            <Avatar alt="Agnes Walker" src={grandchild} />
            <Avatar alt="Trevor Henderson" src={grandson} />
            <Avatar alt="Cindy Baker" src={daughter} />
            <Avatar alt="Agnes Walker" src={grandchild} />
          </AvatarGroup>
        </div>

      </div>
    </div>

  )
}

export default GrandmaHugsCard;
