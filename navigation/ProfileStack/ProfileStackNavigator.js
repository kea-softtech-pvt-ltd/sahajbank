import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../constants/Styles';

import CreateProfileScreen from '../../screens/CreateProfileScreen';
import ProfileHeader from '../../HeaderContener/ProfileHeader';
import updateDetailsScreen from '../../screens/UpdateDetailsScreen';
import EducationalDetailsScreen from '../../screens/EducationalDetails';
import ProfessionalExperenceScreen from '../../screens/ProfessionalExperienceScreen';
import UpdateProfessionalDetailsScreen from '../../screens/UpdateProfessionalDetails';
import AddClinicScreen from '../../screens/AddClinicScreen';
import ClinicProfileScreen from '../../screens/ClinicProfileScreen';
import AddOwendClinicScreen from '../../screens/AddOwenClinic';
import AddSessionScreen from '../../screens/AddSessionTiming';
import ModalTesterScreen from '../../screens/ModalTesterScreen';
import HeaderBack from '../../HeaderContener/HeaderBack';
import UpdateProfileScreen from '../../screens/UpdateProfileDetails';

const MyStack = createStackNavigator();

export default function ProfileStackNavigator(props) {
console.log(props)
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
                 initialParams={{ itemId: props.route.params }} 
                // initialParams={{ itemId:'123' }} 
                options={({ navigation, route }) => ({
                    headerLeft: () => (null),
                    headerTitle: () => (
                      <ProfileHeader rightOptions={navigation} profileTitle="PROFILE"/>
                  ),
                  headerRight: ()=>(null),
                  })}
            />
            <MyStack.Screen 
                name="UpdateProfileDetails" 
                component={UpdateProfileScreen} 
                options={({ navigation, route }) => ({
                    headerTitle: () => (
                      <ProfileHeader rightOptions={navigation} profileTitle="UPDATE DETAILS"/>
                  ),
                  headerRight: ()=>(null),
                  })}
            />
             <MyStack.Screen 
                name="EducationalDetails" 
                component={EducationalDetailsScreen} 
                 initialParams={{ itemId: props.route.params }} 
                options={({ navigation, route }) => ({
                    headerTitle: () => (
                      <ProfileHeader rightOptions={navigation} profileTitle="EDUCATION DETAILS"/>
                  ),
                  headerRight: ()=>(null),
                  })}
            />
            <MyStack.Screen 
                name="UpdateDetails" 
                component={updateDetailsScreen} 
                options={({ navigation, route }) => ({
                    headerTitle: () => (
                      <ProfileHeader rightOptions={navigation} profileTitle="UPDATE DETAILS"/>
                  ),
                  headerRight: ()=>(null),
                  })}
            />
             <MyStack.Screen 
                name="ProfessionalExperience" 
                initialParams={{ itemId: props.route.params }} 
                component={ProfessionalExperenceScreen} 
                options={({ navigation, route }) => ({
                    headerTitle: () => (
                      <ProfileHeader rightOptions={navigation} profileTitle="PROFESSIONAL EXPERIENCE"/>
                  ),
                  headerRight: ()=>(null),
                  })}
            />
            <MyStack.Screen 
                name="UpdateProfessionalExperience" 
                component={UpdateProfessionalDetailsScreen} 
                options={({ navigation, route }) => ({
                    headerTitle: () => (
                      <ProfileHeader rightOptions={navigation} profileTitle="UPDATE DETAILS"/>
                  ),
                  headerRight: ()=>(null),
                  })}
            />
             <MyStack.Screen 
                name="Clinic" 
                component={AddClinicScreen} 
                // initialParams={{ itemId: props.route.params }} 
                options={({ navigation, route }) => ({
                    headerTitle: () => (
                      <ProfileHeader rightOptions={navigation} profileTitle="CLINIC"/>
                  ),
                  headerRight: ()=>(null),
                  })}
            />
             <MyStack.Screen 
                name="AddClinic" 
                component={ClinicProfileScreen} 
                options={({ navigation, route }) => ({
                    headerTitle: () => (
                      <ProfileHeader rightOptions={navigation} profileTitle="ADD VISITING CLINIC"/>
                  ),
                  headerRight: ()=>(null),
                  })}
            />
            <MyStack.Screen 
                name="AddOwendClinic" 
                component={AddOwendClinicScreen} 
                options={({ navigation, route }) => ({
                    headerTitle: () => (
                      <ProfileHeader rightOptions={navigation} profileTitle="ADD OWEND CLINIC"/>
                  ),
                  headerRight: ()=>(null),
                  })}
            />
            <MyStack.Screen 
                 name= 'AddSession'
                 component = {AddSessionScreen}
                 options={({navigation}) => ({
                   headerLeft: () => (
                     <HeaderBack rightOptions={navigation}/>
                 ),
                 headerTitle: () => (
                     <ProfileHeader rightOptions={navigation} profileTitle="SESSION TIMINGS"/>
                 ),
                 })}
            />
             <MyStack.Screen 
                name= 'ModalTester'
                component = {ModalTesterScreen}
                options={({navigation}) => ({
                headerLeft: () => (
                  <HeaderBack rightOptions={navigation}/>
                ),
                headerTitle: () => (
                  <ProfileHeader rightOptions={navigation} profileTitle="MODAL TESTER"/>
                ),
                })}
             />  
          </MyStack.Navigator>
    );
}