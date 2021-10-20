import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Upload() {
  let userUpload = {};
  function handleSubmit(g) {
    g.preventDefault();
    userUpload = {
      name: g.target[0].value,
      description: g.target[1].value,
      price: g.target[2].value
    };
    console.log(userUpload);
  }

  return (
    <div>
      <h1>Upload your creativity</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='name'>
          <Form.Label>Name of your creation</Form.Label>
          <Form.Control type='text' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='description'>
          <Form.Label>Description</Form.Label>
          <Form.Control as='textarea' rows={3} />
        </Form.Group>

        <Form.Group className='mb-3' controlId='price'>
          <Form.Label>Price in $</Form.Label>
          <Form.Control type='number' placeholder='$' />
        </Form.Group>

        <Button variant='dark' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Upload;
