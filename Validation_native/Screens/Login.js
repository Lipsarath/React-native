import React from 'react';
import {View, Text,StyleSheet} from 'react-native';


const LoginScreen = () => {
  return (
    <View style={styles.container}>
<Text style={{fontSize:30,fontWeight:"bold",top:350}}>WELCOME</Text>
    </View>

  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 30,
  },
});
export default LoginScreen;