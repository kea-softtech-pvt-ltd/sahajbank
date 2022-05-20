import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../constants/Styles';

import EducationalDetailsScreen from '../../screens/EducationalDetails';
import ProfileHeader from '../../HeaderContener/ProfileHeader';
import ShowDetails from '../../component/ShowDetails';

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
                name="EducationalDetails" 
                component={EducationalDetailsScreen} 
                initialParams={{ itemId: props.route.params }} 
               //initialParams={{ itemId:'123' }} 
                options={({ navigation, route }) => ({
                    // headerLeft: () => (
                    //     <Ionicons 
                    //     name="md-grid-outline"
                    //      size={20}
                    //     color={'white'}
                    //     style={{paddingLeft: 10}}
                    //     onPress={() =>navigation.toggleDrawer()}
                    //   />
                    // ),
                    headerTitle: () => (
                        <ProfileHeader rightOptions={navigation} profileTitle="EDUCATIONAL DETAILS"/>
                    ),
                    headerRight: ()=>(null),
                  })}
            />
             <MyStack.Screen 
                name="ShowDetails" 
                component={ShowDetails} 
                initialParams={{ itemId: props.route.params }} 
                options={({ navigation, route }) => ({
                    headerLeft: ()=>(null),
                    headerTitle: () => (
                        <ProfileHeader rightOptions={navigation} profileTitle="EDUCATIONAL DETAILS"/>
                    ),
                    headerRight: ()=>(null),
                  })}
            />
           
          </MyStack.Navigator>
    );
}