
import * as React from 'react';
import "./tramites.css"

export default function Tramites({ tramites }) {

  return (
    <main className='tramites'>
      <div className='container'>
      {tramites.map(tramites => (
      <div key={tramites.id} className='card'>
        <div className='info'>
          <h2>{tramites.nombre}</h2>
          <p>{tramites.descripcion}</p>
        </div>
        <a href={tramites.url} target='_blank'>Ver trámite</a>
      </div>
    ))}
  </div>
  </main>
  );
}