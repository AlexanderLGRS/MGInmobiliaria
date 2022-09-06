import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './Footer.css';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <>
      <Box
        className='footer'
        sx={{
          flexGrow: 1,
          bgcolor: '#4d18c7',
          color: 'white',
          width: '100vw',
          display: 'flex',
          justifyContent: 'space-evenly',
          bottom: '0',
        }}
        position='fixed'
      >
        <Link className='sideBar-item-button' to='/' underline='none'>
          Preguntas frecuentes
        </Link>
        <Link className='sideBar-item-button' to='/' underline='none'>
          Contáctanos
        </Link>
        <Link className='sideBar-item-button' to='/' underline='none'>
          Terminos y condiciones
        </Link>
        <Link className='sideBar-item-button' to='/' underline='none'>
          Privacidad
        </Link>
      </Box>
    </>
  );
}
