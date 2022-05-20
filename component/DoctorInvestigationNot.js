import React,{useState} from 'react';
import {View,Text,StatusBar,ScrollView,TouchableOpacity} from 'react-native';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import InputHandler from '../component/InputeText';

export default function DoctorNotInput(){
    const [envestigationValue, setenvestigationValue] = useState('');

    const textInputHandler = inputText => {
        console.log(inputText.replace(/[^0-9 || ^a-z || ^A-Z]/g,''))
        setenvestigationValue(inputText.replace(/[^0-9 || ^a-z || ^A-Z]/g,''));
    };

    const addNode =() =>{

    }
    return(
        <View style={[styles.container, styles.padd]}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}> 
                <View style={styles.contentContainerBox}>                 
                    <Text style={{fontSize:16,fontWeight:'500',textAlign:'center'}}>Doctor Investigation Note</Text> 
                     <View style={styles.SectionStyle}>
                        <InputHandler
                            placeholder = 'Enter Your Name'
                            multiline
                            numberOfLines={4}
                            onChangeText={textInputHandler}
                            value={envestigationValue}

                        />
                    </View>
                </View>
                <View style={{justifyContent:'center',alignItems:'center',marginTop:30}}>
                    <View style={styles.appButtonContainer}>
                        <TouchableOpacity onPress={addNode}>
                            <Text style={styles. getButtonText}>Add Note</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </ScrollView>
        </View>
       
    )
}