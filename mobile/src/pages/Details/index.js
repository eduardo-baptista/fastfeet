import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

export default function Details({ route }) {
  return (
    <View>
      <Text>{route.params.id}</Text>
    </View>
  );
}
