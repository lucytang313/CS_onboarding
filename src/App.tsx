import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BackHandler } from 'react-native';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home'
import Navigation from './Navigation';


export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} // Hide header for Home screen
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={({ navigation }) => ({
            headerLeft: () => null, // Hide default back button
            gestureEnabled: false, // Disable swipe back gesture
          })}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={({ navigation }) => ({
            headerLeft: () => null, // Hide default back button
            gestureEnabled: false, // Disable swipe back gesture
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
//   const AppNavigator = () => {
//     useEffect(() => {
//         const backAction = () => {
//           BackHandler.exitApp(); // Exit the app when on the Home screen
//           return true; // Prevent default behavior
//         };
    
//         const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    
//         return () => backHandler.remove(); // Cleanup the event listener
//       }, []);
// return (
// <NavigationContainer>
//   <Stack.Navigator initialRouteName="Home">
//     <Stack.Screen
//       name="Home"
//       component={HomeScreen}
//       options={{ headerShown: false }}
//     />
//     <Stack.Screen
//       name="Login"
//       component={LoginScreen}
//       options={{ headerLeft: () => null }}
//     />
//     <Stack.Screen
//       name="Register"
//       component={RegisterScreen}
//       options={{ headerLeft: () => null }}
//     />
//   </Stack.Navigator>
// </NavigationContainer>
// );
// };
}

export default AppNavigator;