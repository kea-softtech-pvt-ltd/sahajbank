import React,{ useEffect,useState } from 'react';
import{View,} from 'react-native';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import BoldText from '../component/Text/BoldText';
import BodyText from '../component/Text/BodyText';
import AppointmentTypeName from './AppointmentTypeName';
import ShowSlots from './ShowSlots';

const VideoConsultation = (props) =>{
    const session = props.session
    console.log("i m in vc")
    return(
        <View style={{borderColor:Colors.textGrayColor,borderWidth:1,marginTop:20,paddingBottom:20}}>
            <AppointmentTypeName
                iconName={"md-person-circle-outline"}
                name={"Video Appointment"}
            />
            <ShowSlots sessionData={session}/>
        </View>     
    )
}

export default VideoConsultation;