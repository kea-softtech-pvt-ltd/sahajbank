import React,{} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import styles from '../constants/Styles';

export default function QualificationAdd (props,rightOptions) {
    return(
        <View style={styles.ProfileHeaderContener}>    
            <TouchableOpacity onPress = {()=>props.rightOptions.navigate('AddEducation')}>
                <Text style={{fontSize:15,color: '#ffffff',fontWeight: 'bold'}}>ADD</Text>
            </TouchableOpacity>
        </View>
    )
}
