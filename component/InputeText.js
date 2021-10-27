import React from 'react';
import { TextInput, } from 'react-native';
import styles from '../constants/Styles';

const InputHandler = props => {
  return <TextInput 
    {...props}  
    style={styles.input}
    blurOnSubmit
    autoCapitalize="none"
    autoCorrect={false}
    underlineColor = 'transperent'
    
  />;
};

export default InputHandler;

