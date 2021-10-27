import React,{ useEffect,useState } from 'react';
import{View,Text,TouchableOpacity,ScrollView} from 'react-native';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import BoldText from './Text/BoldText';
import BodyText from './Text/BodyText';

const ShowSlots = (props) =>{
    const session = props.sessionData
    console.log(session);
    const [show,setShow]=useState(false);
    const [spliceData,setSpliceData]=useState([]);
    const [dateMounth,setDateMounth]=useState('');

    useEffect(()=>{
        todayDateMonth();
        fetchSpliceSession();
    },[])

    const fetchSpliceSession =() =>{
        const spliceSession = session.splice(1,session.length);
        console.log(spliceSession);
        setSpliceData(spliceSession)
    }

    const todayDateMonth =() =>{
        var date = new Date().getDate();
        var toma = new Date().getDate()+1;
        var month = new Date().getMonth() + 1;
        var label = [{month: month}]
        var months = [];
        var m = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];

        label.forEach(function(value){
            var monthName = m[value.month - 1];
            months.push(monthName);
        });
        setDateMounth(date + ' ' + months );
        //console.log(toma + ' ' + months );
    }

    const showAllSlots = () =>{
        if(show== false){
            setShow(true)
        }else{
            setShow(false)
        }
    }

    return(
        <View>
            {session ? (
                <>
                    <View style={{flexDirection:'row',margin:10}}  >
                        <BoldText>Today {dateMounth}</BoldText>
                        <BoldText color={'green'} paddingLeft={5}>6 slotes</BoldText>
                        <BoldText paddingLeft={5}>{'\u20B9'} {session[0].fees} fee</BoldText>
                    </View>
                    <View style={styles.horLineStret}></View>
                    <View style={{flexDirection:'row',margin:10}}>
                        <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={styles.sloteContener}>
                                {/* <Text style={styles.getButtonText}>{event.toLocaleTimeString(undefined, {hour: '2-digit', minute:'2-digit', timeZone: 'Asia/Kolkata'})}</Text>  */}
                                <BoldText color={'#fff'}>12:00 PM</BoldText>
                            </View>
                        </ScrollView>
                    </View>
                    
                    {show == false?(
                        <TouchableOpacity onPress={showAllSlots}>
                            <BoldText color={Colors.primeryColor} textAlign={'center'}>View All Slots</BoldText>
                        </TouchableOpacity>
                        ):(
                            <View>
                                {spliceData.map((item,id)=>(
                                    <View key={id}>
                                        <View style={{flexDirection:'row',margin:10}}>
                                            <BoldText>Tomarrow 29 April</BoldText>
                                            <BoldText color={'green'} paddingLeft={5}>2 slotes</BoldText>
                                            <BoldText paddingLeft={5}>{'\u20B9'} {item.fees} fee</BoldText>
                                        </View>
                                        <View style={styles.horLineStret}></View>
                                        <View style={{flexDirection:'row',margin:10}}>
                                            <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                                                <View style={styles.sloteContener}>
                                                    {/* <Text style={styles.getButtonText}>{event.toLocaleTimeString(undefined, {hour: '2-digit', minute:'2-digit', timeZone: 'Asia/Kolkata'})}</Text>  */}
                                                    <BoldText color={'#fff'}>{item.fromTime}</BoldText>
                                                </View>
                                            </ScrollView>
                                        </View>
                                    </View>   
                                ))}
                                <TouchableOpacity onPress={showAllSlots}>
                                    <BoldText color={Colors.primeryColor} textAlign={'center'}>View Less Slots</BoldText>
                                </TouchableOpacity>
                            </View>
                        )
                    }    
                </>
            ): null}
        </View>     
    )
}

export default ShowSlots ;