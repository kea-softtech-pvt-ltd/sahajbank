import React,{} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import styles from '../constants/Styles';

export default function DoneContener (props,rightOptions) {
    return(
        <View style={styles.ProfileHeaderContener}>    
            <TouchableOpacity onPress = {()=>props.rightOptions.navigate('DashboardRoot',{screen: 'App',})}>
                <Text style={{fontSize:15,color: '#ffffff',fontWeight: 'bold'}}>DONE</Text>
            </TouchableOpacity>
        </View>
    )
}
