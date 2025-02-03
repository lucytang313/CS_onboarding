import React, { useEffect } from 'react';
import { BackHandler, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/Home';
import LoginScreen from './components/Login';
import RegisterScreen from './components/Register';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const AppNavigator = () => {
        useEffect(() => {
            const backAction = () => {
              BackHandler.exitApp(); // Exit the app when on the Home screen
              return true; // Prevent default behavior
            };
        
            const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
        
            return () => backHandler.remove(); // Cleanup the event listener
          }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerLeft: () => null }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerLeft: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}

export default Navigation;