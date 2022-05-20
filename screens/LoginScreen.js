import React,{useState,useEffect} from 'react';
import { Text, TouchableOpacity, View, Keyboard,Alert,StatusBar,Image,TextInput} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import CryptoJS from 'crypto-js';
import { Ionicons } from '@expo/vector-icons';

import DoctorLoginComponent from '../component/DoctorLogin';
import PatientLoginComponent from '../component/PatientLogin';
import InputHandler from '../component/InputeText';
import MainButton from '../component/MainButton';
import { useRecoilState } from 'recoil';
import { doctorIdState } from '../Recoil/Atoms/DoctorId';

export default function LoginScreen ({navigation,props}) {
  
     const [loginId, setLoginId] = useRecoilState(doctorIdState)
     //console.log(loginId)
      const [enteredValue, setEnteredValue] = useState('')
      const [confirmed, setConfirmed] = useState(false);
      const [selectedNumber, setSelectedNumber] = useState();
      const [OTP, setOTP] = useState('');
      const [data, setData] = useState([]);
      const [error, setError] = useState('');

      console.log(OTP)
      const enteredInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
      };
     
      const resetInputHandler = () => {
        setEnteredValue(''); 
        setConfirmed(false);
      };
 
      const confirmInputHandler = async () => {  
        const chosenNumber = parseInt([enteredValue.length]);
        if ( chosenNumber < 10  ) {
          let textError =  'Enter 10 digit number.'
          setError(textError)
          // Alert.alert(
          //   'Invalid number!',
          //   'Please Enter valid mobile number.',
          //    [{ text: 'Ok', style: 'destructive', onPress: resetInputHandler }]
          // );
        }else{
          try{
            fetch('http://192.168.29.239:9000/api/loginotp',{
              method: 'POST',
              headers:{
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                mobile: enteredValue,
              })       
            })
            .then(res=>res.json())
            .then(data=>{
              setLoginId(data._id)
              setData({id : data})
              console.log(data)
              console.log(data.isLoggedIn)
                if(data.isLoggedIn){
                  navigation.navigate('Root', { screen: 'DashboardRoot',screen: 'App'})
                }else{
                  navigation.navigate('OtpScreen',{data:data})
                }
            })
            }catch(e){
            console.log(e)
          }
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
        setOTP(OTP)
      };
      
  return (
    <View style={styles.container}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.contenerMarg}>
            <View style={[styles.centerContener, styles.textContenerMarg,]}>
              <Text style={styles.headingText}>Choouse Account Type</Text>
            </View>
              <DoctorLoginComponent />
              <View style={styles.SectionStyle}>
                 <Ionicons  style={styles.inputIconStyle}
                    name = "md-phone-portrait-sharp"
                    size={20}
                    color={Colors.primeryColor}
                /> 
                <InputHandler 
                  placeholder = 'Mobile Number'
                  maxLength={10}
                  keyboardType="number-pad"
                  onChangeText={enteredInputHandler}
                  value={enteredValue}
                />
              </View>
              <Text style={styles.textError}>{error}</Text>
              <View style={[styles.secvenceShow, styles.loginContener]}>
                <View style={[styles.secvenceShow,styles.centerContener ]}>
                </View>
               <MainButton onPress={confirmInputHandler}>Login</MainButton>
            </View>     
          </View>
        </ScrollView>
    </View>
  );
}


