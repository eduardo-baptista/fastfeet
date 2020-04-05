import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import Modal from '~/components/Modal';
import DeletePageContent from '~/components/DeletePageContent';

import api from '~/services/api';
import history from '~/services/history';

import { getDataRequest } from '~/store/modules/deliveryman/actions';

export default function Delete() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const problem = useSelector((state) =>
    state.problem.problems.find((i) => i.id === Number(id))
  );

  useEffect(() => {
    if (problem.delivery.status === 'CANCELADA') {
      history.push('/problemas');
      toast.error('A encomenda já está cancelada');
    }
  }, [problem.delivery.status]);

  async function handleDelete() {
    try {
      await api.delete(`/problem/${id}/cancel-delivery`);
      history.push('/problemas');
      dispatch(getDataRequest());
      toast.success('Encomenda cancelada com sucesso');
    } catch (err) {
      toast.error('Não foi possível cancelar a encomenda');
    }
  }

  return (
    <Modal backTo="/problemas">
      <DeletePageContent backTo="/problemas" onConfirm={handleDelete}>
        Confirma ao cancelamento da encomenda?
      </DeletePageContent>
    </Modal>
  );
}
