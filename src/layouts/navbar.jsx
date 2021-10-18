import React from 'react';
import { Link } from 'react-router-dom';
import s from '../scss/layout/navbar.module.scss';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbar = () => {
  return (
    <div className={s.container}>
      <h1>NFT Castle</h1>
      <NavDropdown title='Menu' menuVariant='dark' bg='dark'>
        <NavDropdown.Item>
          <Link to='./login'>Login</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to='./signup'> Sign up</Link>
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>
          <Link to='./portfolio'>Portfolio</Link>
        </NavDropdown.Item>
        <NavDropdown.Item>
          <Link to='./about'>About</Link>
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};

export default Navbar;
