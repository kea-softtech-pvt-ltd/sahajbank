import React,{useState,useEffect} from 'react';
import {View,Text,ScrollView,Button,TouchableOpacity} from 'react-native';
import axios from 'axios';
//import DocumentPicker from 'react-native-document-picker';

import InputHandler from '../component/InputeText';
import SelectBox from '../component/SelectBox';
import Colors from '../constants/Colors';
import styles from '../constants/Styles';
import EducationalQualification from '../data/EducationalAualification.json';
import AddButton from '../HeaderContener/AddHedButton';
import Speciality from '../data/Speciality';
import { StatusBar } from 'react-native';
import MainButton from '../component/MainButton';
import Year from '../data/Year';


export default function EducationalDetailsAdd (props) {
    console.log(props)
    const doctorId = props.doctorId
    const [enteredYear, setEnteredValueYear] = useState('');
    const [enteredCollageName, setEnteredCollageName] = useState('');
    const [eDegree,setEDegree] = useState([]);
    const [titleIsValid, setTitleIsValid] = useState(true);
    const [degree, setDegree] = useState('Select Degree');
    const [speciality, setSpeciality] = useState('Select Speciality');

    const collageNameInputHandler = inputText => {
        setEnteredCollageName(inputText.replace(/[^a-z || ^A-Z]/g,''));
    };
    const educationDegree = 'http://192.168.29.239:9000/api/drdegrees';

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
        console.log("hhhhhh");
        const id = props.doctorId
        const bodyData = {
            "doctorId":id,
            "comYear": enteredYear,
            "collage": enteredCollageName,
            "degree": degree,
            "specialization": speciality
        }
        axios.post("http://192.168.29.239:9000/api/education", bodyData)
        .then(function(response){
            console.log(response);
            props.onRecordAdded()
           // props.navigation.push('EducationalDetails')
        })
    }

    return(
        <View style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={styles.contenerMarg}> 
                    <Text style={styles.getInputedText}>Doctor Degree</Text>
                    { eDegree.length > 0 &&
                        <SelectBox 
                            item = {eDegree}
                            values = {degree}
                            setValue = {setDegree}
                        /> 
                    }   
                    <Text style={styles.getInputedText}>Collage/University</Text>
                    <View style={styles.SectionStyle}>
                        <InputHandler
                            placeholder = 'Enter Collage/University Name'
                            onChangeText={collageNameInputHandler}
                            value={enteredCollageName}
                        />
                    </View>
                    <Text style={styles.getInputedText}>Complition Year</Text>
                    <SelectBox 
                            item = {Year}
                            values= {enteredYear}
                            setValue = {setEnteredValueYear}
                        /> 
                    <Text style={styles.getInputedText}>Speciality*</Text>
                    <SelectBox 
                        item = {Speciality}
                        values = {speciality}
                        setValue = { setSpeciality}
                    />
                    <Text style={styles.getInputedText}>Qualification Document Photo</Text>
                    <MainButton onPress={uplodeDocument}>uplode</MainButton>

                    <MainButton onPress={saveData}>save</MainButton>
                </View>
            </ScrollView>
        </View>
    )
}

