import React,{useState,useEffect} from 'react';
import {View,Text,ScrollView,Button,TouchableOpacity} from 'react-native';
import axios from 'axios';
//import DocumentPicker from 'react-native-document-picker';

import InputHandler from '../component/InputeText';
import SelectBox from '../component/SelectBox';
import Colors from '../constants/Colors';
import styles from '../constants/Styles';
import Speciality from '../data/Speciality';
import { StatusBar } from 'react-native';
import MainButton from '../component/MainButton';
import Year from '../data/Year';

export default function UpdateDetailsScreen ({route,navigation}) {
    console.log(route)
    const id = route.params._id
    const [enteredYear, setEnteredValueYear] = useState(route.params.comYear);
    const [enteredCollageName, setEnteredCollageName] = useState(route.params.collage);
    const [eDegree,setEDegree] = useState([]);
    const [titleIsValid, setTitleIsValid] = useState(true);
    const [degree, setDegree] = useState(route.params.degree);
    const [speciality, setSpeciality] = useState(route.params.specialization);
    const [updateData,setUpdateData] = useState([ route.params]);

    const collageNameInputHandler = inputText => {
        setEnteredCollageName(inputText.replace(/[^a-z || ^A-Z]/g,''));
    };

    const educationDegree = 'http://192.168.29.239:9000/api/drdegrees';
    const updateEducation = `http://192.168.29.239:9000/api/updateEducation/${id}`;

    useEffect(() => {
        const fetchDegree = async () => {
            let degreeData = []
            const result = await axios.get(educationDegree);
            result.data.map(function(item){
                degreeData.push({ label: item.degree, value:item.degree})
            })
            // console.log(degreeData)
            setEDegree(degreeData);
          };
        fetchDegree();   
    },[]);

    const uplodeDocument = async () => {
        try {
            console.log(DocumentPicker);
            const results = await DocumentPicker.pickMultiple({
              type: [DocumentPicker.types.allFiles],
            });
            for (const res of results) {
              console.log(
                res.uri,
                res.type, // mime type
                res.name,
                res.size
              );
            }
            } catch (err) {
            if (DocumentPicker.isCancel(err)) {
              // User cancelled the picker, exit any dialogs or menus and move on
            } else {
              throw err;
            }
        }
    }

    const saveData  = async () => { 
        const doctorId = route.params.doctorId
        const bodyData = {
            "doctorId":doctorId,
            "comYear": enteredYear,
            "collage": enteredCollageName,
            "degree": degree,
            "specialization": speciality
        }
        axios.post(updateEducation, bodyData)
        .then(function(response){
            console.log(response);
           navigation.goBack('')
        })
    }

    return(
        <View style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                {updateData.map((item,id)=>(
                    <View style={styles.contenerMarg} key={id}> 
                        <Text style={styles.getInputedText}>Doctor Degree</Text>
                        { eDegree.length > 0 &&
                            <SelectBox 
                                item = {eDegree}
                                setValue = {setDegree}
                                values = {item.degree}
                            /> 
                        }   
                        <Text style={styles.getInputedText}>Collage/University</Text>
                        <View style={styles.SectionStyle}>
                            <InputHandler
                                placeholder = {item.collage}
                                onChangeText={collageNameInputHandler}
                                value={enteredCollageName}
                            />
                        </View>
                        <Text style={styles.getInputedText}>Complition Year</Text>
                        <SelectBox 
                                item = {Year}
                                values = {item.comYear}
                                setValue = {setEnteredValueYear}
                            /> 
                        <Text style={styles.getInputedText}>Speciality*</Text>
                        <SelectBox 
                            item = {Speciality}
                            values ={item.specialization}
                            setValue = { setSpeciality}
                        />
                        <Text style={styles.getInputedText}>Qualification Document Photo</Text>
                        <MainButton onPress={uplodeDocument}>uplode</MainButton>
    
                        <MainButton onPress={saveData}>Update</MainButton>
                    </View>
                ))}
                
            </ScrollView>
        </View>
    )
}

