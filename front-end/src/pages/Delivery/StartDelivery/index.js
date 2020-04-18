import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import Modal from '~/components/Modal';
import { PrimaryButton, SecondaryButton } from '~/components/Buttons';
import { ButtonRow, Text } from './styles';

import api from '~/services/api';
import history from '~/services/history';

import { getDataRequest } from '~/store/modules/delivery/actions';

export default function StartDelivery() {
  const { id } = useParams();
  const [delivery, setDelivery] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(`orders/${id}`);
      setDelivery(data);
    }
    fetchData();
  }, [id]);

  function backToDelivery() {
    history.push('/encomendas');
  }

  async function handleStartDelivery() {
    try {
      await api.post('deliveries/start', {
        delivery_id: id,
      });
      backToDelivery();
      toast.success('Entrega inciada com sucesso.');
      dispatch(getDataRequest());
    } catch (err) {
      toast.error('Não foi possível iniciar a entrega');
    }
  }

  return (
    <Modal backTo="/encomendas">
      <Text>
        Confirmar que o entregador <strong>{delivery.deliveryman?.name}</strong>{' '}
        retirou a encomenda para entrega?
      </Text>
      <ButtonRow>
        <SecondaryButton type="button" onClick={backToDelivery}>
          VOLTAR
        </SecondaryButton>
        <PrimaryButton type="button" onClick={handleStartDelivery}>
          CONFIRMAR
        </PrimaryButton>
      </ButtonRow>
    </Modal>
  );
}
