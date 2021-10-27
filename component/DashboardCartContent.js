import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

const DashboardCartContent = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
        <View style={styles.option}>
            <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.secvenceShow}>
                <View style={styles.horLine}></View>
                    <View style={{flex:3}}>
                        <Text style={styles.smallText}>{props.children}</Text>
                        <Ionicons 
                            name = "md-radio-button-on"
                            size={30}
                            color={Colors.textGrayColor}
                            onPress={()=>rightOptions.navigate('Settings')}  
                        />
                    </View>   
                <View style={styles.horLine}></View>
                <View style={{flex:3}}>
                        <Text style={styles.smallText}>10:30</Text>
                        <Ionicons 
                            name = "md-radio-button-on"
                            size={30}
                            color={Colors.textGrayColor}
                            onPress={()=>rightOptions.navigate('Settings')}  
                        />
                </View>
                <View style={styles.horLine}></View>
                <View style={{flex:3}}>
                        <Text style={styles.smallText}>11:00</Text>
                        <Ionicons 
                            name = "md-radio-button-on"
                            size={30}
                            color={Colors.textGrayColor}
                            onPress={()=>rightOptions.navigate('Settings')}  
                        />
                </View>
                <View style={styles.horLine}></View>
                <View style={{flex:3}}>
                        <Text style={styles.smallText}>11:30</Text>
                        <Ionicons 
                            name = "md-radio-button-on"
                            size={30}
                            color={'green'}
                            onPress={()=>rightOptions.navigate('Settings')}  
                        />
                </View>
                <View style={styles.horLine}></View>
                <View style={{flex:3}}>
                        <Text style={styles.smallText}>12:00</Text>
                        <Ionicons 
                            name = "md-radio-button-on"
                            size={30}
                            color={Colors.textGrayColor}
                            onPress={()=>rightOptions.navigate('Settings')}  
                        />
                </View>
                <View style={styles.horLine}></View>
                <View style={{flex:3}}>
                        <Text style={styles.smallText}>12:30</Text>
                        <Ionicons 
                            name = "md-radio-button-on"
                            size={30}
                            color={Colors.textGrayColor}
                            onPress={()=>rightOptions.navigate('Settings')}  
                        />
                </View>
                <View style={styles.horLine}></View>  
            </View>
            </ScrollView>
        </View>
    </TouchableOpacity>
  );
};

export default DashboardCartContent;
