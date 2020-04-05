import React from 'react';
import PropTypes from 'prop-types';

import Form from '~/components/Form';
import Row from '~/components/Row';
import Input from '~/components/Input';
import MaskInput from '~/components/MaskInput';

const RecipientForm = React.forwardRef(({ title, backTo, ...rest }, ref) => {
  return (
    <Form title={title} backTo={backTo} ref={ref} {...rest}>
      <Row>
        <Input label="Nome" name="name" placeholder="Ludwig van Beethoven" />
      </Row>
      <Row gap="15px" template="2fr 1fr 1fr">
        <Input label="Rua" name="street" placeholder="Rua Beethoven" />
        <Input label="Número" name="number" placeholder="1729" type="number" />
        <Input label="Complemento" name="complement" />
      </Row>
      <Row gap="15px" template="1fr 1fr 1fr">
        <Input label="Cidade" name="city" placeholder="Diadema" />
        <Input label="Estado" name="state" placeholder="São Paulo" />
        <MaskInput
          label="CEP"
          name="cep"
          mask="99999-999"
          placeholder="09960-580"
        />
      </Row>
    </Form>
  );
});

RecipientForm.propTypes = {
  title: PropTypes.string.isRequired,
  backTo: PropTypes.string.isRequired,
};

export default RecipientForm;
