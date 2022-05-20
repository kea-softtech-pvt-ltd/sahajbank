import React,{useState,useEffect} from 'react';
import {View,Text,ScrollView,} from 'react-native';
import axios from 'axios';
import { useIsFocused } from "@react-navigation/native";

import Colors from '../constants/Colors';
import styles from '../constants/Styles';
import { StatusBar } from 'react-native';
import EducationalDetailsAdd from '../component/EducationalDetailsAdd';
import ShowDetails from '../component/ShowDetails';
import { doctorIdPass } from '../Recoil/Atoms/Selector/DoctorIdPass';
import { useRecoilValue,} from 'recoil';

export default function EducationalDetailsScreen ({route,navigation}) {
    const doctorId = useRecoilValue(doctorIdPass);
    console.log(doctorId)

    console.log(route)
   // const doctorId = route.params.itemId.id
    const [shouldShow, setShouldShow] = useState(false);
    console.log(shouldShow, "init");
    const [fetchData,setFetchData] = useState([]);
    const isFocused = useIsFocused();
    
    const educationData = `http://192.168.29.239:9000/api/fetchEduData/${doctorId}`;

    useEffect(() => {
        console.log(shouldShow)
        if(isFocused){ 
            fetchAddData();
        } 
        console.log(shouldShow)     
    },[isFocused]);
  
    const fetchAddData = async () =>{
        const result = await axios.get(educationData); 
        console.log(result.data);
        setFetchData(result.data);
        if(result.data.length > 0) {
            setShouldShow(true)
        }       
    }
    const handleNewRecordAdded =() =>{
        setShouldShow(false)
    }
    const handleRecordAdded = () => {
        console.log("hhhhhhh")
        setShouldShow(!shouldShow)
        fetchAddData();    
    }

    return(
        <View style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            { shouldShow == false?(
                <EducationalDetailsAdd doctorId = {doctorId} navigation={navigation} onRecordAdded={handleRecordAdded} />
            ):
                <ShowDetails data = {fetchData} navigation={navigation} onNewRecordAdded={handleNewRecordAdded} />
            } 
            </ScrollView>
        </View>
    )
}

