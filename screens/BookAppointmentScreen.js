import React,{useState,useEffect} from 'react';
import{View,Text,Image,AsyncStorage} from 'react-native';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import BoldText from '../component/Text/BoldText';
import BodyText from '../component/Text/BodyText';
import InputHandler from '../component/InputeText';
import axios from 'axios';
import MainButton from '../component/MainButton';
import RazorpayCheckout from 'react-native-razorpay';

export default function BookAppointmentScreen ({route,navigation}) {

    const [loginId, setLoginId] = useState(null)
    console.log(loginId)
    const DoctorData = (route.params);
    const [mobile,setMobileNumber]=useState('')
    const [error,setError]=useState('')

    const numberInputHandler = inputText =>{
        setMobileNumber(inputText.replace(/[^0-9]/g,''))
    } 

   useEffect ( ()=>{
       readData()
       console.log(loginId);
   },[])

   const readData = async () => {
    try {
      const userIdAsync = await AsyncStorage.getItem("lpan_anu")
      console.log("async",userIdAsync)
      if (userIdAsync !== null) {
         
        setLoginId(userIdAsync)
      }
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }
   
    const confirmInputHandler = async () => { 
    
        const bodyData = {
            "mobile" : mobile,
        }
        axios.post('http://192.168.29.239:9000/api/patientLogin', bodyData)
        .then(function(response){
           // console.log(response.data._id);
            setError(response.status)
            let item = response.data
            navigation.navigate('Otp',item)
        })
       
    };

    const confirmPayment = ()=>{
        var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_hG7nwGRE93z85l', // Your api key
            amount: '5000',
            name: 'foo',
            prefill: {
            email: 'sk2farin@gmail.com',
            contact: '9890263668',
            name: 'Farin Shaikh'
            },
            theme: {color: '#F37254'}
        }
        RazorpayCheckout.open(options).then((data) => {
            // handle success
            console.log(data)
            alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
        });  
    }

    return(
        <View>
            <View style={[styles.secvenceShow,styles.padd,styles.backgroundColor]}>
                <Image
                    style={styles.smallImage}
                    source = {require('../assets/images/profileImage1.jpg')} 
                    onPress={()=>navigation.navigate('Profile')}
                />
                <View style={{marginLeft:10}}>
                    <BoldText>Dr.{DoctorData.name}</BoldText>
                    <View style={styles.secvenceShow}>
                        <BodyText paddingRight = {10}>{DoctorData.address.street}</BodyText>
                        <BodyText>{DoctorData.visitingClinic.name}</BodyText>
                    </View>
                </View>   
            </View>
            <View style={{backgroundColor:Colors.whiteBackground,marginTop:2,padding:10}}>
                <BoldText>Appointment Date and Time</BoldText>
                <BodyText lineHeight={25}>8 Oct 2021,11:00 AM</BodyText>
            </View>
            {loginId == null?(
                 <View style={{backgroundColor:Colors.whiteBackground,marginTop:10,padding:10}}>
                 <BodyText>Please Provide Your Number to Continue:</BodyText>
                 <BodyText>Mobile*</BodyText>
                 <View style={styles.SectionStyle}>
                     <Ionicons  style={styles.inputIconStyle}
                         name = "md-phone-portrait-sharp"
                         size={20}
                         color={Colors.primeryColor}
                     /> 
                     <InputHandler
                         placeholder = 'Enter Mobile Number'
                         maxLength={10}
                         onChangeText={ numberInputHandler}
                         value={mobile} 
                         keyboardType="number-pad"
                     />
                 </View>
                 <BodyText>You will resive Verification Code on this number</BodyText>
                 <BodyText>{error}</BodyText>
                 <MainButton onPress={confirmInputHandler}>Send OTP</MainButton>
             </View>
            ):(
                <View style={{backgroundColor:Colors.whiteBackground,marginTop:10,padding:10}}>
                    <View style={styles.secvenceShow}>
                        <View style={{flex:1}}>
                        <BodyText>Video Appointment</BodyText>
                        <BodyText>{'\u20B9'}400</BodyText>
                        </View>
                        <View style={{flex:1}}><MainButton onPress={confirmPayment}>Pay</MainButton></View>
                    </View>
                </View>
            )}
        </View>
    )
}