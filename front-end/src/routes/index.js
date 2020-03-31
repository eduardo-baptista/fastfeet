import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

// pages
import SignIn from '~/pages/SignIn';
import Delivery from '~/pages/Delivery';

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/encomendas" component={Delivery} isPrivate />
    </Switch>
  );
}
