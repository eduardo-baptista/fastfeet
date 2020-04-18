/* eslint-disable react/prop-types */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

// pages
import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import Details from '~/pages/Details';
import CreateProblem from '~/pages/CreateProblem';
import ShowProblems from '~/pages/ShowProblems';
import ConfirmDelivery from '~/pages/ConfirmDelivery';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function DeliveryRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 16,
        },
        headerLeftContainerStyle: {
          marginLeft: 16,
        },
        headerTintColor: '#ffffff',
        headerTransparent: true,
        gestureDirection: 'vertical-inverted',
      }}
      initialRouteName="Dashboard"
    >
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: 'Detalhes da encomenda',
          headerLeft: ({ onPress }) => (
            <TouchableOpacity onPress={onPress}>
              <Icon name="chevron-left" size={24} color="#ffffff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="CreateProblem"
        component={CreateProblem}
        options={{
          title: 'Informar problema',
          headerLeft: ({ onPress }) => (
            <TouchableOpacity onPress={onPress}>
              <Icon name="chevron-left" size={24} color="#ffffff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ShowProblems"
        component={ShowProblems}
        options={{
          title: 'Visualizar problemas',
          headerLeft: ({ onPress }) => (
            <TouchableOpacity onPress={onPress}>
              <Icon name="chevron-left" size={24} color="#ffffff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ConfirmDelivery"
        component={ConfirmDelivery}
        options={{
          title: 'Confirmar entrega',
          headerLeft: ({ onPress }) => (
            <TouchableOpacity onPress={onPress}>
              <Icon name="chevron-left" size={24} color="#ffffff" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default function createRouter(isSigned = false) {
  return !isSigned ? (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  ) : (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: '#7d40e7',
        inactiveTintColor: '#999999',
        keyboardHidesTabBar: true,
        style: {
          backgroundColor: '#ffffff',
          height: 70,
          paddingBottom: 12.5,
          paddingTop: 16,
        },
      }}
    >
      <Tabs.Screen
        name="Dashboard"
        component={DeliveryRoutes}
        options={{
          tabBarLabel: 'Entregas',
          tabBarIcon: ({ color }) => (
            <Icon name="reorder" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Meu Perfil',
          unmountOnBlur: true,
          tabBarIcon: ({ color }) => (
            <Icon name="account-circle" size={24} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
