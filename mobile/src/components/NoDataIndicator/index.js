import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Text } from './styles';

export default function NoDataIndicator() {
  return (
    <Container>
      <Icon name="mood-bad" size={40} color="#7d40e7" />
      <Text>Ops, Não encontramos nada por aqui!</Text>
    </Container>
  );
}
