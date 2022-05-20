import React,{} from 'react';
import {View,Text,StatusBar,ScrollView} from 'react-native';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';


function FeedbackScreen (params) {
    return(
        <View style={styles.toGetContener}>
        <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
        <ScrollView style={styles.toGetContener} contentContainerStyle={styles.contentContainer}>
            <View style={styles.feedbackContener}>
                <View >
                    <Text style={styles.feedbackTextCentenr}>13</Text>
                    <Text style={styles.feedbackTextCentenr}>Experiences</Text>
                </View>
                <View style={styles.verticalLine}></View>
                <View >
                    <Text style={styles.feedbackTextCentenr}>9</Text>
                    <Text style={styles.feedbackTextCentenr}>Positive</Text>
                </View>
                <View style={styles.verticalLine}></View>
                <View >
                    <Text style={styles.feedbackTextCentenr}>4</Text>
                    <Text style={styles.feedbackTextCentenr}>Negative</Text>
                </View>
            </View>
            <View style={styles.feedbackContenerStyle}>
                <View style={styles.feedbackRowPad}>
                    <View style={styles.feedbackJustContenet}>
                       <Ionicons 
                            name="md-thumbs-down"
                            size={25}
                            style={{}}
                            color={'red'}
                       /> 
                    </View>
                    <View style={{flex:4}}>
                        <Text style={styles.drNameText}>Harsh</Text>
                        <Text style={styles.subTextGrayColorFeedback}>Publish 3 weeks ago</Text>
                    </View>
                    <View style={{flex:1.2}}>
                        <Text>REPLIED</Text>
                    </View>
                </View>
                <Text style={styles.subTextGrayFeedback}>Visited for Body Ache</Text>
                <Text style={styles.subTextFeedback}>The Doctor is bb was not good. He made me wait and then heardaly spend many time with me. He practies sume fustreted </Text>
            </View>
            <View style={styles.feedbackContenerStyle}>
                <View style={styles.feedbackRowPad}>
                    <View style={styles.feedbackJustContenet}>
                       <Ionicons 
                            name="md-thumbs-up"
                            size={25}
                            style={{}}
                            color={'green'}
                       /> 
                    </View>
                    <View style={{flex:4}}>
                        <Text style={styles.drNameText}>Janny Leaver</Text>
                        <Text style={styles.subTextGrayColorFeedback}>Publish 31 weeks ago</Text>
                    </View>
                    <View style={{flex:1.2}}>
                        <Text>REPLIED</Text>
                    </View>
                </View>
                <Text style={styles.subTextGrayFeedback}>Visited for Body Ache</Text>
                <Text style={styles.subTextFeedback}>The Clinic was situated at grounf ground floor the doctor home.The ebvornment was very wecoming.Doctor tretment is very good.</Text>
            </View>
            <View style={styles.feedbackContenerStyle}>
                <View style={styles.feedbackRowPad}>
                    <View style={styles.feedbackJustContenet}>
                       <Ionicons 
                            name="md-thumbs-up"
                            size={25}
                            style={{}}
                            color={'green'}
                       /> 
                    </View>
                    <View style={{flex:4}}>
                        <Text style={styles.drNameText}>Janny Leaver</Text>
                        <Text style={styles.subTextGrayColorFeedback}>Publish 31 weeks ago</Text>
                    </View>
                    <View style={{flex:1.2}}>
                        <Text>REPLIED</Text>
                    </View>
                </View>
                <Text style={styles.subTextGrayFeedback}>Visited for Body Ache</Text>
                <Text style={styles.subTextFeedback}>The Clinic was situated at grounf ground floor the doctor home.The ebvornment was very wecoming.Doctor tretment is very good.</Text>
            </View>
        </ScrollView>
        </View>
    )   
}

export default FeedbackScreen ;