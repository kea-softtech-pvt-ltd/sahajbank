import React,{useState,useEffect} from 'react';
import { Text, TouchableOpacity,View,StatusBar,} from 'react-native';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

import InputHandler from '../component/InputeText';


export default function ForgotePasswordScreen ({navigation,props}) {
        
    const [newPassword, setEnteredNewPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
        
    const newPasswordInputHandler = inputText => {
        setEnteredNewPassword(inputText.replace(/[^0-9 || ^a-z || ^A-Z || ^!-*]/g, ''));
    };
    const confirmedPasswordInputHandler = inputText => {
        setConfirmedPassword(inputText.replace(/[^0-9 || ^a-z || ^A-Z || ^!-*]/g, ''));
    };

    const confirmInputHandler =  () => {   
        navigation.goBack()
        
    };
      
  return (
    <View style={{flex:1,justifyContent:'center',backgroundColor:'#fff'}}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
             <View style={[styles.contenerMarg, ]}>
                <View style={styles.SectionStyle}>
                        <Ionicons 
                        name = "md-lock-closed-outline"
                        size={20}
                        color={Colors.primeryColor}
                        style={styles.inputIconStyle}
                    /> 
                        <InputHandler 
                        placeholder = 'New Password'
                        maxLength={6}
                        secureTextEntry
                        onChangeText={newPasswordInputHandler}
                        value={newPassword}
                        /> 
                </View> 
                <View style={styles.SectionStyle}>
                        <Ionicons 
                        name = "md-lock-closed-outline"
                        size={20}
                        color={Colors.primeryColor}
                        style={styles.inputIconStyle}
                    /> 
                        <InputHandler 
                        placeholder = 'Confirm Password'
                        maxLength={6}
                        secureTextEntry
                        onChangeText={ confirmedPasswordInputHandler}
                        value={confirmedPassword}
                        /> 
                </View>                 
                <View style={[styles.loginButtonContainer,styles.loginContener]}>
                    <TouchableOpacity onPress={confirmInputHandler}>
                    <Text style={styles.getButtonText}>Continue</Text>
                    </TouchableOpacity>
               </View>
            </View>     
    </View>
  );
}


