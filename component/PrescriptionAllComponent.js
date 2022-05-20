import React,{useState} from 'react';
import {View,Text,ScrollView,CheckBox,StyleSheet} from 'react-native';
import styles from '../constants/Styles';
import InputHandler from '../component/InputeText';
import RNPickerSelect from "react-native-picker-select";
import PrescriptionMG from '../data/PrescriptionMG';
import MedicinName from '../data/MedicinName';

export default function PrescriptionAllComponent(){
    const [enteredDay, setDay] = useState('');
    const [isSelectedMorning, setSelectionMorning] = useState(false);
    const [isSelectedAfternoon, setSelectionAfternoon] = useState(false);
    const [isSelectedEvening, setSelectionEvening] = useState(false);
    const [isSelectedNight, setSelectionNight] = useState(false);
    const [ medicineName, setMedicinName ] = useState("Select Sumthing");
    const [ mg, setmg ] = useState("Select Sumthing");

    const dayInputHandler = inputText => {
        setDay(inputText.replace(/[^0-9]/g, ''));
    };
    
    return(
        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={[styles.option,  styles.lastOption]} >
                <View style={styles.feedbackRowPad}>
                    <View style={{}}>
                        <View style={styles.prescriptionHed}>
                                <Text style={{fontSize:16,fontWeight:'500',}}>Medicin name</Text>
                        </View>
                        <RNPickerSelect
                            onValueChange={(medicineName) => setMedicinName(medicineName)}
                            items={MedicinName}
                            style={pickerSelectStyles}    
                        />
                    </View>
                    <View style={{}}>
                        <View style={styles.prescriptionHed}>
                            <Text style={{fontSize:16,fontWeight:'500',}}>mg/gm</Text>
                        </View>
                        <RNPickerSelect
                            onValueChange={(mg) => setmg(mg)}
                            items={PrescriptionMG}
                            style={pickerSelectStyles}    
                        />
                    </View>
                    <View style={{}}>
                        <View style={styles.prescriptionHed}>
                            <Text style={{fontSize:16,fontWeight:'500',}}>Days</Text>
                        </View>
                        <View style={styles.SectionStyle}>
                        <InputHandler
                            placeholder = 'Days'
                            maxLength={30}
                            onChangeText={dayInputHandler}
                            value={enteredDay}
                        />
                    </View>
                    </View >
                    <View style={{}}>
                        <View style={styles.prescriptionHed}>
                            <Text style={{fontSize:16,fontWeight:'500',textAlign:'center'}}>Morning</Text>
                        </View>
                        <View style={{justifyContent:'center',alignItems:'center',}}>
                        <CheckBox
                            value={isSelectedMorning}
                            onValueChange={setSelectionMorning}
                            style={styles.checkboxContener}
                        />
                        </View>
                    </View>
                    <View style={{}}>
                        <View style={styles.prescriptionHed}>
                            <Text style={{fontSize:16,fontWeight:'500',textAlign:'center'}}>Afternoon</Text>   
                        </View>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <CheckBox
                                value={isSelectedAfternoon}
                                onValueChange={setSelectionAfternoon}
                                style={styles.checkbox}
                            />
                        </View>
                    </View>
                    <View style={{}}>
                        <View style={styles.prescriptionHed}>
                            <Text style={{fontSize:16,fontWeight:'500',textAlign:'center'}}>Evening</Text>
                        </View>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <CheckBox
                                value={isSelectedEvening}
                                onValueChange={setSelectionEvening}
                                style={styles.checkbox}
                            />
                        </View>
                    </View>
                    <View style={{}}>
                        <View style={styles.prescriptionHed}>
                            <Text style={{fontSize:16,fontWeight:'500',textAlign:'center'}}>Night</Text>
                        </View>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <CheckBox
                                value={isSelectedNight}
                                onValueChange={setSelectionNight}
                                style={styles.checkbox}
                            />
                        </View>
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
        color: 'black',
        width:170,
    },
  });