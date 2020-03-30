import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Input({ label, placeholder, ...rest }) {
  return (
    <Container>
      <label htmlFor="te">{label}</label>
      <input type="text" id="te" placeholder={placeholder} {...rest} />
    </Container>
  );
}
Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
};
