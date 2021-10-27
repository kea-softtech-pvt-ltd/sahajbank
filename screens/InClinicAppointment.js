import React,{useState} from 'react';
import{View,Text,StatusBar,Image,TouchableOpacity,ScrollView} from 'react-native';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
//import { ScrollView,} from 'react-native-gesture-handler';
import Doctor from '../Data/Doctor';
import { Ionicons } from '@expo/vector-icons';

export default function InClinicAppointmentScreen(){
    const [DoctorData, setPatientData] = useState(Doctor);

    return(
        <View style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={styles.contenerMarg}>
                    {/* {
                        DoctorData.map((item, key) =>( */}
                            <View style={styles.secvenceShow}>
                                 <View style={{flex:1.7}}>
                                    <Image
                                        style={styles.bookImage}
                                        source = {require('../assets/images/profileImage1.jpg')} 
                                        onPress={()=>navigation.navigate('Profile')}
                                    />
                                </View>
                                <View style={{flex:4,}}>
                                    <Text style={styles.hTextBookAppo}>Dr.Swapnil Dharmadhikari</Text>
                                    <Text style={styles.textBookAppo} >Ayurveda</Text>
                                    <Text style={styles.textBookAppo}>Md.Ayurveda Medicine Foloowoship</Text>
                                    <Text style={styles.textBookAppo}>Diploma in Clinical Neurology Sciences</Text>
                                    <Text style={styles.textBookAppoLign}>12 years of experience overall</Text>
                                    <View style={styles.secvenceShow}>
                                        <Ionicons 
                                            name="md-thumbs-up"
                                            size={20}
                                            style={{}}
                                            color={'green'}
                                        />
                                        <Text style={styles.textBookAppo}>95%</Text> 
                                        <Ionicons 
                                            name="md-chatbox-ellipses"
                                            size={20}
                                            style={{marginLeft:10}}
                                            color={'green'}
                                        />
                                        <TouchableOpacity>
                                            <Text style={styles.textBookAppo}>100 Paitent Stores</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>     
                            </View>
                        {/* ))
                    }
                    */}
                    
                    <View style={{borderColor:Colors.textGrayColor,borderWidth:1,marginTop:20,}}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,backgroundColor:'#d6f5f5',}}>
                            <View style={styles.secvenceShow}>
                            <Ionicons 
                                name = "md-home"
                                size={20}
                                style={{paddingRight:5}}
                                color={'#2eb8b8'}
                                onPress={()=>rightOptions.navigate('Settings')}  
                            />
                            <Text style={styles.textn}>In Clinic Appointment</Text>
                            </View>
                            <Text style={styles.textn}>{'\u20B9'} 300 fee</Text>
                        </View>
                        <View style={{paddingTop:20,paddingBottom:20,paddingLeft:10,paddingRight:10}}>
                            <View style={styles.secvenceShow}>
                                <View style={{flex:3,paddingRight:10}}>
                                    <Text style={styles.textn}>Dharmadhikari Ayurvedic Clinic and Research Center</Text> 
                                </View>
                                <TouchableOpacity>
                                    <Text style={{fontSize:15,lineHeight:20,fontWeight:'bold',color:'#2eb8b8',}}>2 more clinics</Text> 
                                </TouchableOpacity>
                            </View>  
                        
                        <Text style={styles.lignText}>Sadashov Peth</Text>  
                        <Text style={styles.textBookAppo}>max 30 Minutes Wait</Text>  
                        </View>  
                    </View>
                    <View style={{borderColor:Colors.textGrayColor,borderWidth:1,borderTopColor:'#fff', paddingTop:10,paddingBottom:20,paddingLeft:10,paddingRight:10}}>
                        <Text style={styles.normalText}>Click accepts appointment only via calls</Text>
                        <Text style={styles.textBookAppo}>Tocheck for doctor availablity and appointment confirmation please call the clinic</Text>
                        <View style={[styles.secvenceShow]}>
                        <View style={{borderColor:'#2eb8b8',borderWidth:1,padding:10,flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:20}}>
                            <Ionicons 
                                name="md-call"
                                size={20}
                                style={{paddingRight:10}}
                                color={'#2eb8b8'}
                            />
                            <Text style={styles.textColorContact}>Contact Clinic</Text>
                        </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}