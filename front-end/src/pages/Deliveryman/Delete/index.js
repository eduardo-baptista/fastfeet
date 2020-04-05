import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import Modal from '~/components/Modal';
import DeletePageContent from '~/components/DeletePageContent';

import api from '~/services/api';
import history from '~/services/history';

import { getDataRequest } from '~/store/modules/deliveryman/actions';

export default function Delete() {
  const [deliveryman, setDeliveryman] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();

  async function handleDelete() {
    try {
      await api.delete(`/deliverymen/${id}`);
      history.push('/entregadores');
      dispatch(getDataRequest());
      toast.success('Entregador deletada com sucesso');
    } catch (err) {
      toast.error('Não foi possível deletar o entregador');
    }
  }

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`deliverymen/${id}`);
      setDeliveryman(response.data);
    }
    fetchData();
  }, [id]);

  return (
    <Modal backTo="/entregadores">
      <DeletePageContent backTo="/entregadores" onConfirm={handleDelete}>
        Confirma a exclusão do entregador <strong>{deliveryman.name}</strong>?
      </DeletePageContent>
    </Modal>
  );
}
