import React,{useState,useEffect} from 'react';
import {View,Text,StatusBar,ScrollView,TouchableOpacity} from 'react-native';
import styles from '../../constants/Styles';
import Colors from '../../constants/Colors';

export default function EnjuriesShow(props){
     const [MedicalDiseases, setMedicalDiseases] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/fetchEnjuries",{
            method: 'GET',          
          })
          .then((response) => response.json())
          .then((json) => setMedicalDiseases(json))
          .catch((error) => console.error(error))
    }, [])

    return(
        <View style={[styles.container, styles.padd]}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <ScrollView ontentContainerStyle={styles.contentContainer}> 
                {
                    MedicalDiseases.map((item,key)=>(
                        <View key={key}>                 
                            <Text style={styles.textColorContact}>{item.enjuries}</Text>
                        </View>  
                    ))
                }  
            </ScrollView>
        </View>
       
    )
}