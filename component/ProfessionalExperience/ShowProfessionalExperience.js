import React,{useState,useEffect} from 'react';
import {View,Text,ScrollView,Button,TouchableOpacity} from 'react-native';
import axios from 'axios';
import Colors from '../../constants/Colors';
import styles from '../../constants/Styles';
import AddButton from '../../HeaderContener/AddHedButton';
import { StatusBar } from 'react-native';
import MainButton from '../../component/MainButton';
import { Ionicons } from '@expo/vector-icons';
import ProfileHeader from '../../HeaderContener/ProfileHeader';

export default function ShowProfessionalExperience (props) {
    console.log(props)

    const id = props.doctorId
    const [fetchData,setFetchData] = useState([]);
    
    useEffect(() => {
        const updatedExperienceData = manipulateExperience(props.data);
        console.log(updatedExperienceData)
        setFetchData(props.data)
    },[props])

    function manipulateExperience(data) {
        return data.map(function(item, index){
            const experiences =  monthDiff(new Date(item.startYear), new Date(item.endYear))
            const month = experiences%12
            let year = 0
            if(experiences > 11) {
                const exYear = experiences/12
                year = exYear.toFixed(0)
            }
            item.totalExperience = `${year}.${month}`;
            return item;
        })
    }

    function monthDiff(d1, d2) {
        var months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();
        return months <= 0 ? 0 : months;
    }
    
    function handleAddEducationDetails() {
       //props.navigation.push('ProfessionalExperience')
       props.onNewRecordAdded()
    }

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
        headerLeft: () =>(null),
        headerTitle: () => (
            <ProfileHeader profileTitle="PROFESSIONAL EXPERIENCE SHOW"/>
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
                                                name = "md-business-sharp"
                                                size={25}
                                                color={Colors.primeryColor}
                                                style={{paddingRight:10}}
                                            />  
                                            <Text style={{fontSize:16,fontWeight:'500'}}>{item.clinicName}</Text>
                                        </View>
                                        <View style={{flex:1,flexDirection:'row-reverse'}}>
                                            <Ionicons 
                                                name = "md-create-outline"
                                                size={25}
                                                color={Colors.primeryColor}
                                                style={{paddingLeft: 20,}}
                                                onPress = {()=> props.navigation.navigate('UpdateProfessionalExperience',item)}
                                            />  
                                        </View>
                                    </View>
                                    <View style={{paddingLeft:40,marginBottom:10}}>
                                        <Text style={{lineHeight:20,fontSize:15,color:'gray'}}>{item.totalExperience} Year ({item.startYear} to {item.endYear})</Text>
                                        <Text style={{lineHeight:20,fontSize:15,color:'gray'}}>{item.description}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    ):(
                        <View>
                            <Text>Please click on Add button to add your educational details.</Text>
                        </View>
                    )}
                        <MainButton onPress={()=>props.navigation.navigate('Clinic', id)}>Next</MainButton>
                </View>                
            </ScrollView>
        </View>
    )
}

