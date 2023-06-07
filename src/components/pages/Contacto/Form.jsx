import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import SendIcon from '@mui/icons-material/Send';
import './Form.css'




export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        s: 1, m: 1, width: '33', margin: 'auto', marginBottom: '100px', color: 'white'
      }}
      noValidate
      autoComplete="off"
      className='form'
    >
        <div>
            <input required  className='input' placeholder='Nombre' margin='normal' fullWidth label="Nombre" variant="outlined" />
        </div>
        <div>
            <input required  className='input' margin='normal' fullWidth placeholder="Apellido" variant="outlined" />
        </div>
        <div>
            <input required  className='input' margin='normal' fullWidth placeholder="Telefono" variant="outlined" />
        </div>
        <div>
            <textarea required className='input mensaje' placeholder="Mensaje" variant="outlined" />
        </div>
        <div className='button-container'>
            <button type='submit' variant="contained" className='send-button' endIcon={<SendIcon />}>
                Send
            </button>
        </div>
      </Box>
  );
}