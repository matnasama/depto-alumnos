import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './info.css'

export default function Info() {
  return (
    <div className="info-container">
        <Typography component="div">
             <Box  className="info" sx={{ fontFamily: 'Futura Std', fontWeight: 100 }}>
                A través del siguiente espacio usted podrá informarse acerca de todos los trámites que puede realizar en el Departamento de Alumnos, incluso podrá iniciar algunas gestiones y/o descargar formularios necesarios para los trámites que así lo requieran.
                En esta plataforma usted también podrá encontrar respuestas a las preguntas frecuentes que servirán de ayuda y acompañamiento durante el desarrollo de la cursada.
                En caso de no encontrar el trámite que desea realizar o la respuesta a sus inquietudes podrá realizar su consulta a nuestros canales de contacto.
            </Box>
        </Typography>
    </div>
  );
}