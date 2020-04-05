import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Route from './Route';

// pages
import SignIn from '~/pages/SignIn';
import Delivery from '~/pages/Delivery';
import CreateDelivery from '~/pages/Delivery/Create';
import EditDelivery from '~/pages/Delivery/Edit';
import Deliveryman from '~/pages/Deliveryman';
import CreateDeliveryman from '~/pages/Deliveryman/Create';
import EditDeliveryman from '~/pages/Deliveryman/Edit';

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

      <Route
        path="/entregadores/cadastrar"
        component={CreateDeliveryman}
        isPrivate
      />
      <Route
        path="/entregadores/:id/editar"
        component={EditDeliveryman}
        isPrivate
      />
      <Route path="/entregadores" component={Deliveryman} isPrivate />

      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}
