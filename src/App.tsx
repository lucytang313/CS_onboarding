import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainerRef } from '@react-navigation/native';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  ProfileForm: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const navigationRef = React.useRef<NavigationContainerRef<RootStackParamList>>(null);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      const currentRoute = navigationRef.current?.getCurrentRoute()?.name;

      if (currentRoute === 'Login' || currentRoute === 'Register') {
        navigationRef.current?.navigate('Home');
        return true;
      } else if (currentRoute === 'Home') {
        BackHandler.exitApp();
        return true;
      }
      return false;
    });

    return () => backHandler.remove();
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ 
            headerShown: false,
            gestureEnabled: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: 'horizontal'
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: 'horizontal'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;