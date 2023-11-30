import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Consultas() {
  return (
    <Typography component="div">
      <Box className="titulo" sx={{ fontFamily: 'Monospace', fontSize: 'h3.fontSize', m: 1 }}>
        Consultas frecuentes
      </Box>
    </Typography>
  );
}