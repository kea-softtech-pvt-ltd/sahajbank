import React,{useState,useEffect} from 'react';
import { View,ScrollView,Text,Image,AsyncStorage} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import BodyText from '../component/Text/BodyText';

function DashbordHed  ({rightOptions}) {

    const [loginId, setLoginId] = useState(null)

    useEffect ( ()=>{
        readData()
        console.log(loginId);
    },[])
 
    const readData = async () => {
        try {
            const userIdAsync = await AsyncStorage.getItem("lpan_anu")
            console.log("async",userIdAsync)
            if (userIdAsync !== null) {
                setLoginId(userIdAsync)
            }
        }   catch (e) {
            alert('Failed to fetch the data from storage')
        }
    }

    const removeLiginId = async () =>{
        try {
            await AsyncStorage.removeItem("lpan_anu");
            console.log('Data removed')
        }
        catch(exception) {
            console.log(exception)
        }
    }
    
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
                <View>
                {
                    loginId == null?(
                            <BodyText color={"#fff"} paddingRight={10} onPress={()=>rightOptions.navigate('Login')}>Login</BodyText>
                        ):(
                            <BodyText color={"#fff"} paddingRight={10} onPress={removeLiginId}>Logout</BodyText>
                        )
                    }
                </View>
                
                </View>
            </View> 
        </View>
    );
  }

  export default DashbordHed ;