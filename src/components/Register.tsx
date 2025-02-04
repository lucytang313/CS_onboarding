//First Iteration(Better one)


// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { useNavigation } from '@react-navigation/native';
// import { RootStackParamList } from '../App';
// import Feather from 'react-native-vector-icons/Feather';
// import LinearGradient from 'react-native-linear-gradient';

// type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

// const RegisterScreen = () => {
//   const navigation = useNavigation<LoginScreenNavigationProp>();
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleChange = (name: string, value: string) => {
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = () => {
//     console.log('Register:', formData);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome to CareSanctum</Text>
//       <Text style={styles.subtitle}>Register to get started</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Name"
//         placeholderTextColor="#000000"
//         value={formData.name}
//         onChangeText={(text) => handleChange('name', text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         placeholderTextColor="#000000"
//         keyboardType="email-address"
//         value={formData.email}
//         onChangeText={(text) => handleChange('email', text)}
//       />

// <View style={styles.passwordContainer}>
//   <TextInput
//     style={[styles.input, { flex: 1, color: '#000' }]} // Added flex: 1 and color
//     placeholder="Password"
//     placeholderTextColor="#000000"
//     secureTextEntry={!showPassword}
//     value={formData.password}
//     onChangeText={(text) => handleChange('password', text)}
//   />
//   <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
//     <Feather name={showPassword ? 'eye-off' : 'eye'} size={20} color="gray" />
//   </TouchableOpacity>
// </View>

// <View style={styles.passwordContainer}>
//   <TextInput
//     style={[styles.input, { flex: 1, color: '#000' }]} // Added flex: 1 and color
//     placeholder="Confirm Password"
//     placeholderTextColor="#000000"
//     secureTextEntry={!showConfirmPassword}
//     value={formData.confirmPassword}
//     onChangeText={(text) => handleChange('confirmPassword', text)}
//   />
//   <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIcon}>
//     <Feather name={showConfirmPassword ? 'eye-off' : 'eye'} size={20} color="gray" />
//   </TouchableOpacity>
// </View>
//   {/* <View style={styles.passwordContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           placeholderTextColor="#000000"
//           secureTextEntry={!showPassword}
//           value={formData.password}
//           onChangeText={(text) => handleChange('password', text)}
//         />
//         <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
//           <Feather name={showPassword ? 'eye-off' : 'eye'} size={20} color="gray" />
//         </TouchableOpacity>
//       </View>

//       <View style={styles.passwordContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Confirm Password2"
//           placeholderTextColor="#000000"
//           secureTextEntry={!showConfirmPassword}
//           value={formData.confirmPassword}
//           onChangeText={(text) => handleChange('confirmPassword', text)}
//         />
//         <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.eyeIcon}>
//           <Feather name={showConfirmPassword ? 'eye-off' : 'eye'} size={20} color="gray" />
//         </TouchableOpacity>
//       </View> */}

//       <TouchableOpacity onPress={handleSubmit}>
//         <LinearGradient 
//         colors={['#1D2855', '#292A5E', '#461E71', '#6A108A']}
//         start={{ x: 0, y: 0 }} // Gradient starts from the left
//         end={{ x: 1, y: 0 }}
//         style={styles.registerButton}
//         >
//           <Text style={styles.registerText}>Register</Text>
//         </LinearGradient>
//       </TouchableOpacity>

//       <View style={styles.loginContainer}>
//         <Text style={styles.loginText}>Don't have an account? </Text>
//         <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//           <Text style={styles.loginLink}>Login</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#4D1C77',
//     marginBottom: 5,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#4D1C77',
//     opacity: 0.8,
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 10,
//     paddingLeft: 15,
//     marginBottom: 15,
//     paddingRight: 40
//   },
//   passwordContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '100%',
//     position: 'relative',
//   },
//   eyeIcon: {
//     position: 'absolute',
//     right: 10,
//     top: 15,
//   },
//   registerButton: {
//     width: 300,
//     height: 55,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//     padding: 15,
//     borderRadius: 10,
//   },
//   registerText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   loginContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   loginText: {
//     fontSize: 16,
//     color: '#312763',
//     opacity: 0.8,
//   },
//   loginLink: {
//     color: '#4D1C77',
//     fontWeight: 'bold',
//   },
// });

// export default RegisterScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

// Import the logo

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const RegisterScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    PhoneNumber: '',
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
      <LinearGradient
        colors={['#9932CC', '#DDA0DD', '#FFFFFF']}
        style={styles.topGradient}
        start={{ x: 0.7, y: 0 }}
        end={{ x: 0.3, y: 1 }}
        locations={[ 0, 0.22, 0.5]}
      />

      <View style={styles.logoContainer}>
        <Image 
          source={require("../Assets/CS_logowithouttext.png")} 
          style={styles.logo} 
          resizeMode="contain" 
        />
      </View>

      <View style={styles.registerContainer}>
        <Text style={styles.title}>Welcome to CareSanctum</Text>
        <Text style={styles.subtitle}>Register to get started</Text>

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#000000"
          value={formData.PhoneNumber}
          keyboardType='phone-pad'
          onChangeText={(text) => handleChange('PhoneNumber', text)}
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
            style={[styles.input, { flex: 1, color: '#000' }]}
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
            style={[styles.input, { flex: 1, color: '#000' }]}
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

        <TouchableOpacity onPress={handleSubmit}>
          <LinearGradient 
            colors={['#1D2855', '#292A5E', '#461E71', '#6A108A']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.registerButton}
          >
            <Text style={styles.registerText}>Register</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      <LinearGradient
        colors={['#9932CC', '#DDA0DD', '#FFFFFF']}
        style={styles.bottomGradient}
        start={{ x: 0.3, y: 1 }}
        end={{ x: 0.7, y: 0 }}
        locations={[ 0, 0.22, 0.5]} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor:'#fff'
  },
  topGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '30%',
  },
  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%',
  },
  logoContainer: {
    position: 'absolute',
    top: 50,
    left: 20,
    width: 60,
    height: 60,
    zIndex: 1,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  registerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    zIndex: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4D1C77',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#4D1C77',
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
    paddingRight: 40,
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