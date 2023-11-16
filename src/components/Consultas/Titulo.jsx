import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function FontFamily() {
  return (
    <Typography component="div">
      <Box sx={{ fontFamily: 'Monospace', fontSize: 'h3.fontSize', m: 1 }}>
        Consultas frecuentes
      </Box>
    </Typography>
  );
}