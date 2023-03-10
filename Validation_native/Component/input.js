import React,{useState} from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import COLORS from '../color';
const Input = ({  label, iconName, error,password,
    onFocus = () => {},
    ...props}) => {

const [isFocused, setIsFocused] =useState(false);
return(
<View  style={{marginBottom: 20}}>
<Text style={style.label}>{label}</Text>
<View   style={[style.inputContainer 
          ,{ 
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.darkBlue
              : COLORS.light,
            alignItems: 'center',
          },
        ]}>
<Icon name={iconName} style={{color:"#00008B", fontSize: 22, marginRight: 10}} />
<TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          //secureTextEntry={hidePassword}
          style={{color:"#00008B", flex: 1}}
          {...props}
        />
      </View>
      {error && (
      <Text style={{marginTop: 7, color: COLORS.red, fontSize: 12}}>{error}</Text>
      )}
</View>
)
  
};

const style = StyleSheet.create({
    label: {
      marginVertical: 5,
      fontSize: 14,
      color:"grey",
    },
    inputContainer: {
        height: 55,
        width: 320,
        backgroundColor:"#FFFAF0",
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 0.5,
      },
});
export default Input;
