import React,{useState} from 'react';
import {View,Text,ScrollView,StatusBar} from 'react-native';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import Patient from '../data/Patient';
import CalenderShow from '../component/Calendar';

function ScheduleScreen ({navigation}) {
    const [PatientData, setPatientData] = useState(Patient);
    
    return(
        <View style={styles.toGetContener}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <ScrollView style={styles.toGetContener} contentContainerStyle={styles.contentContainer}>
                <View style={styles.calenderabaox}>
                    <CalenderShow />
                </View>
                {
                    PatientData.map((data, key) =>(
                        <View style={styles.scheduleContenerStyle} key={key}>
                            <View style={styles.feedbackRowPad}>
                                <View style={{flex:2,}}>
                                    <Text style={styles.subTextGrayColorFeedback}>{data.time}</Text>
                                </View>
                                <View style={{flex:4,}}>
                                    <Text style={{fontSize:16,fontWeight:'500'}}>{data.name}</Text>
                                    <Text style={styles.subTextGrayColorFeedback}>{data.reason}</Text>
                                </View>
                                <View style={{flex:1,flexDirection:'row-reverse'}}>
                                    <Ionicons
                                        name = 'md-ellipsis-horizontal-sharp' 
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

export default ScheduleScreen ;