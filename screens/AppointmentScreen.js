import React,{useState} from 'react';
import {View,Text,ScrollView,StatusBar,TouchableOpacity} from 'react-native';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import Patient from '../data/Patient';

export default function AppointmentScreen ({navigation}){
    const [PatientData, setPatientData] = useState(Patient);

    return(
        <View style={styles.toGetContener}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <ScrollView style={styles.toGetContener} contentContainerStyle={styles.contentContainer}>
                {
                    PatientData.map((data, key) =>(
                        <View style={[styles.option,  styles.lastOption]} key={key}>
                            <View style={styles.feedbackRowPad}>
                                <View style={{flex:3,}}>
                                    {/* <TouchableOpacity onPress={()=>navigation.navigate('PationtSelected',{screen: 'Investigation',})}> */}
                                    <TouchableOpacity onPress={()=>navigation.navigate('PationtSelected')}>

                                        <Text style={{fontSize:16,fontWeight:'500'}}>{data.name}</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:2.3,}}>
                                    <Text style={styles.subTextGrayColorFeedback}>{data.time}</Text>
                                </View>
                                <View style={{flex:2.8,}}>
                                    <Text style={styles.subTextGrayColorFeedback}>{data.phone}</Text>
                                </View>
                                <View style={{flex:1}}>
                                    <TouchableOpacity>
                                        <Text style={styles.subTextGrayColorFeedback}>Pay</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:1}}>
                                    <Text style={styles.subTextGrayColorFeedback}>View</Text>
                                </View>
                                <View style={{flex:1,flexDirection:'row-reverse'}}>
                                    <Ionicons
                                        name = 'md-close-outline' 
                                        size = {25}
                                    />
                                </View>
                            </View>
                        </View>
                    ))
                }
               
            </ScrollView>
        </View>
    )
}