import React,{useState,useEffect} from 'react';
import {View,Text,ScrollView,Button,TouchableOpacity,Image} from 'react-native';
import  { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import { useIsFocused } from "@react-navigation/native";

import InputHandler from '../../component/InputeText';
import Colors from '../../constants/Colors';
import styles from '../../constants/Styles';
import { StatusBar } from 'react-native'
import GooglePlacesInput from '../../constants/GooglePlaceInput';
import { RadioButton } from 'react-native-paper';
import MainButton from '../../component/MainButton';

import Toast from 'react-native-toast-message';


export default function AddPersonalDetails (props) {
    console.log(props)
   
   // const [checked, setChecked] = React.useState('null');
    const [ region,setRegion]= useState({});
    const [selectedImage, setSelectedImage] = useState("");
    const [fetchData,setFetchData] = useState({
        name : "",
        officialEmail:"",
        personalEmail:"",
        gender:"",
        address:"",

    });

    const isFocused = useIsFocused();

    const inputHandler = (input, key) => {
        //console.log("new value", input.target.value);
        //const value =input.target.type === "checkbox" ? input.target.checked : input.target.value;
        
        const value = input.target.value;
        setFetchData({
        ...fetchData,
            [key]: value
        });
        console.log(fetchData)
    };
   
    const personalData = `http://192.168.29.239:9000/api/fetchData/${props.doctorId}`;

    useEffect(() => {
        if(isFocused){ 
            fetchAddData();
        }    
    },[isFocused]);
  
    const fetchAddData = async () =>{
        const result = await axios.get(personalData); 
        setFetchData(result.data);  
        console.log(result.data)    
    }
    
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

    const saveData  =  (e) => { 
         const id =  props.doctorId
        const bodyData = {
            //"photo": selectedImage,
            "doctorId":id,
            "name": fetchData.name,
            "gender": fetchData.gender,
            "officialEmail":fetchData.officialEmail,
            "personalEmail":fetchData.personalEmail,
            "address":fetchData.address
        }
        console.log(id)
        axios.post(`http://192.168.29.239:9000/api/insertPersonalInfo/${id}`, bodyData)
        .then(function(response){
            console.log(response);
            props.navigation.navigate('EducationalDetails')
         })
    }

    return(
        <View style={styles.container}>
            <MainButton onPress={saveData}>save</MainButton>
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
                            onChange= {(e)=> inputHandler(e, "name")}
                            value={fetchData.name}
                        />
                    </View>
                    <Text style={styles.getInputedText}>Gender</Text>
                    <View style={{flexDirection: 'row'}}>
                        <RadioButton
                            value={fetchData.gender}
                            status={ fetchData.gender === 'male' ? 'checked' : 'unchecked' }
                            onPress={(e) => inputHandler(e,'male')}
                            color = {Colors.primeryColor}
                        />
                        <Text style={styles.RadioButtonComponentText}>Male</Text>
                        <RadioButton
                            value={fetchData.gender}
                            status={fetchData.gender === 'female' ? 'checked' : 'unchecked' }
                            onPress={(e) => inputHandler(e,'female')}
                            color = {Colors.primeryColor}

                        />
                        <Text style={styles.RadioButtonComponentText}>Female</Text>
                        <RadioButton
                            value={fetchData.gender}
                            status={ fetchData.gender === 'other' ? 'checked' : 'unchecked' }
                            onPress={(e) => inputHandler(e,'other')}
                            color = {Colors.primeryColor}

                        />
                        <Text style={styles.RadioButtonComponentText}>other</Text>
                    </View>

                    <Text style={styles.getInputedText}>Official EmailId*</Text>
                    <View style={styles.SectionStyle}>
                        <InputHandler 
                            placeholder = 'Official Email'
                            maxLength={24}
                            onChange= {(e)=> inputHandler(e, "officialEmail")}
                            value={fetchData.officialEmail}
                        />
                    </View>
                    <Text style={styles.getInputedText}>Personal EmailId*</Text>
                    <View style={styles.SectionStyle}>
                        <InputHandler 
                            placeholder = 'Personal Email'
                            maxLength={24}
                            onChange= {(e)=> inputHandler(e, "personalEmail")}
                            value={fetchData.personalEmail}
                        />
                    </View>
                   <Text style={styles.getInputedText}>City*</Text>
                   <View style={styles.SectionStyle}>
                        <InputHandler 
                            placeholder = 'Enter Address'
                            maxLength={50}
                            onChange= {(e)=> inputHandler(e, "address")}
                            value={fetchData.address}
                        />
                    </View>
                    <GooglePlacesInput  notifyChange={(loc) => getCoordsFromName(loc)}/>

                   {/* <MainButton onPress={saveData}>save</MainButton> */}
                </View>
            </ScrollView>
        </View>
    )
}

