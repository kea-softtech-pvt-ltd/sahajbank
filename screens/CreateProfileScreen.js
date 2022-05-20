import React,{useState,useEffect} from 'react';
import {View,Text,ScrollView,Button,TouchableOpacity,Image} from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import axios from 'axios';

import Colors from '../constants/Colors';
import styles from '../constants/Styles';
import { StatusBar } from 'react-native'
import AddPersonalDetails from '../component/PersonalDetails.js/AddPersonalDetails';
//import ShowPersonalDetails from '../component/PersonalDetails.js/ShowPersonalDetails';
import { doctorIdPass } from '../Recoil/Atoms/Selector/DoctorIdPass';
import { useRecoilValue,} from 'recoil';
//import UpdateProfessionalDetailsScreen from './UpdateProfessionalDetails';

export default function CreateProfileScreen ({route,navigation}) {
    const doctorId = useRecoilValue(doctorIdPass);
    console.log(doctorId)

    return(
        <View style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <AddPersonalDetails doctorId = {doctorId} navigation={navigation}  />
            </ScrollView>
        </View>
    )
}

