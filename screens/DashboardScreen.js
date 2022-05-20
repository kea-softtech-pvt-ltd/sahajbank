import React,{} from 'react';
import {View,Text,StatusBar,Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import { doctorIdPass } from '../Recoil/Atoms/Selector/DoctorIdPass';
import { useRecoilValue,} from 'recoil';

export default function DashboardScreen({navigation,route}){
    
    const userId = useRecoilValue(doctorIdPass);
    console.log(userId)
    //const userId = '614d84f4934cdb431042e5df';
    return(
        <View style={styles.container}>
           <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={styles.goDashbordContener}>
                <View style={styles.goDashMainContener}>
                    <Ionicons 
                    name = "md-medal-outline"
                    size={40}
                    style={{marginBottom:20}}
                    onPress={()=>navigation.navigate('Profile',userId)}  
                    / >   
                    <Text style={styles.goDashText}>Profile</Text>
                </View>
                <View style={styles.goDashMainContener}>
                    <Ionicons 
                    name = "md-people-outline"
                    size={40}
                    style={{marginBottom:20}}
                    onPress={()=>navigation.navigate('WishList')}  
                / >   
                    <Text style={styles.goDashText}>PatientHistory</Text>
                </View>
                <View style={styles.goDashMainContener}>
                    <Ionicons 
                    name = "md-calendar-outline"
                    size={40}
                    style={{marginBottom:20}}
                    onPress={()=>navigation.navigate('Appointment')}  
                / >   
                    <Text style={styles.goDashText}>Appointment</Text>
                </View>
                <View style={styles.goDashMainContener}>
                    <Ionicons 
                    name = "md-wallet-outline"
                    size={40}
                    style={{marginBottom:20}}
                    onPress={()=>rightOptions.navigate('WishList')}  
                / >   
                    <Text style={styles.goDashText}>Payment</Text>
                </View>
                <View style={styles.goDashMainContener}>
                    <Ionicons 
                    name = "md-thumbs-up-outline"
                    size={40}
                    style={{marginBottom:20}}
                    onPress={()=>navigation.navigate('FeedBack',{screen:'Experences'})}  
                / >   
                    <Text style={styles.goDashText}>PatientStories</Text>
                </View>
                <View style={styles.goDashMainContener}>
                    <Ionicons 
                    name = "md-calendar-outline"
                    size={40}
                    style={{marginBottom:20}}
                    onPress={()=>navigation.navigate('Schedule')}  
                / >   
                    <Text style={styles.goDashText}>Calendar</Text>
                </View>
                </View>
            </ScrollView> 
        </View>
    )
}