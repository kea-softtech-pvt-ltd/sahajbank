import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen  from '../screens/LoginScreen'
import OtpScreen from '../screens/OtpScreen';
import SignUpScreen from '../screens/SignUpScreen';

const MyStack = createStackNavigator();

export default function LoginStackNavigator(props) {

    return (
          <MyStack.Navigator mode="modal" headerMode="none" >
              <MyStack.Screen name="Login" component={LoginScreen} />
              <MyStack.Screen name="SignUp" component={SignUpScreen} />
              <MyStack.Screen name="OtpScreen" component={OtpScreen} />
          </MyStack.Navigator>
    );
}