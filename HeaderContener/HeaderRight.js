import React,{} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import styles from '../constants/Styles';
import { Ionicons } from '@expo/vector-icons';

export default function headerRight (props,rightOptions) {
    return(
        <View style={styles.ProfileHeaderContener}>    
            <TouchableOpacity onPress = {()=>props.rightOptions.goBack()}>
                <Text style={{fontSize:15,color: '#ffffff',fontWeight: 'bold'}}>SAVE</Text>
            </TouchableOpacity>
        </View>
    )
}
