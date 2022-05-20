import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Colors from '../constants/Colors';

import FeedbackScreen from '../screens/FeedBackScreen';
import RecommendetionScreen from '../screens/RecommendationScreen';

const Tab = createMaterialTopTabNavigator();

function FeedbackTabNavigator () {
  return (
    <Tab.Navigator
        tabBarOptions = {{
            style: {backgroundColor: Colors.primeryColor,},
            activeTintColor: "#ffffff",
        
        }}
    >
      <Tab.Screen 
            name="Experences" 
            component={FeedbackScreen}       
      />
      <Tab.Screen name="Recommendetion" component={RecommendetionScreen} />
    </Tab.Navigator>
  );
}

export default FeedbackTabNavigator ;