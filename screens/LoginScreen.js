import React,{useState,useEffect} from 'react';
import { Text, TouchableOpacity, View, Keyboard,Alert,StatusBar,Image,TextInput} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

import InputHandler from '../component/InputeText';
import MainButton from '../component/MainButton';
import BodyText from '../component/Text/BodyText';

const STORAGE_KEY = 'logn_umn'

export default function LoginScreen ({navigation,props}) {
    
      const [enteredValue, setEnteredValue] = useState('');
      const [error, setError] = useState('');

      const enteredInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
      };

    const confirmInputHandler = async () => { 
      if(enteredValue.length < 10){
        setError("Entered Vadlied Number")
      }else{
        const bodyData = {
          "mobile" : enteredValue,
        }
        axios.post('http://192.168.29.239:9000/api/patientLogin', bodyData)
        .then(function(response){
          console.log(response.data._id);
          setError(response.status)
          let item = response.data
          navigation.navigate('Otp',item)
        })
      } 
      Keyboard.dismiss();
    };
      
  return (
    <View style={styles.container}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.contenerMarg}>
            <View style={[styles.centerContener, styles.textContenerMarg,]}>
              <Text style={styles.headingText}>Login</Text>
            </View> 
              <BodyText>Mobile</BodyText>
              <View style={styles.SectionStyle}>
                 <Ionicons 
                    name = "md-phone-portrait-sharp"
                    size={20}
                    color={Colors.primeryColor}
                    style={styles.inputIconStyle}
                /> 
                <InputHandler 
                  placeholder = 'Mobile Number'
                  maxLength={10}
                  keyboardType="number-pad"
                  onChangeText={enteredInputHandler}
                  value={enteredValue}
                />
              </View>
              <BodyText color={Colors.errorText}>{error}</BodyText>
              <View style={[styles.secvenceShow, styles.loginContener]}>
                <View style={[styles.secvenceShow,styles.centerContener ]}>
                  <Text style={styles.messageContentText}>No Account? </Text>
                </View>
               <MainButton onPress={confirmInputHandler}>Login</MainButton>
            </View>     
          </View>
        </ScrollView>
    </View>
  );
}


