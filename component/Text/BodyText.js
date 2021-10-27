import React,{} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import text from '../../constants/Text';

const BodyText = props => {
    return(
        <TouchableOpacity onPress={props.onPress}>
            <Text style={{fontSize:text.textSize,
                lineHeight:text.lineHeight,lineHeight:props.lineHeight,color:props.color,paddingRight:props.paddingRight,paddingTop:props.paddingTop}}>{props.children}
            </Text>
        </TouchableOpacity>
       
    )
}

export default BodyText ; 