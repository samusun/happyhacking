import React from 'react';
import Nav from './navbar';
import Footer from './footer';
import { withRouter } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className='main-content'>{children}</main>
      <Footer />
    </>
  );
};

export default withRouter(Layout);
