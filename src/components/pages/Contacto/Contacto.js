import * as React from 'react';
import './Contacto.css';
import {useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Form from './Form.js';



export default function Contacto() {
    return (
        <div>
            <div className='title-container'>
                <h2 className='nosotros'>Contacto</h2>
            </div>
            <Box sx={{ flexGrow: 1, width: '50%', margin: 'auto', textAlign:'start', marginTop: '100px' }}>  
                <div>
                    <p>Actualmente podes encontrarnos en nuestras redes sociales</p>
                </div>
                <div className='links-container'>
                    <a href='https://www.instagram.com/equus.wines/' target='#blank' className='link-a'>< InstagramIcon/><span className='link'> Instagram</span></a>
                </div>
                <div>
                    <a href='https://api.whatsapp.com/send?phone=34123456789&text=Hola,%20quisiera%20hacer%20una%20consulta.' target='#blank' className='link-a'><WhatsAppIcon /> <span className='link'>Whatsapp</span></a>
                </div>
                <div>
                    <p> Para solicitar presupuesto o consultarnos podes dejarlo en el formulario de contacto</p>
                </div>
                <Form />
          </Box>
        </div>
    )
}