import React, { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { DeliveryForm } from '~/components/Forms';

import formatErrors from '~/utils/formatErrors';

import api from '~/services/api';
import history from '~/services/history';

import schema from '~/Validations/Delivery';

export default function Edit() {
  const formRef = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const { data } = await api.get(`orders/${id}`);
      formRef.current.setData(data);
      formRef.current.setFieldValue('recipient_id', {
        value: data.recipient.id,
        label: data.recipient.name,
      });
      formRef.current.setFieldValue('deliveryman_id', {
        value: data.deliveryman.id,
        label: data.deliveryman.name,
      });
    }
    fetchData();
  }, [id]);

  async function handleSubmit(data) {
    try {
      await schema.validate(data, { abortEarly: false });
      formRef.current.setErrors({});
      await api.put(`/orders/${id}`, data);
      history.push('/encomendas');
      toast.success('Enconmenda editada com sucesso.');
    } catch (err) {
      const validationErrors = formatErrors(err);
      if (validationErrors) {
        formRef.current.setErrors(validationErrors);
        return;
      }
      toast.error('Não foi possível editar a Encomenda');
    }
  }

  return (
    <DeliveryForm
      title="Ediçào de encomendas"
      backTo="/encomendas"
      onSubmit={handleSubmit}
      ref={formRef}
    />
  );
}
