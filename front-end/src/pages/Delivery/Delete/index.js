import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Modal from '~/components/Modal';

import api from '~/services/api';

import { Text } from './styles';

export default function Delete() {
  const [delivery, setDelivery] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`orders/${id}`);
      setDelivery(response.data);
    }
    fetchData();
  }, [id]);

  return (
    <Modal backTo="/encomendas">
      <Text>
        Confirma a exclusão da Encomenda referente ao produto{' '}
        <strong>{delivery.product}</strong> com destino à{' '}
        <strong>
          {delivery.recipient?.street} - {delivery.recipient?.city}/
          {delivery.recipient?.state}
        </strong>{' '}
        ?
      </Text>
    </Modal>
  );
}
