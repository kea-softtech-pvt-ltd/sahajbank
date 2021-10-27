import React,{} from 'react';
import{View,Text,Image,TouchableOpacity} from 'react-native';
import styles from '../constants/Styles';

const AppointmentCart = props => {
    return(
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
            <View style={styles.appointmentCard} >
                <Image
                    style={ styles.ImageCart}
                    source = {require('../assets/images/videoconsuntimage.jpg')} 
                    // onPress={()=>navigation.navigate('Profile')}
                />
                <View style={{padding:5, shadowColor: 'black',borderColor:'#d2d2d2',borderWidth:2,borderTopColor:'#fff'}}>
                    <Text style={styles.TextBold}>Instant Video Consultation</Text>
                    <Text style={styles.textGray}>Connect with experienced doctors</Text>
                </View>                             
            </View>
        </TouchableOpacity>
    )
}

export default AppointmentCart;