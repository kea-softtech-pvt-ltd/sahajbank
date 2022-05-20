import React,{useState,useEffect} from 'react';
import {View,Text,ScrollView,Button,TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';
import styles from '../../constants/Styles';
import { StatusBar } from 'react-native';
import MainButton from '../../component/MainButton';
import { Ionicons } from '@expo/vector-icons';

export default function ShowPersonalDetails (props) {
    console.log(props)

    const id = props.doctorId

    const [fetchData,setFetchData] = useState([]);
    
    useEffect(() => {
        console.log(props.data, "1")
        setFetchData(props.data)
        console.log(fetchData.length, "2")
        console.log(props.data.length,"3")
    },[props])

    return(
        <View style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={[styles.contenerMarg,]}>
                    {/* {fetchData == null?(
                        <View>
                            {fetchData.map((item,id)=>( */}
                                <View style={{marginBottom:10}} >
                                    <View style={[styles.secvenceShow,styles.spaceBetween]}>
                                        <View style={{flex:3,flexDirection:'row'}}>
                                            <Ionicons 
                                                name = "md-person-circle-outline"
                                                size={25}
                                                color={Colors.primeryColor}
                                                style={{paddingRight:10}}
                                            />  
                                            <Text style={{fontSize:16,fontWeight:'500'}}>{fetchData.name}</Text>
                                        </View>
                                        <View style={{flex:1,flexDirection:'row-reverse'}}>
                                            <Ionicons 
                                                name = "md-create-outline"
                                                size={25}
                                                color={Colors.primeryColor}
                                                style={{paddingLeft: 20,}}
                                                onPress = {()=> props.navigation.navigate('UpdateProfileDetails',fetchData)}
                                            />  
                                        </View>
                                    </View>
                                    <View style={{paddingLeft:40,marginBottom:10}}>
                                        <Text style={{lineHeight:20,fontSize:15,color:'gray'}}>{fetchData.gender}</Text>
                                        <Text style={{lineHeight:20,fontSize:15,color:'gray'}}>{fetchData.officialEmail}</Text>
                                        <Text style={{lineHeight:20,fontSize:15,color:'gray'}}>{fetchData.personalEmail}</Text>
                                        <Text style={{lineHeight:20,fontSize:15,color:'gray'}}>{fetchData.address}</Text>
                                    </View>
                                </View>
                            {/* ))}
                        </View>
                    ):(
                        <View>
                            <Text>Please click on Add button to add your educational details.</Text>
                        </View>
                    )} */}
                        <MainButton onPress={()=>props.navigation.navigate('EducationalDetails', id)}>Next</MainButton>
                </View>                
            </ScrollView>
        </View>
    )
}

