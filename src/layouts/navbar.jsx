import React from 'react';
import { Link } from 'react-router-dom';
import s from '../scss/layout/navbar.module.scss';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/pictures/logo-small.svg';

const Nav = () => {
  return (
    <div className={s.container}>
      <Link to='./'>
        <img src={logo} alt='' />
      </Link>
      <Navbar variant='dark'>
        <NavDropdown id='nav-dropdown' title='Menu'>
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
      </Navbar>
    </div>
  );
};

export default Nav;
