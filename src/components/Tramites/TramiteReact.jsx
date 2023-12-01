import React, { useState } from 'react';
import { Card, CardContent, CardActions, Button, Typography, Modal, Box } from '@mui/material';
import './tramiteReact.css'

const BasicCard = ({ tramites }) => {
  const [openModal, setOpenModal] = useState({});
  
  const handleOpen = (tramiteId) => {
    setOpenModal({ ...openModal, [tramiteId]: true });
  };
  
  const handleClose = (tramiteId) => {
    setOpenModal({ ...openModal, [tramiteId]: false });
  };

  return (
    <div className='tramites-container'>
      {tramites.map((tramite) => (
        <Card key={tramite.id} variant="outlined" sx={{ width: 300, height: 330, borderRadius: 4 }}>
          <CardContent>
            <Typography variant="h5" component="div" sx={{ fontFamily: 'Futura Std', color: "#0a2447", fontWeight: 600, textTransform:'uppercase' }}>
              {tramite.nombre}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => handleOpen(tramite.id)}>Leer más</Button>
            <Modal
              open={openModal[tramite.id] || false}
              onClose={() => handleClose(tramite.id)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {tramite.nombre}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
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
