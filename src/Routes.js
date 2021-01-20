import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Calculator from './container/Calculator/Calculator';
import Header from './container/Header/Header';
import Home from './container/Home/Home';
import Quote from './container/Quote/Quote';
import quoteData from './container/Quote/Quotes-data';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/quote" component={() => <Quote quoteData={quoteData} />} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default Routes;
