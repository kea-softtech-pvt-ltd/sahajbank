import React,{useState} from "react";
import RNPickerSelect from "react-native-picker-select";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";

 export default function SelectBoxHandler (route) {
    const [ select, setValue ] = useState("Select Sumthing");
    
    return ( 
        <View style={{borderWidth:1,borderColor:"#d2d2d2",marginTop:10,marginBottom:10}}>
            <RNPickerSelect
                onValueChange={(select) => setValue(select)}
                items={route.item}
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
        fontSize: 16,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderWidth:1,
        borderColor: '#c2c2a3',
       // marginTop:10,marginBottom:10,
        color: 'black',
        paddingRight: 10, // to ensure the text is never behind the icon
      
    },
  });