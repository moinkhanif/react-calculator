import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './container/Header/Header';
import Home from './container/Home/Home';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default Routes;
