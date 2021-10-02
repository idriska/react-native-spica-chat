import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SpashScreen from '../scenes/splash';
import WelcomeScreen from '../scenes/welcome';
import RegisterScreen from '../scenes/register';
import HomeScreen from '../scenes/home';
import TabNavigator from './tab-navigator';

const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="TabNavigator"
                lazy={false}
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="Splash" component={SpashScreen} />
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Regsiter" component={RegisterScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="TabNavigator" component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigation;