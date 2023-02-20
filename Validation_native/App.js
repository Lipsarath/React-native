import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/Login';
import RegisterScreen from './Screens/Register';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    
        <Stack.Navigator
          //initialRouteName={initialRouteName}
          screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
          />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        
          </Stack.Navigator>
     
  </NavigationContainer>
    
  
      
  
  );
}

