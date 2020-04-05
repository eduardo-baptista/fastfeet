import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import Modal from '~/components/Modal';
import DeletePageContent from '~/components/DeletePageContent';

import api from '~/services/api';
import history from '~/services/history';

import { getDataRequest } from '~/store/modules/recipient/actions';

export default function Delete() {
  const [recipient, setRecipient] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();

  async function handleDelete() {
    try {
      await api.delete(`/recipients/${id}`);
      history.push('/destinatarios');
      dispatch(getDataRequest());
      toast.success('Destinatário deletado com sucesso');
    } catch (err) {
      toast.error('Não foi possível deletar o destinatário');
    }
  }

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`recipients/${id}`);
      setRecipient(response.data);
    }
    fetchData();
  }, [id]);

  return (
    <Modal backTo="/destinatarios">
      <DeletePageContent backTo="/destinatarios" onConfirm={handleDelete}>
        Confirma a exclusão do destinatário <strong>{recipient.name}</strong>?
        <br />
        <br />
        <strong>Obs:</strong> A exclusão do destinatário ira acarretar na
        exclusão de suas respectivas encomendas
      </DeletePageContent>
    </Modal>
  );
}
