import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Route } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';

import ContainerPage from '~/components/ContainerPage';
import ActionRow from '~/components/ActionRow';
import SearchInput from '~/components/SearchInput';
import { PrimaryButton } from '~/components/Buttons';
import Table from '~/components/Table';
import EmptyTableIndicator from '~/components/EmptyTableIndicator';

import api from '~/services/api';

import formatId from '~/utils/formatId';

// subpages
import Show from './Show';

import DeliveryTableRow from './DeliveryTableRow';

export default function Delivery() {
  const [deliveries, setDeliveries] = useState([]);
  const [filter, setFilter] = useState('');
  const hasData = useMemo(() => deliveries.length > 0, [deliveries]);

  const formatData = useCallback((deliveriesToFormat) => {
    return deliveriesToFormat.map((delivery) => {
      delivery.status = delivery.status.toUpperCase();
      delivery.maskedId = formatId(delivery.id);
      return delivery;
    });
  }, []);

  const fetchData = useCallback(async () => {
    const { data } = await api.get('/orders', { params: { q: filter } });
    setDeliveries(formatData(data));
  }, [formatData, filter]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <ContainerPage title="Gerenciando encomendas">
      <ActionRow>
        <SearchInput
          placeholder="Buscar por encomendas"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />

        <PrimaryButton type="button">
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
    </ContainerPage>
  );
}
