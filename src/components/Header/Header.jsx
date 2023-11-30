import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import './header.css'


const preventDefault = (event) => event.preventDefault();

export default function UnderlineLink() {
  return (
    <div className="header">
        <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            typography: 'h4',
            fontSize:20,
            
            '& > :not(style) ~ :not(style)': {
            ml: 2,
         },
        }}
        onClick={preventDefault}
        >

        <Link href="#" color="#fff" underline="hover">
            {'Inicio'}
        </Link>
        <Link href="#" color="#fff" underline="hover">
            {'Tramites'}
        </Link>
        <Link href="#" color="#fff" underline="hover">
            {'Contacto'}
        </Link>

        </Box>
        <div className="departamentos_contenedor">
            <div className="departamentos_linea departamentos_color1"></div>
            <div className="departamentos_linea departamentos_color2"></div>
            <div className="departamentos_linea departamentos_color3"></div>
            <div className="departamentos_linea departamentos_color4"></div>
            <div className="departamentos_linea departamentos_color5"></div>
        </div>

    </div>


  );
}