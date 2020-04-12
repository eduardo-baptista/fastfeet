import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export default function LoadIndicator() {
  return (
    <View>
      <ActivityIndicator size="large" color="#7d40e7" />
    </View>
  );
}
