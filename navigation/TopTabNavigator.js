import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Colors from '../constants/Colors';

import DashoboardScreen from '../screens/DashboardScreen';
import ServicesScreen from '../screens/ServicesScreen';

const Tab = createMaterialTopTabNavigator();

function MyTabs(props) {
  console.log(props)
  return (
    <Tab.Navigator
        tabBarOptions = {{
            style: {backgroundColor: Colors.primeryColor,},
            activeTintColor: "#ffffff",
        
        }}
    >
      <Tab.Screen 
            name="App" 
            component={DashoboardScreen}    
      />
      <Tab.Screen name="Settings" component={ServicesScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs ;