import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../constants/Styles';

import AddClinicScreen from '../../screens/AddClinicScreen';
import ClinicProfileScreen from '../../screens/ClinicProfileScreen';
import ProfileHeader from '../../HeaderContener/ProfileHeader';
import ModalTesterScreen from '../../screens/ModalTesterScreen';
import AddSessionScreen from '../../screens/AddSessionTiming';
import HeaderBack from '../../HeaderContener/HeaderBack';
import AddOwendClinicScreen from '../../screens/AddOwenClinic';

const MyStack = createStackNavigator();

export default function ProfileStackNavigator({route}) {
  console.log(route)
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
                name="Clinic" 
                component={AddClinicScreen} 
                initialParams={{ itemId:route.params }} 
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
                    headerTitle: () => (
                      <ProfileHeader rightOptions={navigation} profileTitle="CLINIC"/>
                  ),
                  })}
            />
             <MyStack.Screen 
                name="AddClinic" 
                component={ClinicProfileScreen} 
                options={({navigation}) => ({
                  headerLeft: () => (
                    <HeaderBack rightOptions={navigation}/>
                ),
                  headerTitle: () => (
                      <ProfileHeader rightOptions={navigation} profileTitle="ADD CLINIC"/>
                  ),
                })}
            />
             <MyStack.Screen 
                name="AddOwendClinic" 
                component={AddOwendClinicScreen} 
                options={({navigation}) => ({
                  headerLeft: () => (
                    <HeaderBack rightOptions={navigation}/>
                ),
                  headerTitle: () => (
                      <ProfileHeader rightOptions={navigation} profileTitle="ADD CLINIC"/>
                  ),
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