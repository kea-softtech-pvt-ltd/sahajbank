import React,{useState} from 'react';
import {View,Text,StatusBar,ScrollView,TouchableOpacity} from 'react-native';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import InputHandler from '../component/InputeText';

export default function Premedication(){
    const [premedicationText, setpremedicationText] = useState('');

    const TextInputHandler = inputText => {
        setpremedicationText(inputText.replace(/[^0-9 || ^a-z || ^A-Z]/g,''));
    };

    const addNode =() =>{
        
    }
    return(
        <View style={[styles.container, styles.padd]}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}> 
                <View style={styles.contentContainerBox}>                 
                    <Text style={{fontSize:16,fontWeight:'500',textAlign:'center'}}>Premedication</Text>
                    <View style={styles.SectionStyle}>
                        <InputHandler
                            placeholder = 'Premedication'
                            multiline
                            numberOfLines={4}
                            onChangeText={TextInputHandler}
                            value={premedicationText}
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
                {/* <View style={{flexDirection:'row-reverse'}}>
                    <View style={styles.appButtonContainer}>
                        <TouchableOpacity >
                            <Text style={styles. getButtonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View> */}
            </ScrollView>
        </View>
       
    )
}