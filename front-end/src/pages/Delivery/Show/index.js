import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

import Modal from '~/components/Modal';

import api from '~/services/api';

import { Title, Section } from './styles';

export default function Show() {
  const [delivery, setDelivery] = useState({});
  const { id } = useParams();

  const formatData = useCallback((deliveryToFormat) => {
    deliveryToFormat.recipient.cep = deliveryToFormat.recipient.cep.replace(
      /(\d{5})(\d{3})/,
      '$1-$2'
    );
    if (deliveryToFormat.start_date) {
      deliveryToFormat.start_date = format(
        parseISO(deliveryToFormat.start_date),
        'dd/MM/yyyy'
      );
    }

    if (deliveryToFormat.end_date) {
      deliveryToFormat.end_date = format(
        parseISO(deliveryToFormat.end_date),
        'dd/MM/yyyy'
      );
    }

    return deliveryToFormat;
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await api.get(`orders/${id}`);
      setDelivery(formatData(response.data));
    }

    fetchData();
  }, [id, formatData]);

  return (
    <Modal backTo="/encomendas">
      <Section>
        <Title>Informações da encomenda</Title>
        <span>{`${delivery.recipient?.street}, ${delivery.recipient?.number}`}</span>
        <span>{`${delivery.recipient?.city}, ${delivery.recipient?.state}`}</span>
        <span>{delivery.recipient?.cep}</span>
      </Section>
      <Section>
        <Title>Datas</Title>
        <span>
          <strong>Retirada:</strong>
          {delivery.start_date}
        </span>
        <span>
          <strong>Entrega:</strong>
          {delivery.end_date}
        </span>
      </Section>
      <Section>
        <Title>Assinatura do destinatário</Title>
        {delivery.signature && (
          <img
            src={`${process.env.REACT_APP_API}/files/${delivery.signature?.path}`}
            alt="signature"
          />
        )}
      </Section>
    </Modal>
  );
}
