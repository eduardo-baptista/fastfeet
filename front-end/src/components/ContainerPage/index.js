import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title } from './styles';

export default function ContainerPage({ maxWidth, title, children }) {
  return (
    <Container maxWidth={maxWidth}>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}

ContainerPage.propTypes = {
  maxWidth: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

ContainerPage.defaultProps = {
  maxWidth: '1200px',
};
