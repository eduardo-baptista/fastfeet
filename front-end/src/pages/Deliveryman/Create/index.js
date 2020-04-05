import React, { useRef } from 'react';
import { toast } from 'react-toastify';

import { DeliverymanForm } from '~/components/Forms';

import formatErrors from '~/utils/formatErrors';

import api from '~/services/api';
import history from '~/services/history';

import schema from '~/Validations/Deliveryman';

export default function Create() {
  const formRef = useRef(null);

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

      await api.post('/deliverymen', data);
      history.push('/entregadores');
      toast.success('Entregador criada com sucesso.');
    } catch (err) {
      const validationErrors = formatErrors(err);
      if (validationErrors) {
        formRef.current.setErrors(validationErrors);
        return;
      }
      toast.error('Não foi possível criar o Entregador');
    }
  }

  return (
    <DeliverymanForm
      title="Cadastro de entregadores"
      backTo="/entregadores"
      onSubmit={handleSubmit}
      ref={formRef}
    />
  );
}
