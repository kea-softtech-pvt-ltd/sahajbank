import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
//import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import useLinking from './navigation/useLinking';
import LoginStackNavigator from './navigation/LoginStackNavigator';
import DashboardStackNavigator from './navigation/DashboardStackNavigator';

const RootStack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Login';
const STORAGE_KEY = 'logn_umn'

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [userToken, setUserToken] = React.useState('');

  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);


  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {

    async function getToken() {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
     // console.log(value)
      setUserToken(value)
      console.log(userToken)
    }
   
    async function loadResourcesAndDataAsync() {
      try {
        //SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        //SplashScreen.hide();
      }
    }
    getToken() 
    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        {userToken == null ? (
        <NavigationContainer >
          <RootStack.Navigator mode="modal" headerMode="none"  initialRouteName="LoginRoot">
              {/* <RootStack.Screen name="LoginRoot" component={LoginStackNavigator} /> */}
              <RootStack.Screen name="Root" component={DashboardStackNavigator} />
          </RootStack.Navigator>
        </NavigationContainer>
        ):(
          <NavigationContainer >
            <RootStack.Navigator mode="modal" headerMode="none">
                <RootStack.Screen name="Root" component={DashboardStackNavigator} />
            </RootStack.Navigator>
          </NavigationContainer>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

