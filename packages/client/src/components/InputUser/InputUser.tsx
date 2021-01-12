import React, { useState } from 'react';
import {  Dialog, DialogTitle, DialogContentText, DialogContent, TextField, DialogActions, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Form from './Form';
import Button from '../Button';

interface Props {  
  setAddUser:any
  }

const UserInput = (props: Props) => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const useStyles = makeStyles({
    button: {
      position: "absolute",
      "font-size": "100%",
      "left": "0%",
      "right": "0%",
      "margin": "auto",
      "bottom": "2.96%",
      "border": "1px solid bule",

    },
  });
  const classes = useStyles();



  return (
    <div>
     

        <Button
       text=" הוסף בן משפחה +"
       width="60%"
       height="5%"
       radius= "10px"
       background = "White"
       color ="primary"
       onClick={handleClickOpen}
       />
      <Dialog open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">

        <Form
          onClose={handleClose}
          setAddUser={props.setAddUser}
        />
      
      </Dialog>
    </div>
  )
}

export default UserInput;