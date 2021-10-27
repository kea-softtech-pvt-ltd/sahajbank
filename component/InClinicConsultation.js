import React,{ useEffect, useState } from 'react';
import{View,Text,} from 'react-native';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import BoldText from '../component/Text/BoldText';
import BodyText from '../component/Text/BodyText';
import AppointmentTypeName from './AppointmentTypeName';
import ShowSlots from './ShowSlots';

const InClinicConsultation = (props) =>{
    const session = props.session
    
    return(
        <View>
            <View style={{borderColor:Colors.textGrayColor,borderWidth:1,marginTop:20,paddingBottom:20}}>
                <AppointmentTypeName 
                    iconName = {"md-home"}
                    name={"In Clinic Appointment"}
                />
                <ShowSlots sessionData={session}/>
            </View>
            <View style={{borderColor:Colors.textGrayColor,borderWidth:1,borderTopColor:'#fff', paddingTop:10,paddingBottom:20,paddingLeft:10,paddingRight:10}}>
                <BoldText>Click accepts appointment only via calls</BoldText>
                <BodyText>Tocheck for doctor availablity and appointment confirmation please call the clinic</BodyText>
                <View style={[styles.secvenceShow]}>
                    <View style={{borderColor:'#2eb8b8',borderWidth:1,padding:10,flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:20}}>
                        <Ionicons 
                            name="md-call"
                            size={20}
                            style={{paddingRight:10}}
                            color={'#2eb8b8'}
                        />
                        <Text style={styles.textColorContact}>Contact Clinic</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default InClinicConsultation;