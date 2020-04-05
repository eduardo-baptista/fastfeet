import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from './styles';

import history from '~/services/history';

export default function Modal({ children, backTo }) {
  function handleClose(e) {
    e.preventDefault();
    e.stopPropagation();
    return history.push(backTo);
  }

  return (
    <Container onClick={handleClose}>
      <Content onClick={(e) => e.stopPropagation()}>{children}</Content>
    </Container>
  );
}

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.any]),
  backTo: PropTypes.string.isRequired,
};

Modal.defaultProps = {
  children: null,
};
