import React,{useState,useEffect} from 'react';
import { Text, TouchableOpacity,View,StatusBar,} from 'react-native';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';

import InputHandler from '../component/InputeText';

export default function AddInputScreen ({navigation,route}) {
        
    const [newText, setEnteredNewText] = useState('');
    const [aliergies, setEnteredAliergies] = useState("Aliergies");
    const [currentMedication, setEnteredCurrentMedication] = useState("Current Medications");
    const [ pastMedication, setEnteredPastMedication] = useState("Past Medications");
    const [chronicDiseases, setEnteredChronicDiseases] = useState("Chronic Diseases");
    const [enjuries, setEnteredEnjuries] = useState("Enjuries");
    const [surgeries, setEnteredSurgeries] = useState("Surgeries");

    const newInputHandler = inputText => {
        setEnteredNewText(inputText.replace(/[^a-z || ^A-Z ]/g, ''));
    };

    const confirmInputHandler = async () => {  
      const diseases = route.params.item
      console.log(diseases)
      if(diseases == aliergies){
        try{
          fetch("http://localhost:9000/addAliergies",{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
           aliergies: newText,
          })        
        })
         .then((response) => {
          navigation.goBack()
        })
        //.then(res=>res.json())
        .then(data=>{
          console.log(data)
        })
        }catch(e){
          console.log(e)
        }
      }if (diseases == currentMedication) {
        try{
          fetch("http://localhost:9000/addCurrentMedication",{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            currentMedication: newText,
          })
                
        })
         .then((response) => {
          navigation.goBack()
        })
        //.then(res=>res.json())
        .then(data=>{
          console.log(data)
        })
        }catch(e){
          console.log(e)
        }
      }if (diseases == pastMedication) {
        try{
          fetch("http://localhost:9000/addPastMedication",{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            pastMedication:newText,
          })        
        })
         .then((response) => {
          navigation.goBack()
        })
        //.then(res=>res.json())
        .then(data=>{
          console.log(data)
        })
        }catch(e){
          console.log(e)
        }
      }if (diseases == chronicDiseases) {
        try{
          fetch("http://localhost:9000/addChronicDiseases",{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            chronicDiseases: newText,
          })        
        })
         .then((response) => {
          navigation.goBack()
        })
        //.then(res=>res.json())
        .then(data=>{
          console.log(data)
        })
        }catch(e){
          console.log(e)
        }
      } if (diseases == enjuries) {
        try{
          fetch("http://localhost:9000/addEnjuries",{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            enjuries : newText,
          })        
        })
         .then((response) => {
          navigation.goBack()
        })
        //.then(res=>res.json())
        .then(data=>{
          console.log(data)
        })
        }catch(e){
          console.log(e)
        }
      } if (diseases == surgeries) {
        try{
          fetch("http://localhost:9000/addSurgeries",{
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            surgeries : newText,
          })        
        })
         .then((response) => {
          navigation.goBack()
        })
        //.then(res=>res.json())
        .then(data=>{
          console.log(data)
        })
        }catch(e){
          console.log(e)
        }
      } 
      else{
        navigation.goBack()
      }
    }
        
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
        <View style={[styles.contenerMarg, ]}>
          <View style={styles.SectionStyle}>
            <InputHandler 
              placeholder = 'Input Text Hear'
              maxLength={20}
              onChangeText={newInputHandler}
              value={newText}
            /> 
          </View>              
          <View style={[styles.loginButtonContainer,styles.loginContener]}>
              <TouchableOpacity onPress={confirmInputHandler}>
              <Text style={styles.getButtonText}>Continue</Text>
              </TouchableOpacity>
          </View>
      </View>     
    </View>
  );
}


