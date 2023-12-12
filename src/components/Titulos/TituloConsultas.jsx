import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './titulos.css'

export default function TituloConsultas() {
  return (
    <section id='seccion-consultas'>
      <Typography className="titulo" component="div">
        <Box sx={{ fontFamily: 'Fjalla One', fontSize: 'h2.fontSize', m: 1, textShadow: '1px 5px 2px #555', textTransform: 'uppercase' }}>
          Consultas frecuentes
        </Box>
      </Typography>
    </section>
  );
}