import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, TitleContainer, Title } from './styles';

export default function Card({ icon, title, children, ...rest }) {
  return (
    <Container {...rest}>
      <TitleContainer>
        <Icon name={icon} size={24} color="#7d40e7" />
        <Title>{title}</Title>
      </TitleContainer>
      {children}
    </Container>
  );
}

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
    .isRequired,
};
