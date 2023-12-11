import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './titulos.css'

export default function TituloConsultas() {
  return (
    <Typography className="titulo" component="div">
      <Box sx={{ fontFamily: 'Fjalla One', fontSize: 'h2.fontSize', m: 1, textShadow: '1px 5px 2px #555' }}>
        Consultas frecuentes
      </Box>
    </Typography>
  );
}