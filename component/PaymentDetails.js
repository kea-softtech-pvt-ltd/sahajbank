import React,{} from 'react';
import{View,Text,Image,TouchableOpacity} from 'react-native';
import styles from '../constants/Styles';

const PaymentDetails = props => {
    return(
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>   
            <View style={styles.appointmentSecondCart} >
                <View style={styles.secvenceShow}>
                <View style={[styles.spaceBetween,styles.centerContener]}>
                <Text style={styles.textGray}>Payment Details</Text>
                </View> 
                <Image
                    style={ styles.ImageCartSmall}
                    source = {require('../assets/images/videoconsuntimage.jpg')} 
                   // onPress={()=>navigation.navigate('Profile')}
                />   
                </View>                         
            </View>
        </TouchableOpacity>
    )
}

export default PaymentDetails;