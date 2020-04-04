import React from 'react';
import PropTypes from 'prop-types';

import Form from '~/components/Form';
import Row from '~/components/Row';
import Input from '~/components/Input';
import Select from '~/components/Select';

import api from '~/services/api';

const DeliveryForm = React.forwardRef(({ title, backTo, ...rest }, ref) => {
  async function fetchRecipients(filter) {
    const { data } = await api.get('/recipients', {
      params: { q: filter },
    });

    return data.map((recipient) => ({
      value: recipient.id,
      label: recipient.name,
    }));
  }
  const promiseRecipients = (inputValue) => fetchRecipients(inputValue);

  async function fetchDeliverymen(filter) {
    const { data } = await api.get('/deliverymen', {
      params: { q: filter },
    });

    return data.map((deliverman) => ({
      value: deliverman.id,
      label: deliverman.name,
    }));
  }
  const promiseDeliverymen = (inputValue) => fetchDeliverymen(inputValue);

  return (
    <Form title={title} backTo={backTo} ref={ref} {...rest}>
      <Row template="1fr 1fr">
        <Select
          name="recipient_id"
          label="Destinatário"
          defaultOptions
          placeholder="Ludwig van Beethoven"
          loadOptions={promiseRecipients}
        />
        <Select
          name="deliveryman_id"
          label="Entregador"
          defaultOptions
          placeholder="John Doe"
          loadOptions={promiseDeliverymen}
        />
      </Row>
      <Row>
        <Input
          label="Nome do produto"
          name="product"
          placeholder="Yamaha SX7"
        />
      </Row>
    </Form>
  );
});

DeliveryForm.propTypes = {
  title: PropTypes.string.isRequired,
  backTo: PropTypes.string.isRequired,
};

export default DeliveryForm;
