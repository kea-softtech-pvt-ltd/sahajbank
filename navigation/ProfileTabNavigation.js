import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Colors from '../constants/Colors';

import PersonalScreen from '../screens/PersonalScreen';
import MedicalProfileScreen from '../screens/MedicalProfileScreen';
import LifstyleProfileScreen from '../screens/LifstyleProfileScreen';

const Tab = createMaterialTopTabNavigator();

function ProfileTabNavigation() {
  return (
    <Tab.Navigator
        tabBarOptions = {{
            style: {backgroundColor: Colors.primeryColor,},
            activeTintColor: "#ffffff",
        
        }}
    >
        <Tab.Screen 
            name="Personal" 
            component={PersonalScreen}       
        />
        <Tab.Screen 
            name="Medical" 
            component={MedicalProfileScreen}       
        />
        <Tab.Screen 
            name="Lifstyle" 
            component={LifstyleProfileScreen}       
        />
    </Tab.Navigator>
  );
}

export default ProfileTabNavigation ;