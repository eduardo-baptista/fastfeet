import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title } from './styles';

export default function ContainerPage({ title, children }) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}

ContainerPage.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.any),
  ]).isRequired,
};
