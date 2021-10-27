import React,{useState,useEffect} from 'react';
import { Text, TouchableOpacity, View,Image} from 'react-native';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function DoctorLoginComponent(){
    const [shouldShow, setShouldShow] = useState(false);

    const onPress =  () => { 
        if(shouldShow){
            setShouldShow(!shouldShow)
        }
        else{
            setShouldShow(true)
        }
    }  
    return(
        <View>
            <View style={[styles.secvenceShow, styles.spaceBetween]}>
                <View>
                    <View style={[styles.boxCenter,styles.centerContener]}>
                        <TouchableOpacity style={styles.centerContener} onPress={onPress}>
                        <Image
                            source = {require('../assets/images/doctor.png')} 
                            style={styles.loginImage}
                        />
                        <Text style={styles.text}>Doctor</Text>
                        </TouchableOpacity>
                        
                    </View>
                    {!shouldShow ? (
                            <View style={styles.iconContener}>
                            <Ionicons
                                name = 'md-checkmark' 
                                size = {20}
                                color={'#ffffff'}
                            />
                            </View>
                        ) : null
                    }  
                    </View>
                <View>
                <View style={[styles.boxCenter,styles.centerContener]}>
                    <TouchableOpacity style={styles.centerContener} onPress={onPress}>
                    <Image
                        source = {require('../assets/images/patient.jpg')} 
                        style={styles.loginImage}
                    />
                    <Text style={styles.text}>Patient</Text>
                    </TouchableOpacity>
                    </View>
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
            </View>
            {!shouldShow ? (
                <View style={styles.textContenerMarg}>
                    <Text style={styles.messageContentText}>Hello Doctor </Text>
                    <Text style={styles.messageContentText}>Please fill out the form below to get started</Text>
                </View>
            ):null}
            {shouldShow ? (
                <View style={styles.textContenerMarg}>
                    <Text style={styles.messageContentText}>Hello Patient </Text>
                    <Text style={styles.messageContentText}>Please fill out the form below to get started</Text>
                </View>
            ):null}
        </View>
        
    )
}
        
        
        