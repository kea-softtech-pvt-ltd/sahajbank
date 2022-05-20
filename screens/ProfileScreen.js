import React,{useState,useEffect} from 'react';
import {View,Text,ScrollView,StatusBar,Image,TouchableOpacity} from 'react-native';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import { useIsFocused } from "@react-navigation/native";
import axios from 'axios';

import Personal from '../component/Profile/Personal';
import Education from '../component/Profile/Educational';
import Clinic from '../component/Profile/Clinic';
import Experience from '../component/Profile/Experience';

export default function ProfileScreen ({navigation,route}) {
    console.log(route);
    const doctorId = route.params ;
    console.log(doctorId)

    const [personalData,setPersonalData] = useState([]);
    const [educationData,setEductionData] = useState([]);
    const [clinicData,setClinicData] = useState([]);
    const [OwnClinicData,setOwnClinicData] = useState([]);
    const [experienceData,setExperienceData] = useState([])
    const isFocused = useIsFocused();

    const educationFetchData = `http://192.168.29.239:9000/api/fetchEduData/${doctorId}`;
    const personalFetchData = `http://192.168.29.239:9000/api/fetchData/${doctorId}`;
    const clinicFetchData = `http://192.168.29.239:9000/api/fetchclinic/${doctorId}`;
    const ownClinicFetchData = `http://192.168.29.239:9000/api/fetchownclinic/${doctorId}`;
    const experienceFetchData = `http://192.168.29.239:9000/api/fetchExData/${doctorId}`;

    useEffect(() => {
        if(isFocused){ 
            fetchEducationalData() ;
            fetchPersonalData() ;
            fetchClinicData() ;
            fetchOwnClinicData() ;
            fetchExperienceData() ;
        }     
    },[isFocused]);
  
    const fetchEducationalData = async () =>{
        const result = await axios.get(educationFetchData); 
        setEductionData(result.data);   
    }
    const fetchPersonalData = async () =>{
        const result = await axios.get(personalFetchData); 

        setPersonalData(result.data);   
    }
    const fetchClinicData = async () =>{
        const result = await axios.get(clinicFetchData); 
        setClinicData(result.data);   
    }
    const fetchOwnClinicData = async () =>{
        const result = await axios.get(ownClinicFetchData); 
        setOwnClinicData(result.data);   
    }
    const fetchExperienceData = async () =>{
        const result = await axios.get(experienceFetchData); 
        // let totalEx = result.data.map((r, a) => {
        //     console.log(r.experience) 
        //     total = r.experience
        //     return total;  
        // }, {});
        // console.log(totalEx)
        setExperienceData(result.data);   
    }

    const handalChange = () =>{
        console.log('hello');
        navigation.navigate('CreateProfileRoot', { screen: 'CreateProfile', screen: 'Clinic',params:{doctorId}})
    }

    return(
        <View style={styles.toGetContener}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View>
                    <View style={styles.toNextGetContener}>
                        <TouchableOpacity onPress={()=>navigation.navigate('CreateProfileRoot', { screen: 'CreateProfile', params:{doctorId}})}>
                            <Text style={styles.getInputTextColor}>EDIT</Text>
                        </TouchableOpacity>
                    </View>
                    <Personal doctorId ={doctorId} personalData={personalData}/>
                    <Education doctorId ={doctorId} educationData={educationData} />
                    <Experience doctorId = {doctorId} experienceData={experienceData}/>                   
                    <Clinic doctorId ={doctorId} clinicData={clinicData} ownClinic={OwnClinicData} onClinicClick={handalChange}/>
                </View>             
            </ScrollView>
        </View>
    ) 
}