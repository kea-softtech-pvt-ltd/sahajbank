import React,{useState} from 'react';
import{View,Text,StatusBar,Image,TouchableOpacity,ScrollView} from 'react-native';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import BoldText from '../component/Text/BoldText';
import BodyText from '../component/Text/BodyText';
import HeadingText from '../component/Text/HeadingText';

function SelectTimeSlotScreen ({route,navigation}) {
    console.log(route.params.data)
    const DoctorData = (route.params.data);
    const [shoudShow,setShoudShow] = useState(false)

    const showContent = () =>{
        setShoudShow(true)
    }
    const onPress = () =>{
        let id = DoctorData
        navigation.navigate('BookAppointment',id)
    }
    return(
        <View >
            <View style={[styles.secvenceShow,styles.padd,styles.backgroundColor]}>
                <Image
                    style={styles.smallImage}
                    source = {require('../assets/images/profileImage1.jpg')} 
                    onPress={()=>navigation.navigate('Profile')}
                />
                <View style={{marginLeft:10}}>
                    <BoldText>Dr.{DoctorData.name}</BoldText>
                    <View style={styles.secvenceShow}>
                        <BodyText paddingRight = {10}>{DoctorData.address.street}</BodyText>
                        <BodyText>{DoctorData.visitingClinic.name}</BodyText>
                    </View>
                </View>   
            </View>
            <View style={{padding:10,backgroundColor:'#fff',marginTop:10}}>
                <BoldText>Select a Time Slot for In-Clinic Appointment</BoldText>
                <View style={styles.secvenceShow}>
                    <Ionicons name='checkmark-sharp' size={15} color={'green'} style={{padding:3}}/>
                    <BodyText lineHeight={25}>Get Instant Conformetion for FREE!</BodyText>
                </View>
            </View> 
            <View style={{flexDirection:'row',margin:10}}>
                <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.sloteContenerWhite}>
                        <BodyText onPress={showContent}>Today, 7 Oct</BodyText>
                        <BodyText color={'green'} lineHeight={25}>1 Slot available</BodyText>
                    </View>
                    <View style={styles.sloteContenerWhite}>
                        <BodyText onPress={showContent}>Tomorrow, 7 Oct</BodyText>
                        <BodyText color={'green'}>9 Slot available</BodyText>
                    </View>
                    <View style={styles.sloteContenerWhite}>
                        <BodyText>Sat, 7 Oct</BodyText>
                        <BodyText color={'green'}>5 Slot available</BodyText>
                    </View>
                    <View style={styles.sloteContenerWhite}>
                        <BodyText>Sun, 7 Oct</BodyText>
                        <BodyText color={'green'}>3 Slot available</BodyText>
                    </View>
                </ScrollView>
            </View>
            <View style={[styles.padd,styles.backgroundColor,styles.centerContener]}>
                <BoldText>Today, 7 Oct</BoldText>
            </View>
            {/* {shoudShow == true?( */}
                <View style={{backgroundColor:Colors.whiteBackground,marginTop:2,padding:10}}>
                <BoldText>Morning</BoldText>
                <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.sloteContener}>
                            <BodyText color={'#fff'} onPress={onPress}>12:00 PM</BodyText>
                    </View>
                </ScrollView>
                <BoldText>Aftarnoon</BoldText>
                <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.sloteContener}>
                        <BodyText color={'#fff'} onPress={onPress}>12:00 PM</BodyText>
                    </View>
                    <View style={styles.sloteContener}>
                        <BodyText color={'#fff'} onPress={onPress}>12:30 PM</BodyText>
                    </View>
                    <View style={styles.sloteContener}>
                    <BodyText color={'#fff'} onPress={onPress}>05:30 PM</BodyText>
                    </View>
                    <View style={styles.sloteContener}>
                        <BodyText color={'#fff'} onPress={onPress}>06:00 PM</BodyText>
                    </View>
                    <View style={styles.sloteContener}>
                        <BodyText color={'#fff'} onPress={onPress}>06:30 PM</BodyText>
                    </View>
                </ScrollView>
                <BoldText>Evening</BoldText>
                <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.sloteContener}>
                        <BodyText color={'#fff'} onPress={onPress}>07:00 PM</BodyText>
                    </View>
                    <View style={styles.sloteContener}>
                        <BodyText color={'#fff'} onPress={onPress}>07:30 PM</BodyText>
                    </View>  
                </ScrollView>
            </View>
            {/* ):null} */}
        </View>
    )
}

export default SelectTimeSlotScreen ; 