import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { Link, useHistory, useParams } from 'react-router-dom';
import s from '../scss/pages/login.module.scss';

function Signup() {
  let show = false;
  const { myParams } = useParams();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signUp } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  if (myParams === 'getStarted') {
    show = true;
  }
  console.log(show, myParams);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      history.push('/login');
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);
  }

  return (
    <div className={s.container}>
      {show && <h3> Create a user to start collecting your art</h3>}
      <Card style={{ width: '25rem' }}>
        <Card.Body>
          <h2 className='text-center mb-4'>Sign up</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' ref={emailRef} required />
            </Form.Group>

            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' ref={passwordRef} required />
            </Form.Group>

            <Form.Group id='password-confirm'>
              <Form.Label>Password confirmation</Form.Label>
              <Form.Control type='password' ref={passwordConfirmRef} required />
            </Form.Group>
            <Button
              disabled={loading}
              className='w-100 mt-2'
              variant='dark'
              type='submit'
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        Already have an account? <Link to='/login'> Login here</Link>
      </div>
    </div>
  );
}

export default Signup;
