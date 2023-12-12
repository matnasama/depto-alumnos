import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './titulos.css'

export default function TituloSitios() {
  return (
    <section id='seccion-sitios'>
      <Typography className="titulo" component="div">
        <Box sx={{ fontFamily: 'Fjalla One', fontSize: 'h2.fontSize', m: 1, textShadow: '1px 5px 2px #555', textTransform: 'uppercase' }}>
          Calendario Académico
        </Box>
      </Typography>
    </section>
  );
}