import React from 'react';
import { View, Text, StatusBar } from 'react-native';

// import { Container } from './styles';

export default function Dashboard() {
  return (
    <>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <View>
        <Text>Dashboard</Text>
      </View>
    </>
  );
}
