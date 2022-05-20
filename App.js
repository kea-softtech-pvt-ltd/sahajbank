// import * as React from 'react';
import React, { useCallback, useEffect, useState,useRef} from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { useRecoilValue, RecoilRoot } from 'recoil';

//import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import * as SplashScreen from 'expo-splash-screen';
import { Entypo } from '@expo/vector-icons';
import useLinking from './navigation/useLinking';
import LoginStackNavigator from './navigation/LoginStackNavigator';
import CreateProfileDrawerNavigator from './navigation/CreateProfileDrawerNavigator';
import MainStackNavigator from './navigation/MainStackNavigator';
import ProfileStackNavigator from './navigation/ProfileStack/ClinicStack';
// import Toast from 'react-native-toast-message'


const RootStack = createStackNavigator();
const INITIAL_ROUTE_NAME = 'Login';

export default function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [userToken, setUserToken] = useState([]);
  
  const [appIsReady, setAppIsReady] =useState(false);
  const [initialNavigationState, setInitialNavigationState] = useState();
  const containerRef = useRef();
  //const { getInitialState } = useLinking(containerRef);


  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
 
    async function loadResourcesAndDataAsync() {
      try {
         // Keep the splash screen visible while we fetch resources
         await SplashScreen.preventAutoHideAsync();
         // Pre-load fonts, make any API calls you need to do here
         await Font.loadAsync(Entypo.font);
         // Artificially delay for two seconds to simulate a slow loading
         // experience. Please remove this if you copy and paste the code!
         await new Promise(resolve => setTimeout(resolve, 2000));
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
        setAppIsReady(true);
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    
    return (
      <View style={styles.container} onLayout={onLayoutRootView}>
        <RecoilRoot >
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {/* {userToken == null ? (
          <NavigationContainer >
            <RootStack.Navigator mode="modal" headerMode="none"  initialRouteName="LoginRoot">
                <RootStack.Screen name="LoginRoot" component={LoginStackNavigator} />
                <RootStack.Screen name="CreateProfileRoot" component={CreateProfileDrawerNavigator} />
                <RootStack.Screen name="Clinic" component={ProfileStackNavigator} />
                <RootStack.Screen name="Root" component={MainStackNavigator} />
            </RootStack.Navigator>
          </NavigationContainer>
            ):( */}
              <NavigationContainer >
                <RootStack.Navigator mode="modal" headerMode="none">
                  <RootStack.Screen name="LoginRoot" component={LoginStackNavigator} />
                  <RootStack.Screen name="CreateProfileRoot" component={CreateProfileDrawerNavigator} />
                  <RootStack.Screen name="Clinic" component={ProfileStackNavigator} />
                  <RootStack.Screen name="Root" component={MainStackNavigator} />
                </RootStack.Navigator>
              {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
              </NavigationContainer>
            {/* )}  */}
        </RecoilRoot>
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

