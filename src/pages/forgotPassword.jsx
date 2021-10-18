import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';

function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await resetPassword(currentUser.email);
      history.push('/profile');
    } catch {
      setError('Failed to send email');
    }
    setLoading(false);
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Forgot Password</h2>
          <p> {currentUser && currentUser.email} </p>

          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Enter your registered email</Form.Label>
              <Form.Control type='email' ref={emailRef} required />
            </Form.Group>

            <Button disabled={loading} className='w-100 mt-2' type='submit'>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Need an account? <Link to='./signup'>Sign up</Link>
      </div>
    </div>
  );
}

export default ForgotPassword;
