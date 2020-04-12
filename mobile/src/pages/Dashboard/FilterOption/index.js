import React from 'react';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function FilterOption({ isActive, children, ...rest }) {
  return (
    <Container isActive={isActive} {...rest}>
      <Text isActive={isActive}>{children}</Text>
    </Container>
  );
}

FilterOption.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

FilterOption.defaultProps = {
  isActive: false,
};
