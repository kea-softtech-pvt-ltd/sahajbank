import React,{} from 'react';
import {View,Text} from 'react-native';
import text from '../../constants/Text';

const BoldText = props =>{
    return(
        <Text style={{fontSize:text.textSize,lineHeight:text.lineHeight,
            fontWeight:text.fontBold,color:props.color,
            paddingRight:props.paddingRight,marginTop:props.marginTop,
            paddingLeft:props.paddingLeft,textAlign:props.textAlign}}>{props.children}</Text>
    )
}

export default BoldText ; 