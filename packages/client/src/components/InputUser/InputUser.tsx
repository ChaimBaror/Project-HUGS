import React, { useState } from 'react';
import {  Dialog } from '@material-ui/core';
import Form from './Form';
import Button from '../Button';
import { useTranslation } from 'react-i18next';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

interface Props {  
  setAddUser:any
  }

const UserInput = (props: Props) => {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <Button
       text= {t("AddMember")}
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