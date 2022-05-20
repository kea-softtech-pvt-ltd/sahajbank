import React,{useState,useEffect} from 'react';
import { Text, TouchableOpacity, View, Keyboard,Alert,StatusBar,Image} from 'react-native';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function PatientLoginComponent(){
    const [shouldShow, setShouldShow] = useState(false);

    return(
        <View style={[styles.boxCenter,styles.centerContener]}>
            <TouchableOpacity style={styles.centerContener} onPress={() => setShouldShow(!shouldShow)}>
            <Image
                source = {require('../assets/images/patient.jpg')} 
                style={styles.loginImage}
            />
            <Text style={styles.text}>Patient</Text>
            </TouchableOpacity>
            {shouldShow ? (
                    <View style={styles.iconContener}>
                    <Ionicons
                        name = 'md-checkmark' 
                        size = {25}
                        color={'#ffffff'}
                    />
                    </View>
                ) : null
            }  
        </View>
    )
}
        
        
        