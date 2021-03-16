import React, { useEffect } from 'react'
import nephew from "../../icons/image/nephew.svg";
import daughter from "../../icons/image/granddaughter.svg";
import grandchild from "../../icons/image/grandchild.svg";
import grandson from "../../icons/image/grandson.svg";
import { makeStyles, Avatar } from '@material-ui/core';
import AvatarGroup from "@material-ui/lab/AvatarGroup";

const useStyles = makeStyles({
  crod: {
    background: '#EDF0F7',
    borderRadius: '15px',
    padding: '0px 5px',
    margin: '0px 10px'
  },
  crodTitel: {
    height: "5px",
    direction: 'rtl'
  },
  hr: {
    color: '##0B204C',
    opacity: '0.1',
    height: '1px'
  },
  cradflex: {
    width: '200px'
  },
  ul: {
    margin: '0',
    padding: '0',
    direction: 'rtl',
    height: "80px",
    overflow: 'auto'
  },
  li: {
    display: "block",
    margin: '5px',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '10px', lineHeight: '12px',
    color: '#2A2042'
  },
  avatarDiv: {
    height: "",
    width: '',
    direction: 'ltr',
    position: 'absolute',
    bottom: "2px"
  },
  avatarSize: {
    height: "30px",
    width: '30px',
    border: "none"
  }
});

const GrandmaHugsCard = (props: any) => {

  const classes = useStyles();
 
  const d = new Date(props.fullDate);

  const checkIf = (some: number) => {
    if (some == 1) return <div className={classes.li} style={{ borderRight: '4px solid #F76940' }}>&nbsp; טלפון</div>
    if (some == 2) return <div className={classes.li} style={{ borderRight: '4px solid #1FD0DE' }}>&nbsp;יציאה לגינה</div>
    if (some == 3) return <div className={classes.li} style={{ borderRight: '4px solid #8462AA' }}>&nbsp;משלוח פרחים</div>
    if (some == 4) return <div className={classes.li} style={{ borderRight: '4px solid #5D5AA6' }}>&nbsp;משלוח</div>
    else return <div className={classes.li} style={{ borderRight: '4px solid red' }}>&nbsp;</div>
  }

  return (
    <div className={classes.crod}>
      <h5 className={classes.crodTitel}>{d.toLocaleDateString("he-UE")}</h5>
      <hr className={classes.hr} />
      <div className={classes.cradflex}>
        <div>
          <div className={classes.ul}  >
            {checkIf(1)}
            {checkIf(0)}
            {checkIf(2)}
            {checkIf(4)}
            {checkIf(2)}
            {checkIf(4)}
          </div>
        </div>
        <div className={classes.avatarDiv}>
          <AvatarGroup
            // classes={{ avatar: classes.avatarSize }} 
            spacing="small" max={4}>
            <Avatar variant="circular" alt="Cindy Baker" src={daughter} />
            <Avatar alt="Agnes Walker" src={grandchild} />
            <Avatar alt="Trevor Henderson" src={grandson} />
            <Avatar alt="Cindy Baker" src={nephew} />
            <Avatar alt="Agnes Walker" src={grandchild} />
          </AvatarGroup>
        </div>
      </div>
    </div>

  )
}

export default GrandmaHugsCard;
