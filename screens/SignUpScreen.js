import React,{useState,useEffect} from 'react';
import { Text,View, Keyboard,Alert,StatusBar,} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

import DoctorLoginComponent from '../component/DoctorLogin';
import PatientLoginComponent from '../component/PatientLogin';
import InputHandler from '../component/InputeText';
import MainButton from '../component/MainButton';

export default function SignUpScreen ({navigation}) {
        
    const [name, setEnteredname] = useState('');
    const [enteredValue, setEnteredValue] = useState('');
    const [email, setEnteredEmail] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const [titleIsValid, setTitleIsValid] = useState(false);
        
    const nameInputHandler = inputText => {
        setEnteredname(inputText.replace(/[^A-Z || ^a-z]/g, ''));
        titleChangeHandler();
    };
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };
    const emailInputHandler = inputText => {
        setEnteredEmail(inputText.replace(/[^0-9|| ^a-z || ^A-Z || ^!-* ||^@ ||^.]/g, ''));
    };
    
    const resetInputHandler = () => {
    setEnteredValue(''); 
    setConfirmed(false);
    };

    useEffect(() => {
       
    }, [])

      const confirmInputHandler = async () => {   
        
        const chosenNumber = parseInt([enteredValue.length]);
        if(!name && !email & chosenNumber < 10 ) {
          Alert.alert(
            'Invalid number!',
            'Please Enter valid mobile number.',
             [{ text: 'Ok', style: 'destructive', onPress: resetInputHandler }]
          );
        }else{
          try{
            fetch("http://192.168.29.239:9000/api/create",{
              method: 'POST',
              headers:{
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                name: name,
                email: email,
                phone: enteredValue,
              })
            })
             .then((response) => {
              navigation.navigate('Login' )
            })
            //.then(res=>res.json())
            .then(data=>{
              console.log(data)
            })
         }catch(e){
            console.log(e)
        } 
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
      };

      const titleChangeHandler = text => {
        if (text.trim().length === 0) {
          setTitleIsValid(false);
        } else {
          setTitleIsValid(true);
        }
        setEnteredname(text);
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
                 <Ionicons  name = "md-person-circle-outline" size={20} color={Colors.primeryColor} style={styles.inputIconStyle} /> 
                <InputHandler 
                  placeholder = 'Name'
                  onChangeText={titleChangeHandler}
                  maxLength={24}
                  //onChangeText={nameInputHandler}
                  value={name}
                />
            </View>
            {!titleIsValid && <Text style={{fontSize:16,color:'red'}}>Please enter a valid title!</Text>}
            <View style={styles.SectionStyle}>
                <Ionicons name = "md-mail-outline" size={20} color={Colors.primeryColor} style={styles.inputIconStyle} /> 
                <InputHandler 
                  placeholder = 'Email'
                  maxLength={24}
                  onChangeText={emailInputHandler}
                  value={email}
                />
            </View>
            <View style={styles.SectionStyle}>
                <Ionicons name = "md-phone-portrait-sharp" size={20} color={Colors.primeryColor} style={styles.inputIconStyle} />     
                <InputHandler 
                  placeholder = 'Mobile Number'
                  maxLength={10}
                  keyboardType="number-pad"
                  onChangeText={numberInputHandler}
                  value={enteredValue}
                />
            </View>
            {/* <View style={styles.SectionStyle}>
                 <Ionicons name = "md-lock-closed-outline" size={20} color={Colors.primeryColor} style={styles.inputIconStyle} /> 
                  <InputHandler 
                    placeholder = 'Password At list 6 Charector'
                    maxLength={6}
                    secureTextEntry
                    onChangeText={passwordInputHandler}
                    value={password}
                  /> 
            </View>                 */}
            <MainButton onPress={confirmInputHandler}>Continue</MainButton>
          </View>     
        </ScrollView>
    </View>
  );
}


