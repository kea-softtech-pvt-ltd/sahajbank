import React,{} from 'react';
import { View,ScrollView,Text,Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

function DashbordHed  ({rightOptions}) {

    return (
        <View style={{flex: 1,backgroundColor:Colors.primeryColor,paddingTop:20,paddingBottom:20}}>
            <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>   
    
            <View style={{flexDirection: 'row',justifyContent: 'space-between'}}> 
                <Ionicons 
                    name = "md-settings-outline"
                    size={20}
                    color={'#ffffff'}
                    style={{paddingLeft: 10,}}
                    onPress={()=>rightOptions.navigate('Settings')}  
                />   
                <Ionicons 
                    name="md-help-circle-outline"
                    size={20}
                    color={'white'}
                    style={{paddingLeft: 10,paddingRight: 10}}
                    onPress={()=>rightOptions.navigate('WishList')}   
                />
                 <Ionicons 
                    name="md-notifications-outline"
                    size={20}
                    color={'white'}
                    style={{paddingRight: 10}}
                    onPress={()=>rightOptions.navigate('MyAccount')} 
                />
                </View>
            </View> 
        </View>
    );
  }

  export default DashbordHed ;