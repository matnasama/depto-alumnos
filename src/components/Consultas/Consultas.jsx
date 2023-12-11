import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { consultas } from '../../data/data.json'
import './consultas.css'

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='consultas'>
        {consultas.map((consultas) => (
          <div key={consultas.id}  className="consultas-container">
              <Accordion expanded={expanded === consultas.id} onChange={handleChange(consultas.id)}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: '100%', flexShrink: 0, fontFamily: 'Futura Std', textTransform: 'uppercase' }}>
                  {consultas.nombre}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ paddingRight: '20px', flexShrink: 0, fontFamily: 'Futura Std', fontWeight:200, whiteSpace: 'pre-line', textAlign: 'left' }}>
                    {consultas.descripcion}                     
                  </Typography>
                </AccordionDetails>
              </Accordion> 
          </div>
        ))}
    </div>
  )
}