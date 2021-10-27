import React,{useState} from "react";
import RNPickerSelect from "react-native-picker-select";
import { StyleSheet, Text, View } from "react-native";

 export default function SelectBox (route) {
    const [ item, setitem ] = useState("Select Sumthing");
    console.log(item)
    return (
        <View style={{borderWidth:1,borderColor:'gray',margin:10}}>   
            <RNPickerSelect
                onValueChange={(item) => setitem(item)}
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
        borderBottomWidth:1,
        borderBottomColor: '#c2c2a3',
       // marginTop:10,marginBottom:10,
        color: 'black',
        paddingRight: 10, // to ensure the text is never behind the icon
      
    },
  });