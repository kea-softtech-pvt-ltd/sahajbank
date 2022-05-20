import React,{useState} from "react";
import RNPickerSelect from "react-native-picker-select";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";
import styles from '../constants/Styles';

 export default function SelectBox (route,) {
    return (
        <View style={styles.selectBoxContener}>    
            <RNPickerSelect
                onValueChange={(value) => { route.setValue(value)}}
                items={route.item}
                value = {route.values}
                style={pickerSelectStyles}  
            />
        </View>
    );
 }

 const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderBottomWidth:1,
        borderBottomColor: '#c2c2a3',
        marginTop:10,marginBottom:10,
        color: 'black',
        paddingRight: 10, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        height:50,
        fontSize: 16,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderBottomWidth:1,
        borderBottomColor: '#c2c2a3',
       // marginTop:10,marginBottom:10,
        color: 'black',
        paddingRight: 10, // to ensure the text is never behind the icon
      
    },
  });