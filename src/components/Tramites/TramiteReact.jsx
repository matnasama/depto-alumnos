import React, { useState } from 'react';
import { Card, CardContent, CardActions, Button, Typography, Modal, Box } from '@mui/material';
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
      p: 4,
      borderRadius: 0,
      width: '90vw',
      height: '80vh',
    };
  };

  return (
    <div className='tramites-container'>
      {tramites.map((tramite) => (
        <Card key={tramite.id} variant="outlined" sx={{ width: 300, height: 330 }}>
          <CardContent>
            <Typography variant="h5" component="div" sx={{ fontFamily: 'Futura Std', color: "#0a2447", fontWeight: 600, textTransform:'uppercase', whiteSpace: 'pre-line' }}>
              {tramite.nombre}
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
                <Typography id="modal-modal-title" variant="h4" component="h2" sx={{textAlign:'center'}}>
                  {tramite.nombre}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2, whiteSpace: 'pre-line' }}>
                  {tramite.descripcion}
                </Typography>
              </Box>
            </Modal>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default BasicCard;
