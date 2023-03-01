import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

//Css
import './Footer.css'
//Files
import equus from '../../components/img/equus.svg';


function Footer() {


  return (
        <div className='footer-container'>
            <div className='footer'>
                <img src={equus} alt='equus' className='img-logo' />
            </div>

        </div>  
    );
}

export default Footer;
