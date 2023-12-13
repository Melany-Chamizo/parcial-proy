import React from 'react';
import { Projectos as ProjectosIcon } from 'react-bootstrap-icons'; // Cambiado el nombre de importación para evitar conflictos

const ProjectosComponent = () => {
  const proyectos = [
    {
      id: 1,
      titulo: 'Concierto en el Foro Sol',
      ubicacion: 'Foro Sol, Ciudad de México',
      fecha: '15 de octubre de 2023',
      descripcion: 'Billie Eilish en concierto presentando su nuevo álbum.',
    },
    {
      id: 2,
      titulo: 'Festival de Glastonbury',
      ubicacion: 'Glastonbury, Reino Unido',
      fecha: '26 de junio de 2023',
      descripcion: 'Participación de Billie Eilish en el festival más grande del Reino Unido.',
    },
    // Puedes añadir más proyectos aquí
  ];

  return (
    <div className="projectos">
      <h2>Próximos Proyectos</h2>
      <ul>
        {proyectos.map((proyecto) => (
          <li key={proyecto.id}>
            <h3>{proyecto.titulo}</h3>
            <p>Ubicación: {proyecto.ubicacion}</p>
            <p>Fecha: {proyecto.fecha}</p>
            <p>{proyecto.descripcion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectosComponent; // Cambiado el nombre de exportación para evitar conflictos
