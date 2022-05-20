import React,{useState,useEffect} from 'react';
import {View,Text,ScrollView,Button,TouchableOpacity} from 'react-native';
import axios from 'axios';
import Colors from '../constants/Colors';
import styles from '../constants/Styles';
import AddButton from '../HeaderContener/AddHedButton';
import { StatusBar } from 'react-native';
import MainButton from '../component/MainButton';
import { Ionicons } from '@expo/vector-icons';
import ProfileHeader from '../HeaderContener/ProfileHeader';

export default function ShowDetails (props) {
    console.log(props)
    const id = props.doctorId

    const [fetchData,setFetchData] = useState([]);
    
    useEffect(() => {
        console.log(props.data, "1")
        setFetchData(props.data)
        console.log(fetchData.length, "2")
    },[props])

    
    function handleAddEducationDetails() {
      // props.navigation.push('EducationalDetails')
       props.onNewRecordAdded()
    }

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
        headerLeft: () =>(null),
        headerTitle: () => (
            <ProfileHeader profileTitle="EDUCTION DETAILS SHOW"/>
        ),
        headerRight: () => (
            <TouchableOpacity  onPress={()=> handleAddEducationDetails()}>
                <AddButton/>
            </TouchableOpacity>
        ),
        });
    }, [props]);

    return(
        <View style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={[styles.contenerMarg,]}>
                    {fetchData.length > 0?(
                        <View>
                            {fetchData.map((item,id)=>(
                                <View style={{marginBottom:10}} key={id}>
                                    <View style={[styles.secvenceShow,styles.spaceBetween]}>
                                        <View style={{flex:3,flexDirection:'row'}}>
                                            <Ionicons 
                                                name = "md-school-sharp"
                                                size={25}
                                                color={Colors.primeryColor}
                                                style={{paddingRight:10}}
                                            />  
                                            <Text style={{fontSize:16,fontWeight:'500'}}>{item.degree}</Text>
                                        </View>
                                        <View style={{flex:1,flexDirection:'row-reverse'}}>
                                            <Ionicons 
                                                name = "md-create-outline"
                                                size={25}
                                                color={Colors.primeryColor}
                                                style={{paddingLeft: 20,}}
                                                onPress = {()=> props.navigation.navigate('UpdateDetails',item)}
                                            />  
                                        </View>
                                    </View>
                                    <View style={{paddingLeft:40,marginBottom:10}}>
                                        <Text style={{lineHeight:20,fontSize:15,color:'gray'}}>{item.collage} ({item.comYear})</Text>
                                        <Text style={{fontSize:15,color:'gray',lineHeight:20}}>{item.specialization}</Text>
                                        {/* <Text style={{fontSize:15,color:'gray',lineHeight:20}}>Qualification Document Photo</Text>   */}
                                        {/* <View style={styles.cartBorder}></View>  */}
                                    </View>  
                                </View>
                            ))}
                        </View>
                    ):(
                        <View>
                            <Text>Please click on Add button to add your educational details.</Text>
                        </View>
                    )}
                        <MainButton onPress={()=>props.navigation.navigate('ProfessionalExperience',id)}>Next</MainButton>
                </View>                
            </ScrollView>
        </View>
    )
}

