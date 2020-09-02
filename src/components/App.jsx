import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../utility/history';

import Home from '../pages/Home';
import Searched from '../pages/Searched';
import Details from '../pages/Details';
import Layout from './Layout';

function App() {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/searched/:filterWord" component={Searched} />
          <Route exact path="/searched/" component={Searched} />
          <Route exact path="/character/:charId" component={Details} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
