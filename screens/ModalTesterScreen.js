import React, {useState,useEffect} from 'react';
import {Button, Text, View,TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons';
import { Checkbox } from 'react-native-paper';
import SelectBox from '../component/SelectBox';
import TimeSlot from '../data/TimeSlote';
import Styles from '../constants/Styles';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import InputHandler from '../component/InputeText';
import axios from 'axios';
import moment from 'moment';

// import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import ShowAllSlots from '../component/ShowlSlots/ShowAllSlots';

function ModalTesterScreen({navigation,route}) {
    
    const [isModalVisible, setModalVisible] = useState(true);
    const [checked, setChecked] = React.useState('null');
    const [timeSlote, setTimeSlote] = useState(20);
    const [day,setday] = useState(route.params.Session);
    const [fromTime, setFromTime] = useState(new Date());
    const [toTime, setToTime] = useState(new Date());
    const [enteredFees, setClinicFees] = useState('')
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isDatePickerVisibleTo, setDatePickerVisibilityTo] = useState(false);
    
    const feesInputHandler = inputText => {
        setClinicFees(inputText.replace(/[^0-9]/g, ''));
    };

    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
    
    const handleConfirm = (newTime) => {
        const currentTime = newTime || date;
        setFromTime(currentTime);
        hideDatePicker();  
    };

    const showDatePickerTo = () => {
        setDatePickerVisibilityTo(true);
      };
    
      const hideDatePickerTo = () => {
        setDatePickerVisibilityTo(false);
      };
    
    const handleConfirmTo = (newTime) => {
        const currentTime = newTime || date;
        setToTime(currentTime);
        hideDatePicker();
    };

    const saveData  = async () => { 
        const clinicId = route.params.item.params._id
        const doctorId = route.params.item.params.doctorId

        const bodyData = {
            "doctorId": doctorId,
            "clinicId": clinicId,
            "fromTime": fromTime,
            "toTime":toTime,
            "timeSlot":timeSlote,
            "Appointment":checked,
            "fees":enteredFees,
            "day" : day
        }
        axios.post("http://192.168.29.239:9000/api/setSession", bodyData)
        .then(function(response){
        console.log(response);   
        })
        navigation.goBack('')
    }

    return (
      <View style={{flex: 1}}>
        <Modal isVisible={isModalVisible} deviceHeight={100} style={Styles.popupModalStyle}>
            <View style={{flex: 1,backgroundColor:'#ffffff',borderRadius:5,padding:10,}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text>ADD SESSION</Text>
                    <Ionicons
                        name = 'md-close-outline' 
                        size = {25}
                        color={'black'}
                        onPress = {()=>navigation.goBack()}
                    />
                </View>
                <Text style={{marginBottom:10}}>SESSION {day}</Text> 
                <View style={[styles.secvenceShow,]}>
                    <View style={{flex:1,paddingRight:10}}>
                        <Text style={styles.getInputedText}>Time Slote</Text>
                        <SelectBox 
                            item = {TimeSlot}
                            setValue = {setTimeSlote}
                        />   
                    </View>
                    <View style={{flex:1}}>
                        <Text style={styles.getInputedText}>Doctor Fees</Text>
                        <View style={styles.SectionStyle}>
                            <InputHandler
                                placeholder = 'Enter Fees'
                                keyboardType="number-pad"
                                maxLength={30}
                                onChangeText={feesInputHandler}
                                value={enteredFees}
                            />
                        </View>
                    </View>
                </View>
                <View style={[styles.secvenceShow,]}>
                    <View style={{flex:1,paddingRight:10}}>
                        <TouchableOpacity onPress={showDatePicker}>
                            <Text style={styles.getInputedText}>From Time</Text>
                            <View style={styles.SectionStyle}>
                                <Text>{fromTime.toLocaleTimeString(undefined, {hour: '2-digit', minute:'2-digit', timeZone: 'Asia/Kolkata'})}</Text>   
                            </View>
                        </TouchableOpacity>
                    </View>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="time"
                        is24Hour={true}
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                    <View style={{flex:1}}>
                        <TouchableOpacity onPress={showDatePickerTo}>
                            <Text style={styles.getInputedText}>To Time</Text>
                            <View style={styles.SectionStyle}>
                                <Text>{toTime.toLocaleTimeString(undefined, {hour: '2-digit', minute:'2-digit', timeZone: 'Asia/Kolkata'})}</Text>   
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <DateTimePickerModal
                    isVisible={isDatePickerVisibleTo}
                    mode="time"
                    is24Hour={true}
                    onConfirm={handleConfirmTo}
                    onCancel={hideDatePickerTo}
                />
        
                {/* {isDatePickerVisibleTo === true?(
                     <ShowAllSlots 
                     timeSlot={timeSlote}
                     toTime={toTime}
                     fromTime={fromTime}
                 />
                ):null} */}

                <View style={{marginTop:10,marginBottom:10}}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row',}}>
                        <Checkbox
                            value="Video Appointment"
                            status={ checked === 'Video Appointment' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('Video Appointment')}
                            color = {Colors.primeryColor}
                        />
                        <View>
                            <Text>Video </Text>
                            <Text>Appointment</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Checkbox
                           value="In Clinic Appointment"
                           status={ checked === 'In Clinic Appointment' ? 'checked' : 'unchecked' }
                           onPress={() => setChecked('In Clinic Appointment')}
                           color = {Colors.primeryColor}
                        />
                        <View>
                            <Text>In Clinic</Text>
                            <Text>Appointment</Text>
                        </View>    
                    </View>
                </View> 
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:30}}>
                    <View style={Styles.sessionButton}>
                        <TouchableOpacity onPress={()=>navigation.navigate('AddSession')}>
                            <Text style={Styles.addSessionColorText}>CANCEL</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.sessionButton}>
                        <TouchableOpacity onPress={saveData}>
                            <Text style={Styles.addSessionColorText}>NEXT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
      </View>
    );
}

export default ModalTesterScreen;