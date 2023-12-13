import React from 'react';
import './fotos.css'; // Archivo CSS para estilos personalizados
import { Container, Row, Col } from 'react-bootstrap';

const Fotos = () => {
  const images = [
    { id: 1, src: '/img/img1.jpg', alt: 'Foto 1' },
    { id: 2, src: '/img/img2.jpg', alt: 'Foto 2' },
    { id: 3, src: '/img/img3.jpg', alt: 'Foto 3' },
    { id: 4, src: '/img/img4.jpg', alt: 'Foto 4' },
    { id: 5, src: '/img/img5.jpg', alt: 'Foto 5' },
    { id: 6, src: '/img/img6.jpg', alt: 'Foto 6' },
    { id: 7, src: '/img/img7.jpg', alt: 'Foto 7' },
    { id: 8, src: '/img/img8.jpg', alt: 'Foto 8' },
    { id: 9, src: '/img/img9.jpg', alt: 'Foto 9' },
    { id: 10, src: '/img/img10.jpg', alt: 'Foto 10' },
    { id: 11, src: '/img/img11.jpg', alt: 'Foto 11' },
    { id: 12, src: '/img/img12.jpg', alt: 'Foto 12' },
  ];

  return (
    <Container className="img">
      <h2>Imagenes</h2>
      <Row>
        {images.map((image) => (
          <Col key={image.id} sm={6} md={4} lg={3}>
            <div className="image-box">
              <img src={image.src} alt={image.alt} className="img-fluid" />
              <p>{image.alt}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Fotos;
