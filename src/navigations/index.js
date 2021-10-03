import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './tab-navigator';
import SpashScreen from '../scenes/splash';
import WelcomeScreen from '../scenes/welcome';
import RegisterScreen from '../scenes/register';
import CreateChatScreen from '../scenes/create-chat';

import {Colors} from '../styles';

const Stack = createStackNavigator();

let headerOption = {
  headerShown: true,
  headerStyle: {
    backgroundColor: Colors.PRIMARY,
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: '500',
  },
//   headerTitleAlign: 'center',
};

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TabNavigator"
        lazy={false}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={SpashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Regsiter" component={RegisterScreen} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen
          name="CreateChat"
          component={CreateChatScreen}
          options={{
            title: 'Yeni Sohbet',
            ...headerOption,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
