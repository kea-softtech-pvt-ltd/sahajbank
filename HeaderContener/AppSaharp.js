import React,{} from 'react';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

function AppSharp  ({rightOptions}) {
    return(
        <Ionicons 
            name = "md-apps-sharp"
            size={20}
            color={'#ffffff'}
            style={{paddingLeft: 20,}}
            onPress = {()=>rightOptions.goBack()}
        />  
    )
}

export default AppSharp;