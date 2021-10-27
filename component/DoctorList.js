import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {View,Text,StatusBar,Image,TouchableOpacity} from 'react-native';
import styles from '../constants/Styles';
import ListApi from '../ApiList/ListApi';

const DoctorList = props => {
    
    const [DoctorData, setDoctorData] = useState([]);
    const doctorDetails = 'http://192.168.29.239:9000/api/doctor';

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () =>{
        const result = await axios.get(doctorDetails); 
         console.log(result.data);
         setDoctorData(result.data)     
    }

    return(
        <View style={styles.secvenceShow}>
            {
                DoctorData.map((item,id) =>(
                    <View key={id}>
                        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress.bind(this, {doctorId:item._id})}>
                            <View style={styles.doctorListContener} >
                                <Image
                                    style={ {height:60,width:60,borderRadius:60}}
                                    source={require('../assets/images/profileImage.jpg')}
                                    onPress={()=>navigation.navigate('Profile')}
                                />
                                <Text style={styles.TextBoldCenter}>{item.name}</Text>
                                {item["educationList"]?
                                    (
                                        <View>
                                            {item.educationList.map((educationItem,id)=>(
                                                <View key={id}>
                                                    <Text style={styles.textGray}>{educationItem.specialization}</Text>
                                                </View>
                                            ))}
                                        </View>
                                    )   
                                :null}  
                            </View>
                        </TouchableOpacity>
                    </View>
                ))
            } 

        </View>
    )
}

export default DoctorList ; 