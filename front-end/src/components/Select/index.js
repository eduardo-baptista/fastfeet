import React, { useRef, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Container, Error } from './styles';

export default function Select({ label, name, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'select.state.value',
      getValue: (ref) => {
        if (rest.isMulti) {
          if (!ref.select.state.value) {
            return [];
          }
          return ref.select.state.value.map((option) => option.value);
        }

        if (!ref.select.state.value) {
          return '';
        }

        return ref.select.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <Container error={error}>
      <label htmlFor={name}>{label}</label>
      <AsyncSelect
        cacheOptions
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
        id={name}
        {...rest}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
