import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import styles from '../constants/Styles';

import CreateProfileScreen from '../screens/CreateProfileScreen';
import EducationalDetailsScreen from '../screens/EducationalDetails';
import ProfessionalExperenceScreen from '../screens/ProfessionalExperienceScreen';
import AddClinicScreen from '../screens/AddClinicScreen';
import ClinicProfileScreen from '../screens/ClinicProfileScreen';

const MyStack = createStackNavigator();

export default function ProfileStackNavigator(props) {

    return (
          <MyStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.primeryColor,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    justifyContent: 'center',
                    alignItems: 'center'
                },
            }}
           >
              <MyStack.Screen 
                name="Profile" 
                component={CreateProfileScreen} 
                options={({ navigation, route }) => ({
                    headerLeft: () => (
                        <Ionicons 
                        name="md-grid-outline"
                         size={20}
                        color={'white'}
                        style={{paddingLeft: 10}}
                        onPress={() =>navigation.toggleDrawer()}
                      />
                    ),
                  })}
            />
            <MyStack.Screen 
                name="EducationalDetails" 
                component={EducationalDetailsScreen} 
                options={({ navigation, route }) => ({
                    headerLeft: () => (
                        <Ionicons 
                        name="md-grid-outline"
                         size={20}
                        color={'white'}
                        style={{paddingLeft: 10}}
                        onPress={() =>navigation.toggleDrawer()}
                      />
                    ),
                  })}
            />
             <MyStack.Screen 
                name="ProfessionalExperence" 
                component={ProfessionalExperenceScreen} 
                options={({ navigation, route }) => ({
                    headerLeft: () => (
                        <Ionicons 
                        name="md-grid-outline"
                         size={20}
                        color={'white'}
                        style={{paddingLeft: 10}}
                        onPress={() =>navigation.toggleDrawer()}
                      />
                    ),
                  })}
            />
             <MyStack.Screen 
                name="Clinic" 
                component={AddClinicScreen} 
                options={({ navigation, route }) => ({
                    headerLeft: () => (
                        <Ionicons 
                        name="md-grid-outline"
                         size={20}
                        color={'white'}
                        style={{paddingLeft: 10}}
                        onPress={() =>navigation.toggleDrawer()}
                      />
                    ),
                  })}
            />
             <MyStack.Screen 
                name="AddClinic" 
                component={ClinicProfileScreen} 
                options={({ navigation, route }) => ({
                    headerLeft: () => (
                        <Ionicons 
                        name="md-grid-outline"
                         size={20}
                        color={'white'}
                        style={{paddingLeft: 10}}
                        onPress={() =>navigation.toggleDrawer()}
                      />
                    ),
                  })}
            />
             
          </MyStack.Navigator>
    );
}