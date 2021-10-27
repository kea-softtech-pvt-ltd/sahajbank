import React from 'react';
import{View,Image,TouchableOpacity,ScrollView} from 'react-native';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import BoldText from './Text/BoldText';
import BodyText from './Text/BodyText';
import HeadingText from './Text/HeadingText';

const DoctorDetails = (props) => {
    const DoctorData =[props.data];

    return(
        <View style={[styles.container,styles.marg,styles.padd]}>
            {
                DoctorData.map((item,id) =>( 
                    <View key={id}>
                        <View style={styles.secvenceShow} >
                            <View style={{flex:1.7,marginRight:10,marginBottom:10}}>
                                <Image
                                    style={styles.bookImage}
                                    source = {item.image} 
                                    onPress={()=>props.navigation.navigate('DoctorProfile')}
                                />
                            </View>
                            <View style={{flex:4,}}>
                                <HeadingText>{item.name}</HeadingText>
                                <BodyText>{item.specialist}</BodyText>
                                <BodyText>12 years of experience overall</BodyText>
                                <View style={[styles.secvenceShow,styles.marg]}>
                                    <Ionicons 
                                        name="md-thumbs-up"
                                        size={20}
                                        color={'green'}
                                    />
                                    <BoldText>95%</BoldText>
                                    <Ionicons 
                                        name="md-chatbox-ellipses"
                                        size={20}
                                        style={{marginLeft:10}}
                                        color={'green'}
                                    />
                                    <TouchableOpacity>
                                        <BoldText>100 Paitent Stores</BoldText>
                                    </TouchableOpacity>
                                </View>
                            </View> 
                        </View>
                        <View style={styles.secvenceShow}>
                            <BoldText paddingRight = {10}>{item.address.street}</BoldText>
                            <BodyText>{item.visitingClinic.name}</BodyText>
                        </View>
                        <View style={styles.secvenceShow}>
                            <BoldText color = {'green'}  paddingRight = {10}>Open</BoldText>
                            <BodyText>Updated Today</BodyText>
                        </View>
                        <View style={styles.secvenceShow}>
                            <BoldText paddingRight ={10} >{'\u20B9'}600</BoldText>
                            <BodyText>Consaltant Fees</BodyText>
                        </View>
                        <BoldText color = {'green'} marginTop = {10}>NEXT AVAILABLE AT</BoldText>

                        <View style={[styles.secvenceShow]}>
                            <View style={{flex:1,marginRight:10}}>
                                <View style={[styles.secvenceShow]}>
                                    <Ionicons name='videocam-outline' color={Colors.primeryColor} size={15} style={{padding:2}}/>
                                    <BodyText>03:00 PM, Today</BodyText>
                                </View>
                                <View style={styles.appointButtonContainer}>
                                    <TouchableOpacity onPress={()=>props.navigation.navigate('SetTimeSlot',{data:item})}>
                                        <BoldText color = {'#fff'}>Book Video Consult</BoldText>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <View style={[styles.secvenceShow]}>
                                    <Ionicons name='home-outline' color={Colors.primeryColor} size={15} style={{padding:2}}/>
                                    <BodyText>03:00 PM, Today</BodyText>
                                </View>
                                <View style={styles.appointButtonContainer}>
                                    <TouchableOpacity onPress={()=>props.navigation.navigate('SetTimeSlot',{data:item})} >
                                    <BoldText color = {'#fff'}>Book Appointment</BoldText>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                ))
            }    
        </View>
    )
}
export default DoctorDetails;