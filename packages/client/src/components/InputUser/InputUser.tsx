import React, { useState } from 'react';
import { Button,Dialog,DialogTitle ,DialogContentText ,DialogContent,TextField ,DialogActions ,RadioGroup,FormControlLabel,Radio} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';





const UserInput = (props: any) => {


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
    const inputStyle = {
        // border: '2px solid red',
        // height:'auth',
        // width: '20%',
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

    const options = [
        'אחר',
        'אח',
        'אחות',
        'נכד',
      ];

    return (
        <div>
        <Button className={classes.button}  variant="outlined" color="primary" onClick={handleClickOpen}>
         הוסף בן משפחה +
        </Button>
        <Dialog open={open} 
        onClose={handleClose}
        onSubmit={handleEvent}

         aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">  הוסף בן משפחה </DialogTitle>
          <DialogContent>
            <DialogContentText>
               הוסף בן משפחה 

            </DialogContentText>
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
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type='submit' onClick={handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
}

export default UserInput;