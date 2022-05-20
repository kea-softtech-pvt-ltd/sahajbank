import React,{useState} from 'react';
import {View,Text,StatusBar,ScrollView,TextInput,TouchableOpacity,CheckBox} from 'react-native';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import PrescriptionAllComponent from './PrescriptionAllComponent';
import PrescriptionAddedComponent from './PrescriptionAdd';

export default function Prescription(){
    const [shouldShow, setShouldShow] = useState(false);

    
    return(
        <View style={[styles.container, styles.padd]}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                    <PrescriptionAllComponent />
                </ScrollView>
                {shouldShow ? (
                        <PrescriptionAllComponent />
                    ) : null}
                <View style={{justifyContent:'center',alignItems:'center',marginTop:30}}>
                    <View style={styles.appButtonContainer}>
                        <TouchableOpacity  onPress={() => setShouldShow(!shouldShow)}>
                            <Text style={styles. getButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
       
    )
}

function handleHelpPress() {
   {
        return(
            <Text>ello</Text> ? <PrescriptionAllComponent /> : null
            )
    }
   
  }