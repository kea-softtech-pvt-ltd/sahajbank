import React,{useState} from 'react';
import {View,Text,ScrollView,CheckBox,StyleSheet} from 'react-native';
import styles from '../constants/Styles';
import SelectBox from './SelectBox';
import City from '../data/City';
import Input from './Input';
import RNPickerSelect from "react-native-picker-select";


export default function PrescriptionAddedComponent(){
    const [enteredDay, setDay] = useState('');
    const [isSelectedMorning, setSelectionMorning] = useState(false);
    const [isSelectedAfternoon, setSelectionAfternoon] = useState(false);
    const [isSelectedEvening, setSelectionEvening] = useState(false);
    const [isSelectedNight, setSelectionNight] = useState(false);
    const [ language, setLanguage ] = useState("Select Sumthing");

    const dayInputHandler = inputText => {
        setDay(inputText.replace(/[^0-9]/g, ''));
      };
    
    return(
        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={[styles.option,  styles.lastOption]} >
                <View style={styles.feedbackRowPad}>
                    <View style={{justifyContent:'center',alignItems:'center',}}>
                    <RNPickerSelect
                        onValueChange={(language) => setLanguage(language)}
                        items={City}
                        style={pickerSelectStyles} 
                        
                    />
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center',}}>
                    <RNPickerSelect
                        onValueChange={(language) => setLanguage(language)}
                        items={City}
                        style={pickerSelectStyles} 
                        
                    />
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center',}}>
                        <Input
                            style={styles.inputTextDay}
                            blurOnSubmit
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder = ''
                            maxLength={30}
                            underlineColor = 'transperent'
                            onChangeText={dayInputHandler}
                            value={enteredDay}
                        />
                    </View>
                    <View style={{}}>
                        <View style={{justifyContent:'center',alignItems:'center',}}>
                        <CheckBox
                            value={isSelectedMorning}
                            onValueChange={setSelectionMorning}
                            style={styles.checkboxContener}
                        />
                        </View>
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center',}}>
                        <CheckBox
                            value={isSelectedAfternoon}
                            onValueChange={setSelectionAfternoon}
                            style={styles.checkbox}
                        />
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center',}}>
                        <CheckBox
                            value={isSelectedEvening}
                            onValueChange={setSelectionEvening}
                            style={styles.checkbox}
                        />
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center',}}>
                        <CheckBox
                            value={isSelectedNight}
                            onValueChange={setSelectionNight}
                            style={styles.checkbox}
                        />
                    </View>
                </View>
                
            </View>
        </ScrollView>       
    )
}

const pickerSelectStyles = StyleSheet.create({
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderBottomWidth:1,
        borderBottomColor: '#c2c2a3',
        //marginTop:10,marginBottom:10,
        color: 'black',
        paddingRight: 10, // to ensure the text is never behind the icon
        width:170,
    },
  });