import React,{useState,useEffect} from 'react';
import {View,Text,TouchableOpacity,Button,StatusBar} from 'react-native';
import styles from '../constants/Styles';
import Colors  from '../constants/Colors';
import FlipToggle from 'react-native-flip-toggle-button';
import SaveButton from '../HeaderContener/SaveHed';
import Days from '../data/Days';
import { useIsFocused } from "@react-navigation/native";
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';

export default function AddSessionScreen({navigation,route}) {
      console.log(route)
    const doctorId = route.params.doctorId
    const [isActive ,setIsActive] = useState(false)
    const [days,setDays] = useState(Days)
    const [sessionTime,setSessionTime] = useState([])
    const isFocused = useIsFocused();
    const fetchSessionTime=  "http://192.168.29.239:9000/api/fetchtime";

    useEffect(() => {
        if(isFocused){ 
            fetchData();
        }  
      },[isFocused]);

    const fetchData = async () => {
        const doctorId = route.params.doctorId
        const clinicId = route.params._id
        const bodyData = {
            "doctorId" : doctorId,
            "clinicId": clinicId
        }
        const result = await axios.post(fetchSessionTime,bodyData);
        console.log(result.data)
        let byDay = result.data.reduce((r, a) => {
            r[a.day] = [...r[a.day] || [], a];
            return r;
        }, {});
        console.log(byDay)
        setSessionTime(byDay);
    };
    
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerRight: () => (
            <TouchableOpacity  onPress={()=>navigation.goBack('')} >
                <SaveButton/>
            </TouchableOpacity>
          ),
        });
      }, [navigation,]);

    return(
        <View>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles. addSessionTextDay}>Same timings for weekdays</Text>
                <FlipToggle
                    value={isActive}
                    buttonWidth={60}
                    buttonHeight={30}
                    buttonRadius={50}
                    sliderWidth={25}
                    sliderHeight={25}
                    sliderRadius={50}
                    color = {Colors.primeryColor}
                    onLabel={'On'}
                    offLabel={'Off'}
                    labelStyle={{ color: 'red' }}
                   // onToggle={(newState) => console.log(`toggle is ${isActive ? `on` : `off`}`)}
                    //onToggleLongPress={() => console.log('toggle long pressed!')}
                    onToggle={() =>setIsActive (true)}
                />
            </View>
            {
                days.map((items,id) =>(
                    <View style={styles.addSessionContener} key={id} >
                        <View style={styles.addSessionBox}>
                            <Text style={styles. addSessionTextDay}>{items}</Text>
                        </View>
                        <View style={{padding:10,}}>  
                            {
                                <View>
                                    {sessionTime[items] ?(
                                        <View key={id}>
                                            <View>
                                                <Text style={styles.addSessionColorText}>
                                                    {new Date(sessionTime[items][0].fromTime).toLocaleTimeString(undefined, {hour: '2-digit', minute:'2-digit',timeZone: 'Asia/Kolkata'})}  
                                                        To  {new Date(sessionTime[items][0].toTime).toLocaleTimeString(undefined, {hour: '2-digit', minute:'2-digit',timeZone: 'Asia/Kolkata'})}  {'\u20A8'} {sessionTime[items][0].fees}
                                                    {(sessionTime[items][0].Appointment == 'Video Appointment')
                                                        ? <Ionicons name = 'md-videocam' size = {20} style={{paddingLeft:8}}/>
                                                        : <Ionicons name = 'md-man-outline' size = {20} style={{paddingLeft:5}}/>
                                                    }
                                                </Text>
                                            </View>       
                                        </View> ):(
                                        <View>
                                            <TouchableOpacity onPress={()=>navigation.navigate('ModalTester',{"Session": items,"item":route})} key={id}>
                                                <Text style={styles.addSessionColorText}>Set Session Timing</Text>
                                            </TouchableOpacity>
                                        </View> 
                                    )}  
                                </View>
                            }          
                        </View>
                    </View>
                ))
            }
        </View>
    )
}