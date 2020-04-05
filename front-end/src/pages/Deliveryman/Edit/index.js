import React, { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { toast } from 'react-toastify';

import { DeliverymanForm } from '~/components/Forms';

import formatErrors from '~/utils/formatErrors';

import api from '~/services/api';
import history from '~/services/history';

import schema from '~/Validations/Deliveryman';

export default function Edit() {
  const formRef = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(`deliverymen/${id}`);

      if (data.avatar) {
        data.uploaded_file = `${process.env.REACT_APP_API}/files/${data.avatar?.path}`;
      }
      formRef.current.setData(data);
    }
    fetchData();
  }, [id]);

  async function handleSubmit(data) {
    try {
      await schema.validate(data, { abortEarly: false });
      formRef.current.setErrors({});

      if (data.uploaded_file) {
        const formData = new FormData();
        formData.append('file', data.uploaded_file);
        const response = await api.post('/files', formData);

        data.avatar_id = response.data.id;
        data.uploaded_file = null;
      }

      await api.put(`/deliverymen/${id}`, data);
      history.push('/entregadores');
      toast.success('Entregador editador com sucesso.');
    } catch (err) {
      const validationErrors = formatErrors(err);
      if (validationErrors) {
        formRef.current.setErrors(validationErrors);
        return;
      }
      toast.error('Não foi possível editar o Entregador');
    }
  }

  return (
    <DeliverymanForm
      title="Edição de entregadores"
      backTo="/entregadores"
      onSubmit={handleSubmit}
      ref={formRef}
    />
  );
}
