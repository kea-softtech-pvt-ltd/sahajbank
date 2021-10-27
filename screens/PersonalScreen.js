import React,{useState, useEffect} from 'react';
import {View,Text,StatusBar,TouchableOpacity} from 'react-native';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export default function PersonalScreen({navigation}){
    const [patientData, setPatientData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/fetch",{
            method: 'GET',          
          })
          .then((response) => response.json())
          .then((json) => setPatientData(json))
          .catch((error) => console.error(error))
    }, [])
    
    return(
        <View style={{flex:1,backgroundColor:Colors.textGrayColor}}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {
                   patientData.map((item,key)=>(
                        <View  key={key}>
                            <View style={[styles.secvenceShow,styles.personalContener,]}>
                                <View >
                                    <Text style={styles.textColorContact}>Name</Text>
                                    <Text style={styles.textBookAppo}>{item.name}</Text>
                                </View>
                                <View style={styles.centerContener}>
                                    <Ionicons 
                                        name = "md-person-circle-outline"
                                        size={45}
                                        color={Colors.textGrayColor}
                                        onPress={()=>props.rightOptions.navigate('ProfileRoot',{screen: 'Personal',})} 
                                    />
                                    <Text style={styles.textColorContact}>Edit</Text>
                                </View>
                            </View>
                            <View style={[styles.personalContenerSecond,]}>
                                <View style={{marginTop:5,marginBottom:5}}>
                                    <Text style={styles.textColorContact}>Contact Number</Text>
                                    <Text style={styles.textBookAppo}>{item.phone}</Text>
                                </View>
                                <View style={{marginTop:5,marginBottom:5}}>
                                    <Text style={styles.textColorContact}>Email ID</Text>
                                    <Text style={styles.textBookAppo}>{item.email}</Text>
                                </View>
                                <View style={[styles.secvenceShow,styles.medicalContener,]} >
                                <View>
                                    <Text style={styles.textColorContact}>Gender</Text>
                                    {/* <Text style={styles.textBookAppo}>{item.diseases}</Text> */}
                                </View>
                                <View style={styles.centerContener}>
                                    <TouchableOpacity onPress={()=>navigation.navigate('AddInput')}>
                                        <Text style={styles.textColorContact}>add</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            </View> 
                        </View>
                       
                    ))
                }    
            </ScrollView>
        </View>
    )
}