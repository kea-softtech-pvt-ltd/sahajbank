import React,{useState,useEffect} from 'react';
import {View,Text,ScrollView,} from 'react-native';
import axios from 'axios';
import { useIsFocused } from "@react-navigation/native";
import { doctorIdPass } from '../Recoil/Atoms/Selector/DoctorIdPass';
import { useRecoilValue,} from 'recoil';

import Colors from '../constants/Colors';
import styles from '../constants/Styles';
import { StatusBar } from 'react-native';
import ProfessionalExperenceAdd from '../component/ProfessionalExperience/AddProfessionalExperience';
import ShowProfessionalExperience from '../component/ProfessionalExperience/ShowProfessionalExperience';

export default function ProfessionalExperenceScreen ({route,navigation}) {
    console.log(route)
    const doctorId = useRecoilValue(doctorIdPass);
    console.log(doctorId)
    
    const [shouldShow, setShouldShow] = useState(false);
    console.log(shouldShow, "init");
    const [fetchData,setFetchData] = useState([]);
    const isFocused = useIsFocused();
    
    const professionalData = `http://192.168.29.239:9000/api/fetchExData/${doctorId}`;

    useEffect(() => {
        console.log("hii")
        if(isFocused){ 
            fetchAddData();
            console.log(shouldShow, "useeffect")
        }  
        
    },[isFocused]);
  
    const fetchAddData = async () =>{
        const result = await axios.get(professionalData); 
         console.log(result.data);
         if(result.data.length > 0) {
            setFetchData(result.data); 
            setShouldShow(true)
        }    

    }

    const handleNewRecordAdded =() =>{
        setShouldShow(false)
    }

    const handleRecordAdded = () => {
        setShouldShow(!shouldShow)
        fetchAddData();
        
    }

    return(
        <View style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            { shouldShow == false?(
               <ProfessionalExperenceAdd doctorId = {doctorId} navigation={navigation} onRecordAdded={handleRecordAdded} />
            ):
                <ShowProfessionalExperience data = {fetchData} navigation={navigation}  onNewRecordAdded={handleNewRecordAdded}/>
            } 
            </ScrollView>
        </View>
    )
}

