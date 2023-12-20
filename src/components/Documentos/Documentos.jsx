import * as React from 'react';
import { Button, Typography, Box } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import './documentos.css'

export default function Documentos() {
  return (
    <div className='reglamentos-container'>
      <Box className='reglamentos'>
        <Typography color={'#fff'} textAlign={'left'} sx={{ fontFamily: 'Futura Std' }}>
            REGLAMENTO ACADÉMICO 2023
        </Typography>
        <Button href="http://www.unm.edu.ar/files/Calendario-Academico-2023-UNM-Sep-2022.pdf" target="_blank" rel="noreferrer">
            <DownloadIcon></DownloadIcon>
        </Button>
      </Box>
      <Box className='reglamentos'> 
        <Typography color={'#fff'} textAlign={'left'} sx={{ fontFamily: 'Futura Std' }}>
        REGLAMENTO DE ALUMNOS
        </Typography>
        <Button href="http://www.unm.edu.ar/files/Reglamento_de_Alumnos_UNM_Nov_2022_x.pdf" target="_blank" rel="noreferrer">
            <DownloadIcon></DownloadIcon>
        </Button>
      </Box>
    </div>
  );
}