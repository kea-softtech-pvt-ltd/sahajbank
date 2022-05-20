import React,{useState} from 'react';
import {View,Text,ScrollView, StatusBar } from 'react-native';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import axios from 'axios';

import SelectBox from '../component/SelectBox';
import InputHandler from '../component/InputeText';
import Speciality from '../data/Speciality';
import MainButton from '../component/MainButton';
import ClinicServices from '../data/ClinicServices';

export default function AddOwendClinicScreen ({route,navigation}) {
    
    const [enteredClinicName, setClinicName] = useState('')
    const [enteredClinicNumber, setClinicNumber] = useState('')
    const [address, setaddress] = useState('');
    const [speciality, setSpeciality] = useState('Select Speciality');
    const [services,setServices] =useState('Select Services');

    const nameInputHandler = inputText => {
        setClinicName(inputText.replace(/[^A-Z || ^a-z]/g, ''));
    };
    const numberInputHandler = inputText => {
        setClinicNumber(inputText.replace(/[^0-9 || ^A-Z || ^a-z]/g, ''));
    };
    const addressInputHandler = inputText => {
        setaddress(inputText.replace(/[^0-9 || ^A-Z || ^a-z]/g, ''));
    };
    
    const saveData  = async () => { 
        const doctorId = route.params
        const bodyData = {
            "doctorId": doctorId,
            "clinicName": enteredClinicName,
            "clinicNumber":enteredClinicNumber,
            "address":address,
            "specialization":speciality,
            "services":services 
        }
        axios.post('http://192.168.29.239:9000/api/insertownclinic', bodyData)
        .then(function(response){
            console.log(response);
            navigation.navigate('Clinic')
        })
    }

    return(
        <View style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={styles.inputContener}>
                    <Text style={styles.getInputedText}>Clinic Name</Text>
                     <View style={styles.SectionStyle}>
                        <InputHandler
                                placeholder = 'Enter Experience'
                                maxLength={30}
                                onChangeText={nameInputHandler}
                                value={enteredClinicName}
                            />
                    </View>
                    <Text style={styles.getInputedText}>Address</Text>
                    <View style={styles.SectionStyle}>
                        <InputHandler
                                placeholder = 'Enter Experience'
                                maxLength={150}
                                onChangeText={addressInputHandler}
                                value={address}
                            />
                    </View>
                    <Text style={styles.getInputedText}>Clinic Number</Text>
                     <View style={styles.SectionStyle}>
                        <InputHandler
                                placeholder = 'Enter Clinic Number'
                                maxLength={14}
                                onChangeText={numberInputHandler}
                                value={enteredClinicNumber}
                            />
                    </View>
                    <Text style={styles.getInputedText}>Clinic Specialisations</Text>
                    <SelectBox 
                        item = {Speciality}
                        setValue = {setSpeciality}
                    />
                    <Text style={styles.getInputedText}>Clinic Services</Text>
                    <SelectBox 
                        item = {ClinicServices}
                        setValue = {setServices}
                    />
                   
                   <MainButton onPress={saveData}>Save</MainButton>
                </View>
            </ScrollView>
        </View>
           
    )       
}
