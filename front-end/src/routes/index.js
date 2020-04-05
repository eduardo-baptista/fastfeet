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
import Recipient from '~/pages/Recipient';
import CreateRecipient from '~/pages/Recipient/Create';
import EditRecipient from '~/pages/Recipient/Edit';
import Problem from '~/pages/Problem';

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

      <Route
        path="/destinatarios/cadastrar"
        component={CreateRecipient}
        isPrivate
      />
      <Route
        path="/destinatarios/:id/editar"
        component={EditRecipient}
        isPrivate
      />
      <Route path="/destinatarios" component={Recipient} isPrivate />

      <Route path="/problemas" component={Problem} isPrivate />

      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}
