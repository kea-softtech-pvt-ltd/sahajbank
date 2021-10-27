import React,{} from 'react';
import{View,Text,Image,TouchableOpacity} from 'react-native';
import styles from '../constants/Styles';

const ReportsCart = props => {
    return(
        <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
            <View style={styles.appointmentSecondCart} >
                <View style={styles.secvenceShow}>
                    <View style={[styles.spaceBetween,styles.centerContener]}>
                        <Text style={styles.textGray}>Check Reports</Text>
                    </View> 
                <Image
                    style={ styles.ImageCartSmall}
                    source = {require('../assets/images/report.jpg')} 
                    //onPress={()=>navigation.navigate('Profile')}
                />   
                </View>                         
            </View>
        </TouchableOpacity>
    )
}

export default ReportsCart;