import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './sitios.css'

export default function ContainedButtons() {
  return (
    <div className="sitios">
      <Stack direction="row" spacing={2}>
          <Button variant="contained" href="http://www.unm.edu.ar/files/Calendario-Academico-2023-UNM-Sep-2022_xx.pdf" target='_blank' rel="noopener">
              CALENDARIO ACADÉMICO 2023
          </Button>

          <Button variant="contained" href="http://www.unm.edu.ar/files/Calendario_Acadmico_2024_UNM_Nov_2023_2.pdf"  target='_blank' rel="noopener">
              CALENDARIO ACADÉMICO 2024
          </Button>
      </Stack>
    </div>
  );
}