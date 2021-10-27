import React from 'react';
import{View,} from 'react-native';
import styles from '../constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import BoldText from '../component/Text/BoldText';

const AppointmentTypeName = (props) =>{
    return(
        <View style={styles.headerBookAppo}>
            <View style={styles.secvenceShow}>
                <Ionicons 
                    name = {props.iconName}
                    size={20}
                    style={{paddingRight:5}}
                    color={'#3385ff'}
                />
                <BoldText color={'#3385ff'}>{props.name}</BoldText>
            </View>
        </View>
    )
}

export default AppointmentTypeName;