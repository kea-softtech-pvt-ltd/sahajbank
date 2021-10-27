import React,{useState,useEffect} from 'react';
import{View,Text,StatusBar,Image,TouchableOpacity,ScrollView} from 'react-native';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import BoldText from '../component/Text/BoldText';
import BodyText from '../component/Text/BodyText';
import VideoConsultation from '../component/VideoConsultation';
import InClinicConsultation from '../component/InClinicConsultation';
import Experience from '../component/TotalExperience';
import Clinic from '../component/Clinic';

export default function DoctorProfileScreen({route,navigation}){

    const [DoctorData, setDoctorData] = useState([]);
    
    const doctorId = (route.params.doctorId);
    const fetchDoctorDetails = `http://192.168.29.239:9000/api/doctor/${doctorId}`;
   
    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () =>{
        const result = await axios.get(fetchDoctorDetails);         
        setDoctorData(result.data[0])     
    }

    return(
        <View style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.contenerMarg}>
                        <View style={styles.secvenceShow}>
                                <View style={{flex:1.7}}>
                                <Image
                                    style={styles.bookImage}
                                    source = {require('../assets/images/profileImage1.jpg')} 
                                    onPress={()=>navigation.navigate('Profile')}
                                />
                            </View>
                            <View style={{flex:4,}}>
                                <BoldText>DR.{DoctorData.name}</BoldText>
                                {DoctorData["educationList"]?
                                    (
                                        <View>
                                            {DoctorData.educationList.map((educationItem,id)=>(
                                                <View key={id}>
                                                   <BodyText>{educationItem.specialization}</BodyText>
                                                   <BodyText>{educationItem.degree}</BodyText>
                                                   <BodyText>{educationItem.collage}</BodyText>
                                                </View>
                                            ))}
                                        </View>
                                    )   
                                :null}   
                                {DoctorData["experienceList"]?
                                    (
                                        <Experience experienceData={DoctorData.experienceList}/>
                                    ):null
                                }
                                <View style={styles.secvenceShow}>
                                    <Ionicons 
                                        name="md-thumbs-up"
                                        size={20}
                                        color={'green'}
                                    />
                                    <Text style={styles.textBookAppo}>95%</Text> 
                                    <Ionicons 
                                        name="md-chatbox-ellipses"
                                        size={20}
                                        style={{marginLeft:10}}
                                        color={'green'}
                                    />
                                    <TouchableOpacity>
                                        <Text style={styles.textBookAppo}>100 Paitent Stores</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>     
                        </View>
                        {(DoctorData["clinicList"] || DoctorData["ownClinicList"]) ?
                            (
                                <Clinic ownClinic={DoctorData["ownClinicList"]} 
                                    clinicData={DoctorData["clinicList"]}
                                    navigation={navigation}/> 
                            ):null
                        } 
                    </View>
            </ScrollView>
        </View>
    )
}