import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { withRouter } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='main-content'>{children}</main>
      <Footer />
    </>
  );
};

export default withRouter(Layout);
