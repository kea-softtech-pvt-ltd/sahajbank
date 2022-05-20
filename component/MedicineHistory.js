import React,{useState} from 'react';
import {View,Text,StatusBar,ScrollView,TextInput,TouchableOpacity} from 'react-native';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import MedicineTiltle from './MedicineTitle';
import { Ionicons } from '@expo/vector-icons';
import Patient from '../data/Patient';

export default function MedicinHistory(){
    const [PatientData, setPatientData] = useState(Patient);

    return(
        <View style={[styles.container, styles.padd]}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}> 
                <MedicineTiltle />
                {
                    PatientData.map((data, key) =>(
                        <View style={[styles.option,  styles.lastOption]} key={key}>
                            <View style={styles.feedbackRowPad}>
                                <View style={{flex:1,flexDirection:'row-reverse'}}>
                                    <Text>1</Text>
                                </View>
                                <View style={{flex:4,flexDirection:'row-reverse'}}>
                                    <Text>02/05/2021</Text>
                                </View>
                                <View style={{flex:2,flexDirection:'row-reverse'}}>
                                    <Ionicons
                                        name="md-eye-sharp" 
                                        color={Colors.primeryColor}
                                        size={25}
                                    />
                                </View>
                            </View>
                        </View>
                    ))
                }
                <View style={{justifyContent:'center',alignItems:'center',marginTop:30}}>
                    <View style={styles.appButtonContainer}>
                        <TouchableOpacity >
                            <Text style={styles. getButtonText}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </ScrollView>
        </View>
       
    )
}