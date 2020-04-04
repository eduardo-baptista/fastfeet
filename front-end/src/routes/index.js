import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Route from './Route';

// pages
import SignIn from '~/pages/SignIn';
import Delivery from '~/pages/Delivery';
import CreateDelivery from '~/pages/Delivery/Create';
import EditDelivery from '~/pages/Delivery/Edit';

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route
        path="/encomendas/cadastrar"
        component={CreateDelivery}
        isPrivate
      />
      <Route path="/encomendas/:id/editar" component={EditDelivery} isPrivate />
      <Route path="/encomendas" component={Delivery} isPrivate />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}
