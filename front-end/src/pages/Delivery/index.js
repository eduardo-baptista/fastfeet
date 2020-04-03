import React, { useEffect, useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';

import ContainerPage from '~/components/ContainerPage';
import ActionRow from '~/components/ActionRow';
import SearchInput from '~/components/SearchInput';
import { PrimaryButton } from '~/components/Buttons';
import Table from '~/components/Table';

import api from '~/services/api';

import DeliveryTableRow from './DeliveryTableRow';

export default function Delivery() {
  const [deliveries, setDeliveries] = useState([]);

  const formatData = useCallback((deliveriesToFormat) => {
    return deliveriesToFormat.map((delivery) => {
      delivery.status = delivery.status.toUpperCase();
      return delivery;
    });
  }, []);

  const fetchData = useCallback(async () => {
    const { data } = await api.get('/orders');
    setDeliveries(formatData(data));
  }, [formatData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <ContainerPage title="Gerenciando encomendas">
      <ActionRow>
        <SearchInput placeholder="Buscar por encomendas" />

        <PrimaryButton type="button">
          <MdAdd size={22} />
          CADASTRAR
        </PrimaryButton>
      </ActionRow>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
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
            <DeliveryTableRow delivery={delivery} />
          ))}
        </tbody>
      </Table>
    </ContainerPage>
  );
}
