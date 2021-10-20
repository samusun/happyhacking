import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './scss/main.scss';

import {
  HOME,
  ABOUT,
  PORTFOLIO,
  LOGIN,
  FORGOT,
  PROFILE,
  UPLOAD
} from './routes';
import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/portfolio.jsx';
import Layout from './layouts/layout';
import Login from './pages/login';
import Signup from './pages/signup';
import ForgotPassword from './pages/forgotPassword';
import { AuthProvider } from './context/AuthContext';
import Profile from './pages/profile';
import Marketplace from './pages/marketplace';
import Product from './pages/product';
import Upload from './pages/upload';

const Routing = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Layout>
            <Route exact path={HOME} component={Home} />
            <Route exact path={ABOUT} component={About} />
            <Route exact path={PORTFOLIO} component={Portfolio} />
            <Route exact path={LOGIN} component={Login} />
            <Route path='/signup/:myParams' component={Signup} />
            <Route exact path={FORGOT} component={ForgotPassword} />
            <Route exact path={PROFILE} component={Profile} />
            <Route exact path='/marketplace' component={Marketplace} />
            <Route path='/marketplace/:someParams' component={Product} />
            <Route exact path={UPLOAD} component={Upload} />
          </Layout>
        </Switch>
      </AuthProvider>
    </Router>
  );
};
export default Routing;
