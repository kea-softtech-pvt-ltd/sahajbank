import React,{useState} from 'react';
import {View,Text,ScrollView,Button,TouchableOpacity,CheckBox} from 'react-native';
import axios from 'axios';

import InputHandler from '../../component/InputeText';
import Colors from '../../constants/Colors';
import styles from '../../constants/Styles';
import { StatusBar } from 'react-native';
import MainButton from '../../component/MainButton';
import { useEffect } from 'react/cjs/react.development';
import DatePicker from 'react-native-datepicker'

export default function ProfessionalExperenceAdd (props) {
    const [clinicName,setClinicName] = useState('');
    //const [startYear,setStartYear] = useState('Select StartYear');
    //const [endYear,setEndYear] = useState('Select EndYear');
    const [description,setDescription] = useState('');
    const [error,setError] = useState('');

    const [startDate,setStartDate] = useState(new Date());
    const [endDate,setEndDate] = useState(new Date());
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const clinicNameInputHandler = inputText => {
    setClinicName(inputText.replace(/[^a-z || ^A-Z]/g,''));
    };

    const descriptionInputHandler = inputText => {
    setDescription(inputText.replace(/[^a-z || ^A-Z]/g,''));
    };

    useEffect(() => {
        console.log(props.data, "1")
      
    },[props])
    
    const saveData  = async () => { 
        const id =  props.doctorId 
        const start =new Date(startDate) 
        const end = new Date(endDate)

        if(start <=  end){
            const bodyData = {
                "doctorId":id,
                "clinicName": clinicName,
                "startYear": startDate,
                "endYear": endDate,
                "description": description
            }
            console.log(id)
            axios.post("http://192.168.29.239:9000/api/insertExperience", bodyData)
            .then(function(response){
                console.log(response);
                props.onRecordAdded()
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
                <View style={styles.contenerMarg}> 
                    <Text style={styles.getInputedText}>Clinic/Hosptal Name</Text>
                    <View style={styles.SectionStyle}>
                        <InputHandler
                            placeholder = 'Enter Clinic Name'
                            maxLength={50}
                            onChangeText={ clinicNameInputHandler}
                            value={clinicName}
                        />
                    </View>
                    <View style={styles.secvenceShow}>
                        <CheckBox
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            color= {Colors.primeryColor}
                            style={{marginTop:10,marginRight:10}}
                        /> 
                        <Text  style={styles.getInputedText} >Currently Working ere </Text>  
                    </View>
                    <Text style={styles.getInputedText}>Start Year</Text>
                    <View>
                        <DatePicker
                            style={{width: 200}}
                            date={startDate}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM"
                            minDate="1990-12"
                            maxDate="2021-12"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                            // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => {setStartDate(date)}}
                        />
                    </View> 
                    {toggleCheckBox ? null : 
                        <View>
                            <Text style={styles.getInputedText}>End Year</Text>        
                            <View>
                                <DatePicker
                                    style={{width: 200}}
                                    date={endDate}
                                    mode="date"
                                    placeholder="select date"
                                    format="YYYY-MM"
                                    minDate="1990-12"
                                    maxDate="2021-12"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 4,
                                            marginLeft: 0
                                        },
                                        dateInput: {
                                            marginLeft: 36
                                        }
                                    // ... You can check the source to find the other keys.
                                    }}
                                    onDateChange={(date) => {setEndDate(date)}}
                                />
                            </View> 
                            <Text style={{fontSize:15,color:'red'}}>{error}</Text>
                        </View>
                    }
                    <Text style={styles.getInputedText}>Description</Text>
                    <View style={styles.SectionStyle}>
                        <InputHandler
                                placeholder = 'Enter Description'
                                maxLength={400}
                                onChangeText={ descriptionInputHandler}
                                value={description}
                            />
                    </View> 
                   <MainButton onPress={saveData}>save</MainButton>
                </View>
            </ScrollView>
        </View>
    )
}

