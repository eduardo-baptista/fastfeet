import React from 'react';
import PropTypes from 'prop-types';

import Form from '~/components/Form';
import Row from '~/components/Row';
import Input from '~/components/Input';

import FileInput from '~/components/FileInput';

const DeliverymanForm = React.forwardRef(({ title, backTo, ...rest }, ref) => {
  return (
    <Form title={title} backTo={backTo} ref={ref} {...rest}>
      <FileInput name="uploaded_file" />
      <Row>
        <Input label="Nome" name="name" placeholder="John Doe" />
      </Row>
      <Row>
        <Input label="Email" name="email" placeholder="example@fastfeet.com" />
      </Row>
    </Form>
  );
});

DeliverymanForm.propTypes = {
  title: PropTypes.string.isRequired,
  backTo: PropTypes.string.isRequired,
};

export default DeliverymanForm;
