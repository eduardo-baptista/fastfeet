import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import ContainerPage from '~/components/ContainerPage';
import ActionRow from '~/components/ActionRow';
import SearchInput from '~/components/SearchInput';
import { PrimaryButton } from '~/components/Buttons';
import Table from '~/components/Table';
import EmptyTableIndicator from '~/components/EmptyTableIndicator';

import history from '~/services/history';

import { getDataRequest } from '~/store/modules/delivery/actions';
// subpages
import Show from './Show';
import Delete from './Delete';

import DeliveryTableRow from './DeliveryTableRow';

export default function Delivery() {
  const deliveries = useSelector((store) => store.delivery.deliveries);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  const hasData = useMemo(() => deliveries.length > 0, [deliveries]);

  function handleCreateClickButton(e) {
    e.preventDefault();
    e.stopPropagation();
    history.push('/encomendas/cadastrar');
  }

  useEffect(() => {
    dispatch(getDataRequest(filter));
  }, [dispatch, filter]);

  return (
    <ContainerPage title="Gerenciando encomendas">
      <ActionRow>
        <SearchInput
          placeholder="Buscar por encomendas"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />

        <PrimaryButton type="button" onClick={handleCreateClickButton}>
          <MdAdd size={22} />
          CADASTRAR
        </PrimaryButton>
      </ActionRow>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map((delivery) => (
            <DeliveryTableRow delivery={delivery} key={delivery.id} />
          ))}
        </tbody>
      </Table>
      {!hasData && <EmptyTableIndicator />}
      <Route path="/encomendas/:id/visualizar" component={Show} />
      <Route path="/encomendas/:id/excluir" component={Delete} />
    </ContainerPage>
  );
}
