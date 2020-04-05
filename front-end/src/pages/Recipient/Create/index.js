import React, { useRef } from 'react';
import { toast } from 'react-toastify';

import formatErrors from '~/utils/formatErrors';

import { RecipientForm } from '~/components/Forms';

import api from '~/services/api';
import history from '~/services/history';

import schema from '~/Validations/Recipient';

export default function Create() {
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      await schema.validate(data, { abortEarly: false });
      formRef.current.setErrors({});

      data.cep = data.cep.replace(/\D/, '');

      await api.post('/recipients', data);
      history.push('/destinatarios');
      toast.success('Destinatário criada com sucesso.');
    } catch (err) {
      const validationErrors = formatErrors(err);
      if (validationErrors) {
        formRef.current.setErrors(validationErrors);
        return;
      }
      toast.error('Não foi possível criar o Destinatário');
    }
  }

  return (
    <RecipientForm
      title="Cadastro de destinatários"
      backTo="/destinatarios"
      onSubmit={handleSubmit}
      ref={formRef}
    />
  );
}
