import React, { useRef } from 'react';

import { DeliveryForm } from '~/components/Forms';

export default function Create() {
  const formRef = useRef(null);

  return (
    <DeliveryForm
      title="Cadastro de encomendas"
      backTo="/encomendas"
      ref={formRef}
    />
  );
}
