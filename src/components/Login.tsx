

import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import Feather from 'react-native-vector-icons/Feather';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [showPassword, setshowPassword] = useState(false);
  const [formData, setformData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (name: string, value: string) => {
    setformData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back!</Text>
      <Text style={styles.subtitle}>Glad to see you, Again!</Text>

      <TextInput 
        style={[styles.input, {color: '#000'}]} // Added color
        placeholder="Enter your email" 
        placeholderTextColor="#000000" 
        keyboardType="email-address" 
        onChangeText={(text) => handleChange('email', text)} 
      />
      
<View style={styles.passwordContainer}>
  <TextInput
    style={[styles.input, { flex: 1, color: '#000' }]} // Added flex: 1 and color
    placeholder="Password"
    placeholderTextColor="#000000"
    secureTextEntry={!showPassword}
    value={formData.password}
    onChangeText={(text) => handleChange('password', text)}
  />
  <TouchableOpacity onPress={() => setshowPassword(!showPassword)} style={styles.eyeIcon}>
    <Feather name={showPassword ? 'eye-off' : 'eye'} size={20} color="gray" />
  </TouchableOpacity>
</View>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity> 

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerNow}> Register Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 15,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: 'blue',
    marginBottom: 20,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#4A00E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 16,
    marginVertical: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  icon: {
    marginHorizontal: 15,
  },
  registerText: {
    fontSize: 16,
    color: '#312763',
    opacity: 0.8,
  },
  registerNow: {
    color: '#4D1C77',
    fontWeight: 'bold',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
});

export default LoginScreen;

