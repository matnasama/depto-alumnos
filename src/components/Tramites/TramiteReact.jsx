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
              open={openModal === tramite.id}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  maxWidth: '90vw', // Ajusta el ancho máximo relativo al ancho de la ventana
                  maxHeight: '90vh', // Ajusta la altura máxima relativa al alto de la ventana
                  overflowY: 'auto', // Añade desplazamiento vertical si es necesario
                  bgcolor: 'background.paper',
                  boxShadow: 24,
                  p: 4,
                  borderRadius: 4,
                }}
              >
                <Typography id="modal-modal-title" variant="h4" component="h2">
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
