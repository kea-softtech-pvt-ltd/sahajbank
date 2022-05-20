import React,{useState,useEffect} from 'react';
import {View,Text,TouchableOpacity,StatusBar} from 'react-native';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { useIsFocused } from "@react-navigation/native";
import { doctorIdPass } from '../Recoil/Atoms/Selector/DoctorIdPass';
import { useRecoilValue,} from 'recoil';

import SaveButton from '../HeaderContener/SaveHed';

export default function AddClinicScreen ({ navigation, route }) {
    // console.log(route); 
    const doctorId = useRecoilValue(doctorIdPass);
    console.log(doctorId)

    const [visitingClinic, setVisitingClinic] =useState([]);
    const [owendClinic, setOwendClinic] =useState([]);
    
    const isFocused = useIsFocused();
    const urlVisitingClinic =  `http://192.168.29.239:9000/api/fetchclinic/${doctorId}`;
    const urlOwendClinic = `http://192.168.29.239:9000/api/fetchownclinic/${doctorId}`;

    useEffect(() => {
        if(isFocused){ 
            fetchData();
            fetchOwendClinic();
        }  
      },[isFocused]);

    const fetchData = async () => {
        const result = await axios.get(urlVisitingClinic);
        console.log(result);
        setVisitingClinic(result.data);
    };
    const fetchOwendClinic= async () =>{
        const result = await axios.get(urlOwendClinic);
        console.log(result);
        setOwendClinic(result.data);
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity  onPress={()=>navigation.navigate('Root', { screen: 'DashboardRoot',screen: 'App',doctorId:doctorId})} >
                <SaveButton/>
            </TouchableOpacity>
        ),
        });
    }, [navigation,]);

    return(
        <View style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            {visitingClinic.length == 0 ? (
                <View style={{flex:1,justifyContent: 'flex-start',margin:20}}>
                <Text style = {styles.MainTextAddClinic}> Add Clinic to your profile</Text>
                        <Text style={styles.getInputText}>Clinic owner will provide proof to ownership.</Text>
                        <Text style={styles.getInputText}>Not Visiting consultant will not be able to edit information for there clinic</Text>
                </View>
            ):(
                <View style={{flex:1,margin:20,}}>
                    <Text style = {styles.MainTextAddClinic}>Visiting Clinic</Text>
                    <View>
                        {
                            visitingClinic.map((item,id) =>(
                                <View style={[styles.secvenceShow,]} key={id}>
                                    <View style={{marginTop:5,marginBottom:5,flex:4}}>
                                            <Text style={styles. headingText}>{item.clinicName}</Text>
                                            <Text style={styles.getInputText}>{item.address}</Text>
                                    </View>
                                    <View>
                                    <Ionicons  style={styles.inputIconStyle}
                                        name = "alarm-outline"
                                        size={30}
                                        color={Colors.primeryColor}
                                        style={{margin:10}}
                                        onPress={()=>navigation.navigate('AddSession',item )}
                                    />
                                    </View> 
                                </View>
                            ))
                        }    
                    </View>
                    <Text style={styles.MainTextAddClinic}>Owned Clinic</Text>
                     <View>
                         {
                            owendClinic.map((item,id) =>(
                                <View style={[styles.secvenceShow,]} key={id}>
                                    <View style={{marginTop:5,marginBottom:5,flex:4}}>
                                            <Text style={styles. headingText}>{item.clinicName}</Text>
                                            <Text style={styles.getInputText}>{item.address}</Text>
                                    </View>
                                    <View>
                                    <Ionicons  style={styles.inputIconStyle}
                                        name = "alarm-outline"
                                        size={30}
                                        color={Colors.primeryColor}
                                        style={{margin:10}}
                                        onPress={()=>navigation.navigate('AddSession',item )}
                                    />
                                    </View> 
                                </View>
                            ))
                        }    
                    </View>
                </View>   
            )}
            
            <View style={{flex:1,justifyContent: 'flex-end',flexDirection:'column',margin:20}}>
            <View style={styles.appButtonContainer}>
                        <TouchableOpacity onPress={()=> navigation.navigate('AddClinic',doctorId)}>
                        <Text style={styles. getButtonText}>ADD AS VISITING CLINIC</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.appButtonContainer}>
                            <TouchableOpacity onPress={()=> navigation.navigate('AddOwendClinic',doctorId)}>
                            <Text style={styles. getButtonText}>ADD AS OWNED CLINIC</Text>
                            </TouchableOpacity>
                    </View>
            </View>
        </View>
    )
}