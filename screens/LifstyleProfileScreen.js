import React,{useState,useEffect} from 'react';
import {View,Text,StatusBar,TouchableOpacity} from 'react-native';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import MedicalDeses from '../Data/MedicalDeses';
import SelectBox from '../component/SelectBox';

export default function LifstyleProfileScreen({navigation}){
    const [MedicalDiseases, setMedicalDiseases] = useState( MedicalDeses);
    // const [Data, setData] = useState( MedicalDeses);

    // useEffect(() => {
    //     fetch("http://localhost:9000/fetchLifStyle",{
    //         method: 'GET',          
    //       })
    //       .then((response) => response.json())
    //       .then((json) => setData(json))
    //       .catch((error) => console.error(error))
    // }, [])

    return(
        <View style={{flex:1,backgroundColor:Colors.textGrayColor}}>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={{marginTop:10,marginBottom:10}} >
                {
                    MedicalDiseases.map((item,key)=>(
                        <View  key={key}>
                            <View style={[styles.secvenceShow,styles.medicalContener,]}>
                                <View >
                                    <Text style={styles.textColorContact}>{item.diseasesName}</Text>
                                    {/* <SelectBox 
                                        item = {Data}
                                    /> */}
                                </View>
                                <View style={styles.centerContener}>
                                    <TouchableOpacity onPress={()=>navigation.navigate('AddInput')}>
                                        <Text style={styles.textColorContact}>add</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.horLineStret}></View>
                        </View>
                    ))
                }
            </View>
        </ScrollView>
    </View>
    )
}