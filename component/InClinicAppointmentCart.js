import React,{} from 'react';
import{View,Text,Image,TouchableOpacity} from 'react-native';
import styles from '../constants/Styles';

const InClinicAppointmentCart = props => {
    return(
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
            <View style={styles.appointmentCard} >
                <Image
                    style={ styles.ImageCart}
                    source = {require('../assets/images/inClinicDoctor.jpg')} 
                    //onPress={()=>navigation.navigate('Profile')}
                />
                <View style={{padding:5, shadowColor: 'black',borderColor:'#d2d2d2',borderWidth:2,borderTopColor:'#fff'}}>
                <Text style={styles.TextBold}>In-Clinic Doctor Appointments</Text>
                <Text style={styles.textGray}>Book appointments with top doctors near you</Text>
                </View>                             
            </View>
        </TouchableOpacity>
    )
}

export default InClinicAppointmentCart;