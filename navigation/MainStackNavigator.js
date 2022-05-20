import React from 'react';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

import ProfileHeader from '../HeaderContener/ProfileHeader';
import DashbordHed from '../HeaderContener/DashbordHed';
import MyTabs from './TopTabNavigator';
import ProfileScreen from '../screens/ProfileScreen';
import AppSharp from '../HeaderContener/AppSaharp';
import FeedbackTabNavigator from './FeedbackTabNavigator';
import ScheduleScreen from '../screens/ScheduleScreen';
import AppointmentScreen from '../screens/AppointmentScreen';
import PationtSelectedScreen from '../screens/PationtSelectedScreen';
import PationtTab from './PationtTopTabNavigatior';
import HeaderRight from '../HeaderContener/HeaderRight';
import ProfileStackNavigator from './ProfileStack/ClinicStack';

const Stack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Dashboard';

export default function MainStackNavigator  (props){
    return(
        <Stack.Navigator 
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
        <Stack.Screen
            name= 'DashboardRoot'
            component = {MyTabs}
            options={({navigation}) => ({
                headerLeft: () => ( <ProfileHeader rightOptions={navigation} profileTitle="Keacure"/>),
                headerTitle:() =>(null),
                headerRight: () =>(<DashbordHed rightOptions={navigation}/>)
            })}
        />
         <Stack.Screen
            name= 'Profile'
            component = {ProfileScreen}
            options={({navigation}) => ({
                // headerLeft: () => (
                //     <AppSharp rightOptions={navigation}/>
                // ),
                headerTitle: () => (
                    <ProfileHeader rightOptions={navigation} profileTitle="PROFILE"/>
                ),
                headerRight:() => (null)
            })}
            
        />
        <Stack.Screen
            name= 'FeedBack'
            component = {FeedbackTabNavigator}
            options={({navigation}) => ({
                headerLeft: () => (
                    <AppSharp rightOptions={navigation}/>
                 
                 ),
                headerTitle: () => (
                    <ProfileHeader rightOptions={navigation} profileTitle="FEEDBACK"/>
                ),
                headerRight: ()=>(
                    <Ionicons
                        name = 'md-ellipsis-horizontal-sharp' 
                        size = {25}
                        color={'#ffffff'}
                        style={{margin:10}}
                    />
                )
            })}  
        />
        <Stack.Screen
            name= 'Schedule'
            component = {ScheduleScreen}
            options={({navigation}) => ({
                headerLeft: () => (
                    <AppSharp rightOptions={navigation}/>
                 
                 ),
                headerTitle: () => (
                    <ProfileHeader rightOptions={navigation} profileTitle="CALENDAR"/>
                ),
                headerRight: ()=>(
                    <Ionicons
                        name = 'md-search-outline' 
                        size = {25}
                        color={'#ffffff'}
                        style={{margin:10}}
                    />
                )
            })}   
        />
        <Stack.Screen
            name= 'Appointment'
            component = {AppointmentScreen}
            options={({navigation}) => ({
                headerLeft: () => (
                    <AppSharp rightOptions={navigation}/>
                 
                 ),
                headerTitle: () => (
                    <ProfileHeader rightOptions={navigation} profileTitle="Appointment"/>
                ),
                headerRight: ()=>(
                    <Ionicons
                        name = 'md-search-outline' 
                        size = {25}
                        color={'#ffffff'}
                        style={{margin:10}}
                    />
                )
            })}   
        />
        <Stack.Screen
            name= 'PationtSelected'
           component = {PationtSelectedScreen}
            //component = {PationtTab}
            options={({navigation}) => ({
                headerLeft: () => (
                    <AppSharp rightOptions={navigation}/>
                 
                 ),
                headerTitle: () => (
                    <ProfileHeader rightOptions={navigation} profileTitle="Pationt"/>
                ),
                headerRight: ()=>(
                    <HeaderRight rightOptions={navigation}/>
                )
            })}   
        />
        {/* <Stack.Screen
            name='Clinic' 
            component = {ProfileStackNavigator}
        /> */}
        </Stack.Navigator>
    )
}