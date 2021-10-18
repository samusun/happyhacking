import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './scss/main.scss';

import { HOME, ABOUT, PORTFOLIO } from './routes';
import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/portfolio.jsx';
import Layout from './layouts/layout';

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route exact path={HOME} component={Home} />
          <Route exact path={ABOUT} component={About} />
          <Route exact path={PORTFOLIO} component={Portfolio} />
        </Layout>
      </Switch>
    </Router>
  );
};
export default Routing;
