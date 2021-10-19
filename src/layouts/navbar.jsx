import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import s from '../scss/layout/navbar.module.scss';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/pictures/logo-small.svg';
import { useAuth } from './../context/AuthContext';

const Nav = () => {
  const history = useHistory();
  function handleClick() {
    history.push('/');
  }
  const { currentUser, logout } = useAuth();
  return (
    <div className={s.container}>
      <div onClick={handleClick}>
        <img src={logo} alt='' />
      </div>
      {currentUser ? (
        <Navbar variant='dark'>
          <NavDropdown id='nav-dropdown' title='Menu'>
            <NavDropdown.Item>
              <Link to='./profile'>Profile</Link>
            </NavDropdown.Item>
            <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Link to='./marketplace'>Marketplace</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to='./about'>About</Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar>
      ) : (
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
              <Link to='./marketplace'>Marketplace</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to='./about'>About</Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar>
      )}
    </div>
  );
};

export default Nav;
