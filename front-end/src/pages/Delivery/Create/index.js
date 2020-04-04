import React, { useRef } from 'react';
import { toast } from 'react-toastify';

import { DeliveryForm } from '~/components/Forms';

import formatErrors from '~/utils/formatErrors';

import api from '~/services/api';
import history from '~/services/history';

import schema from '~/Validations/Delivery';

export default function Create() {
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      await schema.validate(data, { abortEarly: false });
      formRef.current.setErrors({});
      await api.post('/orders', data);
      history.push('/encomendas');
      toast.success('Enconmenda criada com sucesso.');
    } catch (err) {
      const validationErrors = formatErrors(err);
      if (validationErrors) {
        formRef.current.setErrors(validationErrors);
        return;
      }
      toast.error('Não foi possível criar a Encomenda');
    }
  }

  return (
    <DeliveryForm
      title="Cadastro de encomendas"
      backTo="/encomendas"
      onSubmit={handleSubmit}
      ref={formRef}
    />
  );
}
