import React, { useState } from 'react'
import { Button, DialogTitle, DialogContentText, DialogContent, TextField, DialogActions, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

interface Props {
    onClose: any
    setAddUser: any
}

export const Form = (props: Props) => {
    const { t } = useTranslation();
    const [state, setState] = useState({
        lastName: "",
        firstName: "",
        email: "",
        Phone: "",
        role: ""
    });

    const handleInputChange = (event: any) => {
        setState((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value
        }));
    };
    const handleSubmit = (event: any) => {
        event.preventDefault();
        props.setAddUser({
            ...state
        })
        console.log(state);
        props.onClose()
    }
    const options = [
       t("girl"),
       t("daughter"),
      t("grandchild"),
       t("else"),
    ];

    return (
        <form onSubmit={handleSubmit}>
            <DialogTitle id="form-dialog-title">  הוסף בן משפחה </DialogTitle>
            <DialogContent>
                <DialogContentText>
                     בן משפחה
            </DialogContentText>
         
                <TextField
                    autoFocus
                    margin="dense"
                    id="firstName"
                    name="firstName"
                    label="first Name"
                    type="text"
                    value={state.firstName}
                    onChange={handleInputChange}
                    fullWidth
                />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="lastName"
                    name="lastName"
                    label="last Name"
                    type="text"
                    value={state.lastName}
                    onChange={handleInputChange}
                    fullWidth
                />

                <TextField
                    autoFocus
                    margin="dense"
                    label="email"
                    type="text"
                    name="email"
                    value={state.email}
                    onChange={handleInputChange}
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="Phone"
                    label="Phone"
                    type="Phone"
                    name="Phone"
                    value={state.Phone}
                    onChange={handleInputChange}
                    fullWidth
                />
                <RadioGroup
                    aria-label="role"
                    name="role"
                    id="role"
                    value={state.role}
                    onChange={handleInputChange}
                >
                    {options.map((option) => (
                        <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
                    ))}
                </RadioGroup>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose} color="primary">
                   
                    {t("Cancel")}
            </Button>
                <Button type='submit' color="primary">
                {t("add")}
                   
            </Button>
            </DialogActions>
        </form>

    )

}

export default Form;
