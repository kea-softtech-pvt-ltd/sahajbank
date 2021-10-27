import React,{} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const AppointmentDetails = props => {
    return(
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
            <View style={styles.container}>
                <View style={[styles.secvenceShow,styles.spaceBetween]}>
                    <Text style={styles.smallText}>{props.children}AM</Text>
                    <View style={styles.secvenceShow}>
                        <Ionicons 
                            name = "md-wallet-outline"
                            size={20}
                            color={Colors.textGrayColor}    
                        />
                        <Text>300</Text>
                    </View>    
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default AppointmentDetails;