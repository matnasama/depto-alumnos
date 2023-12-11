import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './sitios.css'

export default function ContainedButtons() {
  return (
    <div className="sitios">
      <Stack direction="row" spacing={2}>
          <Button variant="contained" href="src\files\CALENDARIO ACADEMICO 23.pdf" target='_blank' rel="noopener">
              CALENDARIO ACADÉMICO 2023
          </Button>

          <Button variant="contained" href="src\files\CALENDARIO ACADEMICO 24.pdf"  target='_blank' rel="noopener">
              CALENDARIO ACADÉMICO 2024
          </Button>
      </Stack>
    </div>
  );
}