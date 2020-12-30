import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './container/Header/Header';
import App from './container/App/App';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
