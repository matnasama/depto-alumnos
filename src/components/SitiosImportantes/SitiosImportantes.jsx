import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { sitios } from '../../data/data.json';
import './sitiosImportantes.css';

export default function SitiosImportantes() {
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const loadImagesAsync = async () => {
      const loadedImagesArray = await Promise.all(
        sitios.map(async (sitio) => {
          const img = new Image();
          img.src = sitio.imagen;

          return new Promise((resolve) => {
            img.onload = () => resolve({ ...sitio, loaded: true });
            img.onerror = () => resolve({ ...sitio, loaded: false });
          });
        })
      );

      setLoadedImages(loadedImagesArray);
    };

    loadImagesAsync();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className='sitios-importantes-container'>
      {loadedImages.map((sitio) => (
        <Card key={sitio.id} sx={{ width: 200, borderRadius: 0 }}>
          <CardActionArea className='sitios-importantes-card' href={sitio.url} target='_blank'>
            <CardMedia
              sx={{ objectFit: 'contain' }}
              className='sitios-importantes-card-img'
              component="img"
              height='200'
              src={sitio.loaded ? sitio.imagen : 'URL_DE_IMAGEN_POR_DEFECTO_SI_NO_SE_CARGA'}
              alt={sitio.nombre}
            />
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}
