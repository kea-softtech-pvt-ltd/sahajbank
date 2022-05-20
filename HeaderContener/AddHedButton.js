import React from 'react';
import { View,Text,TouchableOpacity } from 'react-native';
import styles from '../constants/Styles';

export default function AddHedButton (props,rightOptions) {
    return(
        <View style={styles.ProfileHeaderContener}>    
            {/* <TouchableOpacity onPress={props}> */}
                <Text style={{fontSize:15,color: '#ffffff',fontWeight: 'bold'}}>Add</Text>
            {/* </TouchableOpacity> */}
        </View>
    )
}