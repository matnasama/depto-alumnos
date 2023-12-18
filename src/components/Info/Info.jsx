import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './info.css'

export default function Info() {
  return (
    <div className="info-container">
        <Typography component="div">
          <Box  className="info" sx={{ fontFamily: 'Futura Std', fontWeight: 100 }}>
            <p>
            A través del siguiente espacio podrás informarte acerca de todos los trámites que podés realizar en el Departamento de Alumnos, incluso podrás iniciar algunas gestiones y/o descargar formularios necesarios para los trámites que así lo requieran. 
            </p> 
            <p>
            En esta plataforma  también podrás encontrar respuestas a las preguntas frecuentes que te servirán de ayuda y acompañamiento durante el desarrollo de la cursada del COPRUN, Curso de Orientación y Preparación Universitaria, como así también de las carreras de grado de la UNIVERSIDAD NACIONAL DE MORENO . 
            </p>
            <p>
            En caso de no encontrar el trámite que deseas realizar o la respuesta a tus inquietudes podrás realizar tu consulta en nuestros canales de contacto.
            </p>
          </Box>
        </Typography>
    </div>
  );
}