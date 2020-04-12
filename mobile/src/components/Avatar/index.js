import React from 'react';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function Avatar({ size }) {
  return (
    <Container size={size}>
      <Text>GA</Text>
    </Container>
  );
}

Avatar.propTypes = {
  size: PropTypes.number.isRequired,
};
