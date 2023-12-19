import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { sitios } from '../../data/data.json'
import './sitiosImportantes.css'

export default function SitiosImportantes () {
    return (
    <div className='sitios-importantes-container'>
      {sitios.map((sitios) => (
    <Card key={sitios.id} sx={{ width: 200, borderRadius: 0 }}>
      <CardActionArea className='sitios-importantes-card' href={sitios.url} target='_blank'>
        <CardMedia
          sx={{objectFit:'contain'}}
          className='sitios-importantes-card-img'
          component="img"
          height='200'
          image={sitios.imagen}
          alt={sitios.nombre}

        />
      </CardActionArea>
    </Card>
      ))}
    </div>
    );
}