import React,{} from 'react';
import {View,Text,StatusBar,ScrollView,TouchableOpacity} from 'react-native';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';

export default function Clinic(){

    return(
        <View style={[styles.container, styles.padd]}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}> 
                <View style={{justifyContent:'center',alignItems:'center',marginTop:30}}>
                    <View style={styles.appButtonContainer}>
                        <TouchableOpacity>
                            <Text style={styles. getButtonText}>Add Clinic</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
       
    )
}