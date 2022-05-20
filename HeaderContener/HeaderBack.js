import React,{} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import styles from '../constants/Styles';
import { Ionicons } from '@expo/vector-icons';

export default function HeaderBack (props,rightOptions) {
    
    return(
        <View style={styles.ProfileHeaderContener}>
                <Ionicons
                    name = 'md-close-sharp' 
                    size = {25}
                    color={'#ffffff'}
                    onPress = {()=>props.rightOptions.goBack()}
                />
            </View>
    )
}
