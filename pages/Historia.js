import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Historia = () => {
  return (
    <Container className="historia-container">
      <h1>Historia de Billie Eilish</h1>
      <p>
        Billie Eilish Pirate Baird O'Connell es una cantante y compositora estadounidense nacida el 18 de diciembre de 2001.
        A una edad temprana, Billie y su hermano, Finneas, comenzaron a escribir y producir música juntos en su hogar.
        En 2015, lanzó su sencillo "Ocean Eyes" en SoundCloud, que rápidamente se volvió viral.
        Esto la llevó a obtener un contrato discográfico con Interscope Records y lanzar su álbum debut, "When We All Fall Asleep, Where Do We Go?",
        en 2019, convirtiéndose en un gran éxito.
        Su música se caracteriza por su voz suave y melódica, letras profundas y un estilo distintivo.
      </p>
      <p>
        A lo largo de su carrera, Billie Eilish ha ganado múltiples premios Grammy, incluido el premio a la Grabación del Año y Álbum del Año.
        Además de su música, es conocida por su estilo único y su actitud audaz y auténtica.
        Ha sido elogiada por su capacidad para desafiar los estereotipos y crear música y arte que resuenan con su audiencia.
      </p>
      <Row>
        <Col sm={6}>
          <img src="/img/img23.jpg" alt="Billie Eilish" className="img-fluid" />
        </Col>
        <Col sm={6}>
          <img src="/img/img24.jpg" alt="Billie Eilish" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Historia;
