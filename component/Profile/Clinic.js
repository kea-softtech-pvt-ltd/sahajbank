import React,{useState,useEffect} from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import styles from '../../constants/Styles';

export default function Clinic (props) {
    console.log(props)
    const [clinicData,setClinicData] = useState([]);
    const [ownClinicData,setOwnClinicData] = useState([]);

    useEffect(() => {
       setClinicData(props.clinicData)
       setOwnClinicData(props.ownClinic)

    },[props]);

    return(            
        <View style={{marginTop:10,marginBottom:10}}>
            {clinicData.map((clinicItem,id) =>(
                <View style={styles.nextSubContener} key={id}>
                    <Image
                        source={require('../../assets/images/clinic.jpg')}
                        style={styles.clinicImageStyle}
                    />
                    <View style={{margin:10,flex:1}}>
                        <Text style={styles.drNameText}>{clinicItem.clinicName}</Text>
                        <Text style={styles.subTextGrayColor}>{clinicItem.address}</Text>
                    </View>
                </View >
            ))}
            {ownClinicData.map((item,id) =>(
                <View style={styles.nextSubContener} key={id}>
                    <Image
                        source={require('../../assets/images/clinic.jpg')}
                        style={styles.clinicImageStyle}
                    />
                    <View style={{margin:10,flex:1}}>
                        <Text style={styles.drNameText}>{item.clinicName}</Text>
                        <Text style={styles.subTextGrayColor}>{item.address}</Text>
                    </View>
                </View >
            ))}
            <View style={styles.textSubContener}>
                <TouchableOpacity onPress={props.onClinicClick}>
                    <Text style={styles.getInputTextColor}>Add Clinic</Text>
                </TouchableOpacity>
            </View> 
        </View>
    )
    
}