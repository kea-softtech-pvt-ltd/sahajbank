import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Colors from '../constants/Colors';

import ServicesScreen from '../screens/ServicesScreen';
import DoctorNotInput from '../component/DoctorInvestigationNot';
import Premedication from '../component/Premedication';
import Prescription from '../component/Prescription';
import NewFollowUp from '../component/NewFollowUp';
import MedicinHistory from '../component/MedicineHistory';
import { ScrollView } from 'react-native';

const Tab = createMaterialTopTabNavigator();

function PationtTab() {
  return (
    <Tab.Navigator
        tabBarOptions = {{
           // style: {fontSize:16,fontWidth:'500',flexDirection:'row'},
            activeTintColor: Colors.primeryColor,
           
        }}
    >
      {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> */}
      <Tab.Screen name="Investigation" component={DoctorNotInput} />
      <Tab.Screen name="Premedication" component={Premedication} />
      <Tab.Screen name="Prescription" component={Prescription} />
      <Tab.Screen name="Newfollowup" component={NewFollowUp} />
      <Tab.Screen name="MedicinHistory" component={MedicinHistory} />
      <Tab.Screen name="Clinic" component={MedicinHistory} />
      {/* </ScrollView> */}
    </Tab.Navigator>
  );
}

export default PationtTab ;