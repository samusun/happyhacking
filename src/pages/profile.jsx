import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

export default function Profile() {
  const { currentUser, logout } = useAuth();
  return (
    <div>
      {currentUser ? (
        <div>
          <h1>Welcome {currentUser.email} </h1>
          <Button variant='success' onClick={logout}>
            Logout
          </Button>
        </div>
      ) : (
        <div>
          <h1> You are logged out</h1>
          <Link to='./login'>Login</Link>
        </div>
      )}
    </div>
  );
}
