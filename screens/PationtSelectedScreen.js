import React,{} from 'react';
import {View,Text,ScrollView,StatusBar} from 'react-native';
import {Collapse, CollapseHeader, CollapseBody} from "accordion-collapse-react-native";
import Colors from '../constants/Colors';
import styles from '../constants/Styles';
import DoctorNotInput from '../component/DoctorInvestigationNot';
import Premedication from '../component/Premedication';
import Prescription from '../component/Prescription';
import NewFollowUp from '../component/NewFollowUp';
import MedicinHistory from '../component/MedicineHistory';
import Clinic from '../component/Clinic';

export default function PationtSelectedScreen(){
    return(
        <View style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <Collapse >
                    <CollapseHeader style={[styles.option,  styles.lastOption]}>
                        <View>
                            <Text style={{color:Colors.primeryColor}}>INVESTIGATION</Text>        
                        </View>
                    </CollapseHeader>
                    <CollapseBody >
                        <DoctorNotInput />
                    </CollapseBody>     
                </Collapse>
                <Collapse >
                    <CollapseHeader style={[styles.option,  styles.lastOption]}>
                        <View>
                        <Text style={{color:Colors.primeryColor}}>PREMEDICATION</Text>        
                        </View>
                    </CollapseHeader>
                    <CollapseBody >
                        <Premedication />
                    </CollapseBody>     
                </Collapse>
                <Collapse >
                    <CollapseHeader style={[styles.option,  styles.lastOption]}>
                        <View>
                        <Text style={{color:Colors.primeryColor}}>PRESCRIPTION</Text>        
                        </View>
                    </CollapseHeader>
                    <CollapseBody >
                        <Prescription />
                    </CollapseBody>     
                </Collapse>
                <Collapse >
                    <CollapseHeader style={[styles.option,  styles.lastOption]}>
                        <View>
                        <Text style={{color:Colors.primeryColor}}>NEW FOLLOW-UP</Text>        
                        </View>
                    </CollapseHeader>
                    <CollapseBody >
                        <NewFollowUp />
                    </CollapseBody>     
                </Collapse>
                <Collapse >
                    <CollapseHeader style={[styles.option,  styles.lastOption]}>
                        <View>
                        <Text style={{color:Colors.primeryColor}}>MEDICIN HISTORY</Text>        
                        </View>
                    </CollapseHeader>
                    <CollapseBody >
                        <MedicinHistory />
                    </CollapseBody>     
                </Collapse>
                <Collapse >
                    <CollapseHeader style={[styles.option,  styles.lastOption]}>
                        <View>
                        <Text style={{color:Colors.primeryColor}}>CLINIC</Text>        
                        </View>
                    </CollapseHeader>
                    <CollapseBody >
                        <Clinic />
                    </CollapseBody>     
                </Collapse> 
                
            </ScrollView>
            
        </View>
    )
}