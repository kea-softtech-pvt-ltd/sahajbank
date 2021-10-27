import React,{useEffect,useState} from 'react';
import{View,StatusBar, ScrollView} from 'react-native';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import VideoConsultation from '../component/VideoConsultation';
import InClinicConsultation from '../component/InClinicConsultation';
import BoldText from '../component/Text/BoldText';
import BodyText from '../component/Text/BodyText';

const ShowSessionScreen = ({route}) =>{

    const { _id,doctorId } = route.params.clinicData
    const [clinicSessions, setClinicSessions] = useState([[],[]])
    //const [videoClinicSessions, setVideoClinicSessions] = useState([])
    const fetchSession = `http://192.168.29.239:9000/api/fetcSessionSlots/${doctorId}/${_id}`
    
    useEffect(()=>{
        fetchData()
        console.log("i am here")
    },[])

    const fetchData = async () =>{
        console.log("fetch data")
        const result = await axios.get( fetchSession); 
        let tempSessions = [] 
        const videoAppClinics = getDataBySpeciality(result.data, "VideoAppointment") 
        tempSessions.push(videoAppClinics)
        const inClinics = getDataBySpeciality(result.data, "InClinicAppointment") 
        tempSessions.push(inClinics)
        console.log(tempSessions)
        //setVideoClinicSessions(videoAppClinics)
       setClinicSessions(tempSessions)
    }

    function getDataBySpeciality(data, flag) {
        console.log("getDataBySpeciality", flag)
        const result = data.filter(function(val, key){
            return (val.Appointment == flag)
        })
        return result;
    }

    return(
        <View style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <View style={{padding:10,backgroundColor:'#fff',marginTop:10}}>
                <BoldText>Select a Time Slot for Appointment</BoldText>
                <View style={styles.secvenceShow}>
                    <Ionicons name='checkmark-sharp' size={15} color={'green'} style={{padding:3,marginTop:4}}/>
                    <BodyText lineHeight={25}>Get Instant Conformetion for FREE!</BodyText>
                </View>
            </View> 
            <ScrollView style={styles.container} >
                <View style={styles.contenerMarg}>
                    {clinicSessions[0].length > 0? (
                        <VideoConsultation session={clinicSessions[0]}  />
                    ):null}
                    {clinicSessions[1].length > 0? (
                        <InClinicConsultation session={clinicSessions[1]}  />
                    ):null}
                </View>
            </ScrollView>
        </View>
    )
}

export default ShowSessionScreen;