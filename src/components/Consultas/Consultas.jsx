import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './consultas.css'

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='consultas'>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0, fontFamily: 'Futura Std' }}>
          Regularidad
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ paddingRight: '20px', flexShrink: 0, fontFamily: 'Futura Std' }}>
            <div>
              <strong>Como estipula el Reglamento de Alumnos</strong>
                <ul>
                  <ol><strong>ARTÍCULO 17.-</strong>  El alumno que no hubiere aprobado su examen final en el plazo previsto en el artículo 16 y/o hubiera reprobado en 3 (tres) oportunidades su examen final, perderá la regularidad en la asignatura y deberá recursarla, con excepción de las 2 (dos) últimas unidades curriculares que pudiere adeudar de su Plan de Estudios. Esta circunstancia no afectará su inscripción y condición en relación a las obligaciones curriculares correlativas.</ol>
                  <ol><strong>ARTÍCULO 18.-</strong>  La SECRETARÍA ACADÉMICA podrá conceder una prórroga o nueva oportunidad de examen final, en acuerdo con el CONSEJO del DEPARTAMENTO ACADÉMICO correspondiente, previa solicitud debidamente justificada del interesado y dictamen del titular de la asignatura.</ol>
                  <ol><strong>ARTÍCULO 19.-</strong>  El alumno que optare por recursar una materia en condición regular, a efectos de su promoción mediante el régimen de regularidad, perderá la condición de regular en la materia obtenida con anterioridad.</ol>
                  <ol>No se admitirá la inscripción para recursar una materia en condición regular, antes del plazo de 1 (un) año a computar desde la fecha de su regularización.</ol>
                </ul>  
            </div>
   
                     
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontFamily: 'Futura Std' }}>Users</Typography>
          <Typography sx={{ color: 'text.secondary', fontFamily: 'Futura Std' }}>
            ¿You are currently not an owner?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ fontFamily: 'Futura Std' }}>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0, fontFamily: 'Futura Std' }}>
            Advanced settings
          </Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontFamily: 'Futura Std' }}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontFamily: 'Futura Std' }}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0, fontFamily: 'Futura Std' }}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>      
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}