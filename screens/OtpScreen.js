import React, { useRef,useState,useEffect } from 'react';
import {View,Text,StatusBar,TouchableOpacity} from 'react-native';
import styles from '../constants/Styles'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import InputHandler from '../component/InputeText';
import Styles from '../constants/Styles';
import MainButton from '../component/MainButton';

export default function OtpScreen ({ navigation,route }) {
    console.log(route)
    const [otp, setEnteredOtp] = useState([]);
    const [loginOtp, setLoginPOtp] = useState(route.params.data.otp);
    const [wrongOtp, setEnteredOtpWrong] = useState();

    const otpInputHandler = inputText => {
        setEnteredOtp(inputText.replace(/[^0-9]/g, ''));
    };

    const confirmInputHandler = () => { 
        const id = route.params.data._id
        const loggedIn = true;
        const loginOtp = route.params.data.otp
        
        fetch("http://192.168.29.239:9000/api/otp",{
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
                if(response.otp != loginOtp){
                    setEnteredOtpWrong("wrong OTP");
                } else{
                    fetch(`http://192.168.29.239:9000/api/otpIsLoggedIn/${id}`,{
                        method: 'POST',
                        headers:{
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                        isLoggedIn : loggedIn
                    })       
                    })
                    .then(res=>res.json())
                    .then(response =>{
                        console.log(response)
                        navigation.navigate('CreateProfileRoot', { screen: 'CreateProfile', params: { id }})
                    })  
                }
            }
        )
    }
    return(
        <View style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <View style={{height: 50,flexDirection: 'row',justifyContent: 'space-between',marginTop:20,marginBottom:20,marginLeft:10,marginRight:10}}>
                <Ionicons name = 'md-arrow-back-outline' size = {25}
                    style={{paddingTop:10}}
                    onPress = {()=>navigation.goBack()}
                />
                <View style={{flexDirection: 'row'}}>
                    <Ionicons name = 'md-help-circle' size = {25}
                        style={{paddingTop:10}}
                    />
                    <Text style={{paddingTop:15,fontSize:12,}}>Help</Text>
                </View>
            </View>
            <View style={[styles.contenerMarg,Styles.contenerMargOver]}>
            <View style={styles.contenerMarg}>
                <Text style={styles.messageContentText}>Enter the 6-digit OTP Send to</Text>
                <Text style={styles.messageContentText}>{route.params.data.mobile}</Text>
            </View>
            <View style={[styles.SectionStyle,]}>
                 <Ionicons  name = "md-lock-closed-outline"  size={20} color={Colors.primeryColor}
                    style={styles.inputIconStyle}
                /> 
                  <InputHandler 
                    //placeholder = {loginOtp}
                    placeholder ="Enter OTP"
                    maxLength={6}
                    keyboardType="number-pad"
                    onChangeText={otpInputHandler}
                    value={otp}
                  /> 
                    <View style={[styles.forgoteText,styles.inputIconStyle]}>
                    <TouchableOpacity>
                      <Text style={styles.messageContentTextColor}>Resend?</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {wrongOtp && <Text style={styles.textError}>Please enter a valid OTP!</Text>}

                <MainButton onPress={confirmInputHandler}>Confirm</MainButton>
            </View>
        </View>
    )
}


