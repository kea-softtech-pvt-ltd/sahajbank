import React,{} from 'react';
import {View,Text,} from 'react-native';
import styles from '../constants/Styles';

export default function MedicineTiltle(){
 
    return(
        <View style={[styles.option,  styles.lastOption]}>
            <View style={styles.feedbackRowPad}>
                <View style={{flex:1,flexDirection:'row-reverse'}}>
                    <Text style={{fontSize:16,fontWeight:'500',}}>Sr No</Text>
                </View>
                <View style={{flex:4,flexDirection:'row-reverse'}}>
                    <Text style={{fontSize:16,fontWeight:'500'}}>Priscription Date&Time</Text>
                </View>
                <View style={{flex:2,flexDirection:'row-reverse'}}>
                    <Text style={{fontSize:16,fontWeight:'500',}}>Action</Text>
                </View>
                
            </View>
        </View>
    )
}