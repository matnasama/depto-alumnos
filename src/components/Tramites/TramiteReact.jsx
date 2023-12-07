import React, { useState } from 'react';
import { Card, CardContent, CardActions, Button, Typography, Modal, Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import Link  from '@mui/material/Link';
import './tramiteReact.css';

const BasicCard = ({ tramites }) => {
  const [openModal, setOpenModal] = useState(null);

  const handleOpen = (tramiteId) => {
    setOpenModal(tramiteId);
  };

  const handleClose = () => {
    setOpenModal(null);
  };

  const getModalStyle = () => {
    return {
      position: 'absolute',
      margin: 'auto',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      overflowY: 'auto',
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: 3,
      minWidth: 250,
    };
  };

  return (
    <div className='tramites-container'>
      {tramites.map((tramite) => (
        <Card key={tramite.id} variant="outlined" sx={{ width: 300, height: 330, border:'3px ridge rgba(6, 6, 6, 0.27)' }}>
          <CardContent>
            <Typography variant="h5" component="div" sx={{ color: "#000000", fontWeight: 700, textTransform:'uppercase', whiteSpace: 'pre-line' }}>
              {tramite.nombre}
            </Typography>
            <Typography sx={{ mb: 1.5, fontSize: '0.8em', whiteSpace: 'pre-line', fontFamily: 'Futura Std', fontWeight: 200 }} color="text.secondary">
              {tramite.sub}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => handleOpen(tramite.id)}>Leer más</Button>
            <Modal
              open={openModal === tramite.id}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={getModalStyle()}>
                <Typography id="modal-modal-title" variant="h6" component="h6" sx={{fontFamily: 'Futura Std', textAlign:'center', fontWeight:600, textTransform:'uppercase' }}>
                  {tramite.nombre}
                </Typography>
                <Typography id="modal-modal-description" sx={{fontFamily: 'Futura Std', mt: 2, whiteSpace: 'pre-line', fontWeight:200 }}>
                  {tramite.descripcion}
                </Typography>

                <Stack spacing={2} direction="row">
                  <Link href={tramite.urlrequisitos} underline='none' color={'#1976d2'} target="_blank" rel="noopener" sx={{textTransform:'uppercase'}}>
                      {tramite.requisitos}
                    </Link>
                  <Button variant="contained"> 
                    <Link href={tramite.url} underline='none' color={'#fff'} target="_blank" rel="noopener">
                      {tramite.type}
                    </Link>
                  </Button>
                </Stack>

              </Box>
            </Modal>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default BasicCard;
