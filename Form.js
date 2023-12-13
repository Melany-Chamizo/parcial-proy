import React from 'react';
import { Form, Button } from 'react-bootstrap';

const CustomForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    // Aquí puedes manejar la lógica para enviar los datos del formulario
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your full name" name="fullName" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      {/* Resto de los campos del formulario con atributos 'name' */}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default CustomForm;

