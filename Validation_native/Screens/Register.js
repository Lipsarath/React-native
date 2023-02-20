import React,{useState} from 'react';
import {View, Text, StyleSheet,ScrollView,TouchableOpacity, Keyboard, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Input from '../Component/input';
import Loader from '../loader';
import COLORS from '../color';


const RegisterScreen = ({navigation,title}) => {
  const [inputs, setInputs] = useState({
    email: '',
    name: '',
    phoneno: '',
    
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const validate = () => {
    Keyboard.dismiss(); 
    let isValid = true;


    if (!inputs.name) {
      handleError('Please input name', 'name');
      isValid = false;
    }

    if (!inputs.phoneno) {
      handleError('Please input phone number', 'phoneno');
      isValid = false;
    }

    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/1234/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }

    if (isValid) {
      register();
    }
   };

   const register = () => {
   setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        AsyncStorage.setItem('userData', JSON.stringify(inputs));
        navigation.navigate('LoginScreen');
      } catch (error) {
        Alert.alert('Error', 'Something went wrong');
      }
    }, 2000);
  };
  
  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  return (
    <View style={styles.container}>
      <Loader visible={loading} />
<ScrollView  contentContainerStyle={{paddingTop: 50, paddingHorizontal: 20}} >
<Text style={{color:"black", fontSize: 40, fontWeight: 'bold',right:15}}>  Register</Text>

<Text style={{color:"grey", fontSize: 18, marginVertical: 10}}> Enter Your Details to Register</Text>

<View style={{marginVertical: 20}}>
  <Input 
   onChangeText={text => handleOnchange(text, 'name')}
   onFocus={() => handleError(null, 'name')}
   iconName="user"
   label="Name"
   placeholder="Enter your Name "
   error={errors.name}
 />

<Input 
   onChangeText={text => handleOnchange(text, 'phoneno')}
   onFocus={() => handleError(null, 'phoneno')}
   iconName="phone"
   label="Phone no"
   KeyboardType="numeric"
   placeholder="Enter your Phone no"
   error={errors.phoneno}
 />

<Input 
   onChangeText={text => handleOnchange(text, 'email')}
   onFocus={() => handleError(null, 'email')}
   iconName="envelope-o"
   label="Email"
   placeholder="Enter your email address"
   error={errors.email}
 />
    </View>
    <TouchableOpacity
      onPress={validate}
     activeOpacity={0.7}
      style={{
        height: 55,
        width: '100%',
        backgroundColor: COLORS.blue,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 18}}>{title} Register </Text>

    </TouchableOpacity>

    <Text
    onPress={() => navigation.navigate('LoginScreen')}
        style={{
              color: COLORS.black,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Already have account ?Login
          </Text>
</ScrollView>
    </View>

  )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      padding: 20,
    },
});
export default RegisterScreen;