import React,{} from 'react';
import { Button, View,StyleSheet,Text,TouchableOpacity} from 'react-native';

export default function CustomButton (props,onPress){
   
    return(
        <View style={styles.appButtonContainer}>
            <TouchableOpacity onPress={onPress}>
            <Text style={styles. getButtonText}>Continue</Text>
            </TouchableOpacity>
        </View>
           
    )
}

const styles = StyleSheet.create({
    appButtonContainer: {
        height:50,
        elevation: 8,
        backgroundColor: "#1aa3ff",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom:20
      },
    
})
