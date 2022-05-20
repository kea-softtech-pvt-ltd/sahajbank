import React,{useState} from 'react';
import {View,Text,ScrollView,Button,TouchableOpacity,Image} from 'react-native';
import  { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';

import InputHandler from '../component/InputeText';
import Colors from '../constants/Colors';
import styles from '../constants/Styles';
import { StatusBar } from 'react-native'
import GooglePlacesInput from '../constants/GooglePlaceInput';
import { RadioButton } from 'react-native-paper';
import SaveButton from '../HeaderContener/SaveHed';
import MainButton from '../component/MainButton';

export default function UpdateProfileScreen ({route,navigation}) {
    console.log(route)  
    const id = route.params._id  
    const [name, setEnteredValue] = useState(route.params.name);
    const [email, setEnteredEmail] = useState(route.params.officialEmail);
    const [mobile, setEnteredMobile] = useState('');
    const [personalEmail, setEnteredPersonalEmail] = useState(route.params.personalEmail);
    const [checked, setChecked] = React.useState(route.params.gender);
    const [address, setAddress] = React.useState(route.params.address);
    const [ region,setRegion]= useState({});
    const [titleIsValid, setTitleIsValid] = useState(true);
    const [selectedImage, setSelectedImage] = useState("");
    const [updateData,setUpdateData] = useState([ route.params]);

    const nameInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^A-Z || ^a-z]/g, ''));
    };
    const emailInputHandler = inputText => {
        setEnteredEmail(inputText.replace(/[^0-9|| ^a-z || ^A-Z || ^!-* ||^@ ||^.]/g, ''));
    };
    const mobileInputHandler = inputText => {
        setEnteredMobile(inputText.replace(/[^0-9]/g, ''));
    };
    const personalEmailInputHandler = inputText => {
        setEnteredPersonalEmail(inputText.replace(/[^0-9|| ^a-z || ^A-Z || ^!-* ||^@ ||^.]/g, ''));
    };
    
    const updateProfile = `http://192.168.29.239:9000/api/insertPersonalInfo/${id}`;

    const getCoordsFromName = (loc) =>{
        setRegion(
            latitude = loc.lat,
            longitude = loc.lng,
            latitudeDelta = 0.003,
            longitudeDelta = 0.003
        )      
    }

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

    const saveData  = async () => { 
        const doctorId = route.params.doctorId
        const bodyData = {
            "doctorId":doctorId,
            "name": name,
            "gender": checked,
            "officialEmail":email,
            "personalEmail":personalEmail,
            "address":address
        }
        console.log(id)
        axios.post(updateProfile, bodyData)
        .then(function(response){
            console.log(response);
            navigation.goBack('')
        })
    }

    return(
        <View style={styles.container}>
            <MainButton onPress={saveData}>save</MainButton>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <ScrollView>
            {updateData.map((item,id)=>(
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
                            placeholder = {item.name}
                            maxLength={30}
                            onChangeText={nameInputHandler}
                            value={name}

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

                    <Text style={styles.getInputedText}>Official EmailId*</Text>
                    <View style={styles.SectionStyle}>
                        <InputHandler 
                            placeholder = {item.officialEmail}
                            maxLength={24}
                            onChangeText={emailInputHandler}
                            value={email}
                        />
                    </View>
                    <Text style={styles.getInputedText}>Personal EmailId*</Text>
                    <View style={styles.SectionStyle}>
                        <InputHandler 
                            placeholder = {item.personalEmail}
                            maxLength={24}
                            onChangeText={personalEmailInputHandler}
                            value={personalEmail}
                        />
                    </View>
                   <Text style={styles.getInputedText}>City*</Text>
                   <View style={styles.SectionStyle}>
                        <InputHandler 
                            placeholder = {item.address}
                            maxLength={50}
                            onChangeText={setAddress}
                            value={address}
                        />
                    </View>
                    <GooglePlacesInput  notifyChange={(loc) => getCoordsFromName(loc)}/>

                   {/* <MainButton onPress={saveData}>save</MainButton> */}
                </View>
            ))}
            </ScrollView>
        </View>
    )
}

