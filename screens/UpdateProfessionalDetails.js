import React,{useState,useEffect} from 'react';
import {View,Text,ScrollView,Button,TouchableOpacity} from 'react-native';
import axios from 'axios';
//import DocumentPicker from 'react-native-document-picker';

import InputHandler from '../component/InputeText';
import Colors from '../constants/Colors';
import styles from '../constants/Styles';
import { StatusBar } from 'react-native';
import MainButton from '../component/MainButton';
import DatePicker from 'react-native-datepicker';

export default function UpdateProfessionalDetailsScreen ({route,navigation}) {
    console.log(route)
    const id = route.params._id
    const [enteredExperience, setEnteredExperience] = useState(route.params.experience);
    const [clinicName,setClinicName] = useState(route.params.clinicName);
    const [startYear,setStartYear] = useState(new Date(route.params.startYear));
    const [endYear,setEndYear] = useState(new Date(route.params.endYear));
    const [description,setDescription] = useState(route.params.description);
    const [updateData,setUpdateData] = useState([ route.params]);
    const [error,setError] = useState('');

    const experienceInputHandler = inputText => {
        setEnteredExperience(inputText.replace(/[^0-9 || ^a-z || ^A-Z]/g,''));
      };
      const clinicNameInputHandler = inputText => {
        setClinicName(inputText.replace(/[^a-z || ^A-Z]/g,''));
      };
      const descriptionInputHandler = inputText => {
        setDescription(inputText.replace(/[^a-z || ^A-Z]/g,''));
      };

    const updateExperience = `http://192.168.29.239:9000/api/updateExperience/${id}`;

    const saveData  = async () => { 
        const doctorId = route.params.doctorId
        const start = startYear
        const end = endYear
        const experience = endYear - startYear ; 
        if(start <=  end){
            const bodyData = {
                "doctorId":doctorId,
                "experience": experience,
                "clinicName": clinicName,
                "startYear": startYear,
                "endYear": endYear,
                "description": description
            }
            console.log(id)
            axios.post(updateExperience, bodyData)
            .then(function(response){
                console.log(response);
                navigation.goBack('')
            })
        }else{
            let textError = 'End yera Lessthan start year not acceptebal!';
            setError(textError)  ;   
        }
    }

    return(
        <View style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                {updateData.map((item,id)=>(
                     <View style={styles.contenerMarg} key = {id}> 
                     <Text style={styles.getInputedText}>Clinic/Hosptal Name</Text>
                     <View style={styles.SectionStyle}>
                         <InputHandler
                                 placeholder = {item.clinicName}
                                 onChangeText={ clinicNameInputHandler}
                                 value={clinicName}
                             />
                     </View>
                     <Text style={styles.getInputedText}>Start Year</Text>
                     <View>
                        <DatePicker
                            style={{width: 200}}
                            date={startYear}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM"
                            minDate="1990-12"
                            maxDate="2021-12"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {position: 'absolute',left: 0, top: 4,marginLeft: 0},
                                dateInput: {marginLeft: 36 }// ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => {setStartYear(date)}}
                        />
                    </View> 
                    <Text style={styles.getInputedText}>End Year</Text>        
                    <View>
                        <DatePicker
                            style={{width: 200}}
                            date={endYear}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM"
                            minDate="1990-12"
                            maxDate="2021-12"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {position: 'absolute',left: 0,top: 4,marginLeft: 0},
                                dateInput: {marginLeft: 36}
                            // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => {setEndYear(date)}}
                        />
                    </View> 
                        <Text style={{fontSize: 15,color:'red'}}>{error}</Text>
                     <Text style={styles.getInputedText}>Description</Text>
                     <View style={styles.SectionStyle}>
                         <InputHandler
                                 placeholder = {item.description}
                                 maxLength={150}
                                 onChangeText={ descriptionInputHandler}
                                 value={description}
                             />
                     </View> 
                    <MainButton onPress={saveData}>Update</MainButton>
                 </View>
                ))}
                
            </ScrollView>
        </View>
    )
}

