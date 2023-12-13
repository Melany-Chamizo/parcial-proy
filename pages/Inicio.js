import React from 'react';

const Inicio = () => {
  return (
    <div className="inicio">
      <h2>Biografía de Billie Eilish</h2>
      <p>
        Billie Eilish es una cantante y compositora estadounidense nacida el 18 de diciembre de 2001. 
        Comenzó a ganar reconocimiento en 2015 con su sencillo "Ocean Eyes" y desde entonces ha sido 
        una de las artistas más destacadas en la industria de la música.
      </p>
      <h3>Álbumes Destacados</h3>
      <ul>
        <li>When We All Fall Asleep, Where Do We Go? (2019)</li>
        <li>Don't Smile at Me (2017)</li>
        {/* Agregar más álbumes si lo deseas */}
      </ul>
      <h3>Próximos Eventos</h3>
      <p>No hay eventos próximos programados actualmente.</p>
      {/* Podrías mostrar próximos eventos si hay información disponible */}
    </div>
  );
};

export default Inicio;
