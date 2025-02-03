import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import Feather from 'react-native-vector-icons/Feather';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const RegisterScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log('Register:', formData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello!</Text>
      <Text style={styles.subtitle}>Register to get started</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#000000"
        value={formData.username}
        onChangeText={(text) => handleChange('username', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#000000"
        keyboardType="email-address"
        value={formData.email}
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
  <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
    <Feather name={showPassword ? 'eye-off' : 'eye'} size={20} color="gray" />
  </TouchableOpacity>
</View>

<View style={styles.passwordContainer}>
  <TextInput
    style={[styles.input, { flex: 1, color: '#000' }]} // Added flex: 1 and color
    placeholder="Confirm Password"
    placeholderTextColor="#000000"
    secureTextEntry={!showConfirmPassword}
    value={formData.confirmPassword}
    onChangeText={(text) => handleChange('confirmPassword', text)}
  />
  <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIcon}>
    <Feather name={showConfirmPassword ? 'eye-off' : 'eye'} size={20} color="gray" />
  </TouchableOpacity>
</View>
  {/* <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#000000"
          secureTextEntry={!showPassword}
          value={formData.password}
          onChangeText={(text) => handleChange('password', text)}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
          <Feather name={showPassword ? 'eye-off' : 'eye'} size={20} color="gray" />
        </TouchableOpacity>
      </View>

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password2"
          placeholderTextColor="#000000"
          secureTextEntry={!showConfirmPassword}
          value={formData.confirmPassword}
          onChangeText={(text) => handleChange('confirmPassword', text)}
        />
        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIcon}>
          <Feather name={showConfirmPassword ? 'eye-off' : 'eye'} size={20} color="gray" />
        </TouchableOpacity>
      </View> */}

      <TouchableOpacity style={styles.registerButton} onPress={handleSubmit}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}>Login</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E2956',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#312763',
    opacity: 0.8,
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
    paddingRight: 40
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  registerButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#4A00E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  registerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  loginText: {
    fontSize: 16,
    color: '#312763',
    opacity: 0.8,
  },
  loginLink: {
    color: '#4D1C77',
    fontWeight: 'bold',
  },
});

export default RegisterScreen;