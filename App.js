import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScreen';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="homr">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home screen',
            headerTitle: 'Home',
          }}
        />
        <Stack.Screen
          name="Second"
          component={SecondScreen}
          options={{
            title: 'Second screen',
            headerTitle: 'Second',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
