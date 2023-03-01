import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './Form.css'




export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        s: 1, m: 1, width: '33', margin: 'auto', marginBottom: '100px'
      }}
      noValidate
      autoComplete="off"
    >
        <div>
            <TextField required margin='normal' fullWidth label="Nombre" variant="outlined" />
        </div>
        <div>
            <TextField required margin='normal' fullWidth label="Apellido" variant="outlined" />
        </div>
        <div>
            <TextField required margin='normal' fullWidth label="Telefono" variant="outlined" />
        </div>
        <div className='mensaje-field'>
            <TextField required margin='normal' fullWidth multiline rows={6} label="Mensaje" variant="outlined" />
        </div>
        <div className='button-container'>
            <Button type='submit' variant="contained" className='send-button' endIcon={<SendIcon />}>
                Send
            </Button>
        </div>
      </Box>
  );
}