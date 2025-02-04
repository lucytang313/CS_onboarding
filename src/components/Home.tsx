import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Pressable } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import LinearGradient from 'react-native-linear-gradient';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[ '#9932CC', '#DDA0DD', '#FFFFFF']}
        style={styles.gradientContainer}
        start={{ x: 0.7, y: 0 }}
        end={{ x: 0.3, y: 1 }}
        locations={[ 0, 0.22, 0.5]}
      >
      <View style={styles.logoContainer}>
        <Image
          source={require('../Assets/CS_logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      </LinearGradient>

      <LinearGradient
        colors={[ '#9932CC', '#DDA0DD', '#FFFFFF']}
        style={styles.gradientContainer}
        start={{ x: 0.3, y: 1 }}
        end={{ x: 0.7, y: 0 }}
        locations={[ 0, 0.22, 0.5]}
      >
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <LinearGradient
              colors={['#1D2855', '#292A5E', '#461E71', '#6A108A']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.registerButton}
            >
              <Text style={styles.registerText}>Register</Text>
            </LinearGradient>
          </TouchableOpacity>

          <Pressable >
            <Text style={styles.guestText}>Continue as a Guest</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    margin: 100,
    alignItems: 'center',
  },
  logo: {
    margin: 170,
    width: 400,
    height: 100,
  },
  gradientContainer: {
    flex: 1,
  },
  bottomContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  loginButton: {
    width: 300,
    height: 50,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderEndColor: '#4D1C77',
    borderWidth: 1,
    marginBottom: 15,
  },
  loginText: {
    color: '#4D1C77',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerButton: {
    width: 300,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
  },
  registerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  guestText: {
    color: '#4D1C77',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});

export default HomeScreen;