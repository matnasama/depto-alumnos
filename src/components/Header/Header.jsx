import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import unmLogo from '../../assets/Logo-UNM-fondo-oscuro.png';
import './header.css';
import useMediaQuery from '@mui/material/useMediaQuery';

const preventDefault = (event) => event.preventDefault();

export default function Header() {
  const isMobile = useMediaQuery('(max-width: 540px)');
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <div className="header" style={{ height: '80px' }}>
      <div className="navbar">
        <a className='link-logo' href="#">
          <img className='logo' src={unmLogo} alt="" />
        </a>

        {isMobile && (
          <div className="menu" style={{ marginInlineEnd: '16px' }}>
            <IconButton color="inherit" edge="end" aria-label="menu" onClick={toggleDrawer} size="large">
              <MenuIcon fontSize="inherit" style={{ fontSize: '55px' }} />
            </IconButton>
          </div>
        )}

        {!isMobile && (
          <div className="menu">
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                height: '40px',
                padding: 0,
                fontSize: '1.2em',
                marginRight: '5rem',
                '& > :not(style) ~ :not(style)': {
                  ml: 2,
                },
              }}
              onClick={preventDefault}
            >
              <Link href="#" color="#fff" underline="none">
                {'Inicio'}
              </Link>
              <Link href="#" color="#fff" underline="none">
                {'Tramites'}
              </Link>
              <Link href="#" color="#fff" underline="none">
                {'Contacto'}
              </Link>
            </Box>
          </div>
        )}
      </div>

      {isMobile && (
        <Drawer
          anchor="right"
          open={openDrawer}
          onClose={toggleDrawer}
        >
          <Box
            sx={{
              width: 250,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'left',
              fontSize: '24px',
              margin: '0 0 0 2rem',

            }}
          >
            <IconButton
              color="#000000"
              edge="end"
              aria-label="close menu"
              onClick={toggleDrawer}
              sx={{ alignSelf: 'flex-end'}}
              size="large"
            >
              <CloseIcon fontSize="inherit" style={{ fontSize: '40px' }} />
            </IconButton>

            <Link href="#" color="#0a2447" underline='none' onClick={preventDefault}>
              {'Inicio'}
            </Link>
            <Link href="#" color="#0a2447" underline='none' onClick={preventDefault}>
              {'Tramites'}
            </Link>
            <Link href="#" color="#0a2447" underline='none' onClick={preventDefault}>
              {'Contacto'}
            </Link>
          </Box>
        </Drawer>
      )}
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
