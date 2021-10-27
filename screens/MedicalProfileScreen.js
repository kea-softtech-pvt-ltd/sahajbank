import React,{useState,useEffect} from 'react';
import {View,Text,StatusBar,TouchableOpacity} from 'react-native';
import {Collapse, CollapseHeader, CollapseBody} from "accordion-collapse-react-native";
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';
//import MedicalDeses from '../Data/MedicalDeses';
import AliergiesShow from './AliergiesShows';
import CurrentMedicationShow from '../component/Medical/CurrentMedication';
import PastMedicationShow from '../component/Medical/PastMedication';
import ChronicDiseasesShow from '../component/Medical/ChoronicDeseases';
import EnjuriesShow from '../component/Medical/Enjuries';
import SurgeriesShow from '../component/Medical/Surgeries';

export default function MedicalProfileScreen({navigation}){
   // const [MedicalDiseases, setMedicalDiseases] = useState(MedicalDeses);
    const [auditItems, setAuditItems] = useState([]);
    const [auditCurrent, setAuditCurrent] = useState([]);

    return(
        <View style={{flex:1,backgroundColor:Colors.textGrayColor}}>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <View style={{marginTop:10,marginBottom:10}} >
                <View style={[styles.secvenceShow,styles.medicalContener,]} >
                    < Collapse >
                        <CollapseHeader>
                            <View>
                                <Text style={styles.textColorContact}>Aliergies</Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                        <AliergiesShow />
                        </CollapseBody>     
                    </Collapse>
                    
                    <View style={styles.centerContener}>
                        <TouchableOpacity onPress={()=>navigation.navigate('AddInput',{item: "Aliergies"})}>
                            <Text style={styles.textColorContact}>add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.horLineStret}></View>
                <View style={[styles.secvenceShow,styles.medicalContener,]} >
                    < Collapse >
                        <CollapseHeader>
                            <View>
                                <Text style={styles.textColorContact}>CurrentMedication</Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                        <CurrentMedicationShow />
                        </CollapseBody>     
                    </Collapse>
                    
                    <View style={styles.centerContener}>
                        <TouchableOpacity onPress={()=>navigation.navigate('AddInput',{item: "Current Medications"})}>
                            <Text style={styles.textColorContact}>add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.horLineStret}></View>
                <View style={[styles.secvenceShow,styles.medicalContener,]} >
                    < Collapse >
                        <CollapseHeader>
                            <View>
                                <Text style={styles.textColorContact}>PastMedication</Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                        <PastMedicationShow />
                        </CollapseBody>     
                    </Collapse>
                    
                    <View style={styles.centerContener}>
                        <TouchableOpacity onPress={()=>navigation.navigate('AddInput',{item: "Past Medications"})}>
                            <Text style={styles.textColorContact}>add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.horLineStret}></View>
                <View style={[styles.secvenceShow,styles.medicalContener,]} >
                    < Collapse >
                        <CollapseHeader>
                            <View>
                                <Text style={styles.textColorContact}>ChronicDiseases</Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                        <ChronicDiseasesShow />
                        </CollapseBody>     
                    </Collapse>
                    
                    <View style={styles.centerContener}>
                        <TouchableOpacity onPress={()=>navigation.navigate('AddInput',{item:"Chronic Diseases"})}>
                            <Text style={styles.textColorContact}>add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.horLineStret}></View>
                <View style={[styles.secvenceShow,styles.medicalContener,]} >
                    < Collapse >
                        <CollapseHeader>
                            <View>
                                <Text style={styles.textColorContact}>Enjuries</Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                            <EnjuriesShow />
                        </CollapseBody>     
                    </Collapse>
                    
                    <View style={styles.centerContener}>
                        <TouchableOpacity onPress={()=>navigation.navigate('AddInput',{item:"Enjuries"})}>
                            <Text style={styles.textColorContact}>add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.horLineStret}></View>
                <View style={[styles.secvenceShow,styles.medicalContener,]} >
                    < Collapse >
                        <CollapseHeader>
                            <View>
                                <Text style={styles.textColorContact}>Surgeries</Text>
                            </View>
                        </CollapseHeader>
                        <CollapseBody>
                        <SurgeriesShow />
                        </CollapseBody>     
                    </Collapse>
                    
                    <View style={styles.centerContener}>
                        <TouchableOpacity onPress={()=>navigation.navigate('AddInput',{item:"Surgeries"})}>
                            <Text style={styles.textColorContact}>add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.horLineStret}></View>
            </View>
        </ScrollView>
    </View>
    )
}