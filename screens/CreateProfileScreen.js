import React,{useState} from 'react';
import {View,Text,ScrollView,Button,TouchableOpacity,Image} from 'react-native';
//import  { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';

import InputHandler from '../component/InputeText';
import Colors from '../constants/Colors';
import styles from '../constants/Styles';
import { StatusBar } from 'react-native'
import { RadioButton } from 'react-native-paper';
import MainButton from '../component/MainButton';

export default function PersonalDetailsScreen ({route,navigation}) {
    console.log(route.params.patientId)
    const [name, setEnteredValue] = useState('');
    const [lastName, setEnteredLastValue] = useState('');
    const [age, setEnteredAge] = useState('');
    const [email, setEnteredEmail] = useState('');
    const [checked, setChecked] = React.useState('null');
    const [selectedImage, setSelectedImage] = useState("");

    const nameInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^A-Z || ^a-z]/g, ''));
    };
    const lastNameInputHandler = inputText => {
        setEnteredLastValue(inputText.replace(/[^A-Z || ^a-z]/g, ''));
    };
    const ageInputHandler = inputText => {
        setEnteredAge(inputText.replace(/[^0-9]/g, ''));
    };
    const emailInputHandler = inputText => {
        setEnteredEmail(inputText.replace(/[^0-9|| ^a-z || ^A-Z || ^!-* ||^@ ||^.]/g, ''));
    };
    let openImagePickerAsync = () => {
        launchImageLibrary([], function(response){
            console.log(response)
        })
        launchImageLibrary((response) => {
            console.log('Response = ', response);
          if (response.didCancel) {
            console.log('User cancelled image picker');
          }else if (response.error) {
           console.log('ImagePicker Error: ', response.error);
          }else if (response.customButton) {
           console.log('User tapped custom button: ', response.customButton);
          }else {
           console.log('User selected a file form camera or gallery', response); 
           
           const data = new FormData();
           data.append('name', 'avatar');
           data.append('fileData', {
            uri : response.uri,
            type: response.type,
            name: response.fileName
           });

           setSelectedImage(response);
        //    const config = {
        //     method: 'POST',
        //     headers: {
        //      'Accept': 'application/json',
        //      'Content-Type': 'multipart/form-data',
        //     },
        //     body: data,
        //    };
        //   fetch("http://localhost:3000/" + "upload", config)
        //    .then((checkStatusAndGetJSONResponse)=>{       
        //      console.log(checkStatusAndGetJSONResponse);
        //    }).catch((err)=>{console.log(err)});
          }
        })

    };

    const saveData  =  (e) => { 
         const id = route.params.patientId
        const bodyData = {
            "name": name,
            "lastName":lastName,
            "email":email,
            "gender": checked,
            "age" :age
        }
        console.log(id)
        axios.post(`http://192.168.29.239:9000/api/insertPatientDetails/${id}`, bodyData)
        .then(function(response){
            console.log(response);
            navigation.navigate('BookAppointment',{isLoggin:'1'})
        })
    }

    return(
        <View style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <ScrollView>
                <View style={styles.contenerMarg}>
                    <Text style={styles.getInputedText}>Doctor Photo*</Text>
                   <View style={[styles.spaceBetween,styles.secvenceShow]}>
                        <View style={styles. centerContener}>
                            {selectedImage == null ? (
                                <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }}  
                                style={styles.thumbnile} />
                            ):(
                                <Image 
                                source={{ uri: selectedImage }} 
                                style={styles.thumbnile} />
                            )}
                        </View>
                        <MainButton onPress={openImagePickerAsync}>Choose Photo</MainButton>
                   </View>
                    <Text style={styles.getInputedText}>Name*</Text>
                    <View style={styles.SectionStyle}>
                        <InputHandler
                            placeholder = 'Enter Your Name'
                            maxLength={30}
                            onChangeText={nameInputHandler}
                            value={name}
                            //color = {Colors.primeryColor}
                        />
                    </View>
                    <Text style={styles.getInputedText}>Last Name*</Text>
                    <View style={styles.SectionStyle}>
                        <InputHandler
                            placeholder = 'Enter Your Last Name'
                            maxLength={30}
                            onChangeText={lastNameInputHandler}
                            value={lastName}
                            //color = {Colors.primeryColor}
                        />
                    </View>
                    <Text style={styles.getInputedText}>Gender</Text>
                    <View style={{flexDirection: 'row'}}>
                        <RadioButton
                            value="male"
                            status={ checked === 'male' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('male')}
                            color = {Colors.primeryColor}
                        />
                        <Text style={styles.RadioButtonComponentText}>Male</Text>
                        <RadioButton
                            value="female"
                            status={ checked === 'female' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('female')}
                            color = {Colors.primeryColor}

                        />
                        <Text style={styles.RadioButtonComponentText}>Female</Text>
                        <RadioButton
                            value="other"
                            status={ checked === 'other' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('other')}
                            color = {Colors.primeryColor}

                        />
                        <Text style={styles.RadioButtonComponentText}>other</Text>
                    </View>

                    <Text style={styles.getInputedText}>Age*</Text>
                    <View style={styles.SectionStyle}>
                        <InputHandler 
                            placeholder = 'Age'
                            maxLength={2}
                            onChangeText={ageInputHandler}
                            value={age}
                        />
                    </View>
                    <Text style={styles.getInputedText}>Email*</Text>
                    <View style={styles.SectionStyle}>
                        <InputHandler 
                            placeholder = 'Email'
                            maxLength={14}
                            onChangeText={emailInputHandler}
                            value={email}
                        />
                    </View>
                   <MainButton onPress={saveData}>save</MainButton>
                </View>
            </ScrollView>
        </View>
    )
}

