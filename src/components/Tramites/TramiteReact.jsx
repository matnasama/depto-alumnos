import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { tramites } from '../../data/data.json'
import './tramiteReact.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#222',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: '#fff'
    
  };

export default function BasicCard() {
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);   

  return (
    <div className='tramites-container'>
    {tramites.map((tramites) => (
        <Card variant="outlined" sx={{ width: 330, height: 330, borderRadius: 6 }}>
        <CardContent>
            <Typography variant="h5" component="div" sx={{ fontFamily: 'Futura Std', color:"#0a2447", fontWeight:600 }}>
                {tramites.nombre}
            </Typography>
        </CardContent>
        <CardActions key={tramites.id}>
            <Button onClick={handleOpen}>Leer más</Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                {tramites.nombre}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {tramites.descripcion}
                </Typography>
            </Box>
            </Modal>
        </CardActions>
        </Card>
        ))}
    </div>
  );
}