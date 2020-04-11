import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// pages
import SignIn from '~/pages/SignIn';

const Stack = createStackNavigator();

export default function createRouter(isSigned = false) {
  return !isSigned ? (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  ) : (
    <></>
  );
}
