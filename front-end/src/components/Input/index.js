import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Container, Error } from './styles';

export default function Input({ label, name, ...rest }) {
  const inputRef = useRef(null);
  const { defaultValue, error, fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container error={error}>
      <label htmlFor={name}>{label}</label>
      <input ref={inputRef} id={name} defaultValue={defaultValue} {...rest} />
      {error && <Error>{error}</Error>}
    </Container>
  );
}
Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
