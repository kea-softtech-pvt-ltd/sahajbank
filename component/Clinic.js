import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import styles from '../constants/Styles';
import BodyText from './Text/BodyText';
import BoldText from './Text/BoldText';

export default function Clinic (props) {
    const { clinicData, ownClinic,} = props

    return(            
        <View style={{marginTop:10,marginBottom:10}}>
            <BoldText>Select clinic</BoldText>
            {clinicData.map((clinicItem,id) =>(
                <View style={styles.nextSubContener} key={id}>
                    <Image
                        source={require('../assets/images/clinic.jpg')}
                        style={styles.clinicImageStyle}
                    />
                    <View style={{margin:10,flex:1}}>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('ShowSession',{clinicData:clinicItem})}>
                            <BoldText>{clinicItem.clinicName}</BoldText>
                            <BodyText onPress={()=>props.navigation.navigate('ShowSession',{clinicData:clinicItem})} >{clinicItem.address}</BodyText>
                        </TouchableOpacity>
                    </View>
                </View >
            ))}
            {ownClinic.map((item,id) =>(
                <View style={styles.nextSubContener} key={id}>
                    <Image
                        source={require('../assets/images/clinic.jpg')}
                        style={styles.clinicImageStyle}
                    />
                    <View style={{margin:10,flex:1}}>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('ShowSession',{clinicData:item})}>
                            <BoldText>{item.clinicName}</BoldText>
                            <BodyText>{item.address}</BodyText>  
                        </TouchableOpacity>                  
                    </View>
                </View >
            ))}
        </View>
    )
    
}