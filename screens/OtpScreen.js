import React, { useRef,useState } from 'react';
import {View,Text,StatusBar,TouchableOpacity,AsyncStorage} from 'react-native';
import styles from '../constants/Styles'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import InputHandler from '../component/InputeText';
import Styles from '../constants/Styles';
import MainButton from '../component/MainButton';
import BodyText from '../component/Text/BodyText';

export default function OtpScreen ({ navigation,route }) {
    console.log(route.params)
    const [otp, setEnteredOtp] = useState('');
    const [enteredOtp,setEnteredOtpWrong] =useState('');
    
    const otpInputHandler = inputText => {
        setEnteredOtp(inputText.replace(/[^0-9]/g, ''));
    };

    const confirmInputHandler = () => { 
        const id = route.params._id
        
        fetch("http://192.168.29.239:9000/api/patientLoginOtp",{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                otp: otp,
                _id : id
            })       
        })
        .then(res=>res.json())
        .then(response =>{
            console.log(response)
            if(response.otp != otp){
                setEnteredOtpWrong(response.status.error);

            } else{
                    AsyncStorage.setItem( "lpan_anu", JSON.stringify(response._id))
                    //alert("asyncStoreg done")
                    console.log(response._id)
                    navigation.navigate('CreateProfile', {patientId: id })
                }
            }
        )
    }
    
    return(
        <View style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <View style={[styles.contenerMarg,Styles.contenerMargOver]}>
            <View style={styles.contenerMarg}>
                <Text style={styles.messageContentText}>Enter the 6-digit OTP Send to</Text>
                <Text style={styles.messageContentText}>{route.params.mobile}</Text>
            </View>
            <View style={[styles.SectionStyle,]}>
                 <Ionicons  name = "md-lock-closed-outline"  size={20} color={Colors.primeryColor}
                    style={styles.inputIconStyle}
                /> 
                  <InputHandler 
                    placeholder = 'Enter OTP'
                    maxLength={6}
                    keyboardType="number-pad"
                    onChangeText={otpInputHandler}
                    value={otp}
                  /> 
                <View style={[styles.forgoteText,styles.inputIconStyle]}>
                    <TouchableOpacity onPress={()=>navigation.navigate('ForgotePassword')}>
                      <Text style={styles.messageContentTextColor}>Resend?</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <BodyText color={'red'}>{enteredOtp}</BodyText>
                <MainButton onPress={confirmInputHandler}>Confirm</MainButton>
            </View>
        </View>
    )
}


