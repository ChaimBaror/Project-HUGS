import React, { useState } from 'react';
import {Button as But, Dialog,DialogTitle ,DialogContentText ,DialogContent,TextField ,DialogActions ,RadioGroup,FormControlLabel,Radio} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../Button';

interface Props {

  onClick:any
  
}


const UserInput = (props: Props) => {

    // Declare a new state variable, which we'll call "count"
    const  [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const handleEvent = (e:any) => {
        console.log(e.target);
        
      };

    const options = [
        'אחר',
        'אח',
        'אחות',
        'נכד',
      ];

    return (
        <div>
        <Button 
         color="primary" 
         onClick={handleClickOpen}
         text="הוסף בן משפחה +"
         width="55%"
         height="6%"
         radius="10px"
         background="white"
       />
      
        <Dialog open={open} 
        onClose={handleClose}
        onSubmit={() => props.onClick}
         aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">  הוסף בן משפחה </DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="שם משתמש"
              type="text"
              onChange={handleEvent}
              fullWidth
            />

            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="אימייל"
              type="email"
              onChange={handleEvent}
              fullWidth
            />
              <TextField
              autoFocus
              margin="dense"
              id="Phone"
              label="מספר טלפון"
              type="numaer"
              fullWidth
              onChange={handleEvent}
            />
         <RadioGroup
        //   ref={radioGroupRef}
          aria-label="ringtone"
          name="ringtone"
        //   value={value}
          onChange={handleEvent}
        >
          {options.map((option) => (
            <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
          ))}
        </RadioGroup>
          </DialogContent>
          <DialogActions>
            <But onClick={handleClose} color="primary">
              Cancel
            </But>
            <But  type="submit"  color="primary">
              Add User
            </But>
          </DialogActions>
        </Dialog>
      </div>
    )}
export default UserInput;