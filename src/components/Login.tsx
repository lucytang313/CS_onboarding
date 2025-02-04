
//First Iteration (Better one)

// import React, {useState} from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack'
// import { useNavigation } from '@react-navigation/native';
// import { RootStackParamList } from '../App';
// import Feather from 'react-native-vector-icons/Feather';
// import LinearGradient from 'react-native-linear-gradient';

// type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

// const LoginScreen = () => {
//   const navigation = useNavigation<LoginScreenNavigationProp>();
//   const [showPassword, setshowPassword] = useState(false);
//   const [formData, setformData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (name: string, value: string) => {
//     setformData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome back!</Text>
//       <Text style={styles.subtitle}>Glad to see you, Again!</Text>

//       <TextInput 
//         style={[styles.input, {color: '#000'}]} // Added color
//         placeholder="Enter your email" 
//         placeholderTextColor="#000000" 
//         keyboardType="email-address" 
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
//   <TouchableOpacity onPress={() => setshowPassword(!showPassword)} style={styles.eyeIcon}>
//     <Feather name={showPassword ? 'eye-off' : 'eye'} size={20} color="gray" />
//   </TouchableOpacity>
// </View>

//       <TouchableOpacity>
//         <Text style={styles.forgotPassword}>Forgot Password?</Text>
//       </TouchableOpacity>

//       <TouchableOpacity>
//         <LinearGradient 
//         colors={['#1D2855', '#292A5E', '#461E71', '#6A108A']}
//         start={{ x: 0, y: 0 }} // Gradient starts from the left
//         end={{ x: 1, y: 0 }}
//         style={styles.loginButton}
//         >
//           <Text style={styles.loginText}>Login</Text>
//         </LinearGradient>
//       </TouchableOpacity> 

//       <View style={styles.registerContainer}>
//         <Text style={styles.registerText}>Don't have an account?</Text>
//         <TouchableOpacity onPress={() => navigation.navigate('Register')}>
//           <Text style={styles.registerNow}> Register Now</Text>
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
//   registerContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   passwordContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     width: '100%',
//     position: 'relative',
//   },
//   title: {
//     fontSize: 24,
//     color: '#4D1C77',
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: '#4D1C77',
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
//   },
//   forgotPassword: {
//     alignSelf: 'flex-end',
//     color: '#4D1C77',
//     marginBottom: 20,
//   },
//   loginButton: {
//     width: 300,
//     height: 55,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//     padding: 15,
//     borderRadius: 10,
//   },
//   loginText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   orText: {
//     fontSize: 16,
//     marginVertical: 10,
//   },
//   socialIcons: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginVertical: 10,
//   },
//   icon: {
//     marginHorizontal: 15,
//   },
//   registerText: {
//     fontSize: 16,
//     color: '#312763',
//     opacity: 0.8,
//   },
//   registerNow: {
//     color: '#4D1C77',
//     fontWeight: 'bold',
//   },
//   eyeIcon: {
//     position: 'absolute',
//     right: 10,
//     top: 15,
//   },
// });

// export default LoginScreen;



import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

// Import the logo

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
      <LinearGradient
        colors={['#9932CC', '#DDA0DD', '#FFFFFF']}
        style={styles.topGradient}
        start={{ x: 0.7, y: 0 }}
        end={{ x: 0.3, y: 1 }}
        locations={[ 0, 0.22, 0.5]} 
      />
      
      <View style={styles.logoContainer}>
        <Image 
          source={require('../Assets/CS_logowithouttext.png')} 
          style={styles.logo} 
          resizeMode="contain" 
        />
      </View>
      
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Welcome back!</Text>
        <Text style={styles.subtitle}>Glad to see you, Again!</Text>

        <TextInput 
          style={[styles.input, {color: '#000'}]}
          placeholder="Enter your email" 
          placeholderTextColor="#000000" 
          keyboardType="email-address" 
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
          <TouchableOpacity onPress={() => setshowPassword(!showPassword)} style={styles.eyeIcon}>
            <Feather name={showPassword ? 'eye-off' : 'eye'} size={20} color="gray" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <LinearGradient 
            colors={['#1D2855', '#292A5E', '#461E71', '#6A108A']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.loginButton}
          >
            <Text style={styles.loginText}>Login</Text>
          </LinearGradient>
        </TouchableOpacity> 

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerNow}> Register Now</Text>
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
    backgroundColor: "#fff"
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
    zIndex: 2,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    zIndex: 1,
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
    color: '#4D1C77',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#4D1C77',
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
    color: '#4D1C77',
    marginBottom: 20,
  },
  loginButton: {
    width: 300,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
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