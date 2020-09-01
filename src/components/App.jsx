import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Searched from '../pages/Searched';
import Details from '../pages/Details';
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/searched" component={Searched} />
          <Route exact path="/character/:charId" component={Details} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
