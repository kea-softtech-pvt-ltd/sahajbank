import React,{} from 'react';
import {View,Text,StatusBar} from 'react-native';
import Clinic from '../component/Clinic';
import Colors from '../constants/Colors';

const ClinicScreen =({route})=>{
    console.log(route.params)
    return(
        <View>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <Clinic 
                clinicData={route.params.visitingClinic} 
                ownClinic={route.params.ownClinic}
            />
        </View>
    )
}

export default ClinicScreen ;