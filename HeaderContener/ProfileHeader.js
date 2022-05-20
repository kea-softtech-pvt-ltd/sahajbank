import React,{} from 'react';
import {View,Text,} from 'react-native';
import styles from '../constants/Styles';

export default function ProfileHeader (props,rightOptions) {
   
    return(
         <View style={{padding:10}}>    
            <Text style={{fontSize:16,color: '#ffffff',fontWeight:'bold',textAlign:'center'}}>{props.profileTitle}</Text>
         </View>
    )
}
