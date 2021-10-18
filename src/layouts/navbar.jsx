import React from 'react';
import { Link } from 'react-router-dom';
import s from '../scss/layout/navbar.module.scss';

const Navbar = () => {
  return (
    <div className={s.container}>
      <p>Navbar</p>
      <Link to='./'>Home</Link>
      <Link to='./about'>About</Link>
      <Link to='./portfolio'>Portfolio</Link>
    </div>
  );
};

export default Navbar;
