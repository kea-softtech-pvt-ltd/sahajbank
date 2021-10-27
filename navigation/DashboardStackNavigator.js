import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../constants/Colors';
import DashboardScreen from '../screens/DashboardScreen';
import ProfileHeader from '../HeaderContener/ProfileHeader';
import DashbordHed from '../HeaderContener/DashbordHed';
import AppointmentScreen from '../screens/AppointmentScreen';
import BookAppointmentScreen from '../screens/BookAppointmentScreen';
import ProfileTabNavigation from './ProfileTabNavigation';
import AddInputScreen from '../screens/AddInpute';
import DoctorProfileScreen from '../screens/DoctorProfile';
import CreateProfileScreen from '../screens/CreateProfileScreen';
import {View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import SelectTimeSlotScreen from '../screens/SelectTimeSlotScreen';
import OtpScreen from '../screens/OtpScreen';
import LoginScreen from '../screens/LoginScreen';
import ClinicScreen from '../screens/ClinicScreen';
import ShowSessionScreen from '../screens/ShowSessionScreen';

const Stack = createStackNavigator();

export default function DashboardStackNavigator(props) {

    return (
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
                name="Dashboard" 
                component={DashboardScreen} 
                options={({navigation}) => ({
                    headerLeft: () => ( <ProfileHeader rightOptions={navigation} profileTitle="Keacure"/>),
                    headerTitle:() =>(null),
                    headerRight: () =>(<DashbordHed rightOptions={navigation}/>)
                })}
              />
              <Stack.Screen 
                name="ProfileRoot" 
                component={ProfileTabNavigation} 
                options={({navigation}) => ({
                    //headerTitle:() =>(null),
                    //headerRight: () =>(<DashbordHed rightOptions={navigation}/>)
                })}
              />
               <Stack.Screen 
                name="AddInput" 
                component={AddInputScreen} 
                options={({navigation}) => ({
                    //headerTitle:() =>(null),
                    //headerRight: () =>(<DashbordHed rightOptions={navigation}/>)
                })}
              />
              <Stack.Screen 
                name="Appointment" 
                component={AppointmentScreen} 
                options={({navigation}) => ({
                  // header : () =>(
                  //   <View>
                  //     <Searchbar  
                  //       placeholder="Search" 
                  //       onChangeText={onChangeSearch}
                  //       value={searchQuery}
                  //     />                    
                  //   </View>
                  // )
                    //headerTitle:() =>(null),
                    //headerRight: () =>(<DashbordHed rightOptions={navigation}/>)
                })}
              />
              <Stack.Screen 
                name="BookAppointment" 
                component={BookAppointmentScreen} 
                // options={({navigation}) => ({
                //     headerTitle:() =>(null),
                //     //headerRight: () =>(<DashbordHed rightOptions={navigation}/>)
                // })}
              />
               <Stack.Screen 
                name="DoctorProfile" 
                component={DoctorProfileScreen} 
                
              />
               <Stack.Screen 
                name="SetTimeSlot" 
                component={SelectTimeSlotScreen} 
                
              />
              <Stack.Screen 
                name="Login" 
                component={LoginScreen} 
                
              />
               <Stack.Screen 
                name="Otp" 
                component={OtpScreen} 
                
              />
               <Stack.Screen 
                name="CreateProfile" 
                component={CreateProfileScreen} 
                
              />
              <Stack.Screen 
                name="Clinic" 
                component={ClinicScreen}  
              />
              <Stack.Screen 
                name="ShowSession" 
                component={ShowSessionScreen}  
              />
          </Stack.Navigator>
    );
}