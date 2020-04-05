import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactInputMask from 'react-input-mask';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

export default function MaskInput({ label, name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref, value) {
        ref.setInputValue(value);
      },
      clearValue(ref) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container error={error}>
      <label htmlFor={name}>{label}</label>
      <ReactInputMask
        ref={inputRef}
        id={name}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}

MaskInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
