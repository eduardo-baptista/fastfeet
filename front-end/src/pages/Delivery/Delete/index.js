import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import Modal from '~/components/Modal';
import DeletePageContent from '~/components/DeletePageContent';

import api from '~/services/api';
import history from '~/services/history';

import { getDataRequest } from '~/store/modules/delivery/actions';

export default function Delete() {
  const [delivery, setDelivery] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();

  async function handleDelete() {
    try {
      await api.delete(`/orders/${id}`);
      history.push('/encomendas');
      dispatch(getDataRequest());
      toast.success('Encomenda deletada com sucesso');
    } catch (err) {
      toast.error('Não foi possível deletar a encomenda');
    }
  }

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`orders/${id}`);
      setDelivery(response.data);
    }
    fetchData();
  }, [id]);

  return (
    <Modal backTo="/encomendas">
      <DeletePageContent backTo="/encomendas" onConfirm={handleDelete}>
        Confirma a exclusão da Encomenda referente ao produto{' '}
        <strong>{delivery.product}</strong> com destino à{' '}
        <strong>
          {delivery.recipient?.street} - {delivery.recipient?.city}/
          {delivery.recipient?.state}
        </strong>{' '}
        ?
      </DeletePageContent>
    </Modal>
  );
}
