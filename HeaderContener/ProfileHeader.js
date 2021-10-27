import React,{} from 'react';
import {View,Text, Image,} from 'react-native';
import styles from '../constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

export default function ProfileHeader (props,rightOptions) {
   
    return(
         <View style={{padding:10,flex:1,justifyContent:'space-between'}}>    
            <View style={{flexDirection:'row',marginRight:10}}>
                <Ionicons 
                    name = "md-person-circle-outline"
                    size={35}
                    color={'#fff'}
                    onPress={()=>props.rightOptions.navigate('ProfileRoot',{screen: 'Personal',})} 
                />
                <View>
                    <Text style={styles.whiteTextBody}>Your Location</Text>
                    <Text style={styles.getButtonText}>Hadpaser</Text>
                </View>  
            </View>
         </View>
    )
}
