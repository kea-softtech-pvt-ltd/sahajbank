import React,{useState} from 'react';
import {View,Text,StatusBar,ScrollView,TextInput,TouchableOpacity} from 'react-native';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import DatePicker from 'react-native-datepicker'

export default function NewFollowUp(){
    const [date, setDate] = useState('');

    
    return(
        <View style={[styles.container, styles.padd]}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}> 
                <DatePicker
                    style={{width: 200}}
                    date={date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                    }}
                    onDateChange={setDate}
                />
                <View style={{justifyContent:'center',alignItems:'center',marginTop:50}}>
                    <View style={styles.appButtonContainer}>
                        <TouchableOpacity >
                            <Text style={styles. getButtonText}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
       
    )
}