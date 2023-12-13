import React from 'react';

const Musicas = () => {
  const canciones = [
    {
      id: 1,
      titulo: 'Bad Guy',
      duracion: '3:14',
      album: 'When We All Fall Asleep, Where Do We Go?',
    },
    {
      id: 2,
      titulo: 'Ocean Eyes',
      duracion: '3:20',
      album: 'Don’t Smile at Me',
    },
    
  ];

  return (
    <div className="musicas">
      <h2>Canciones de Billie Eilish</h2>
      <ul>
        {canciones.map((cancion) => (
          <li key={cancion.id}>
            <h3>{cancion.titulo}</h3>
            <p>Duración: {cancion.duracion}</p>
            <p>Álbum: {cancion.album}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Musicas;
