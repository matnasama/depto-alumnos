import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './tramiteReact.css'

export default function TituloTramites() {
  return (
    <Typography className="titulo" component="div">
      <Box sx={{ fontFamily: 'Monospace', fontSize: 'h3.fontSize', m: 1 }}>
        Trámites
      </Box>
    </Typography>
  );
}