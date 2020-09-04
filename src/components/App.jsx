import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../utility/history';

import Home from '../pages/Home';
import Searched from '../pages/Searched';
import Details from '../pages/Details';
import NotFound from './NotFound';
import Layout from './Layout';

function App() {
  return (
    <Layout>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/searched/" component={Searched} />
          <Route exact path="/character/:charId" component={Details} />
          <Route exact path="/searched/:filterWord" component={Searched} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
