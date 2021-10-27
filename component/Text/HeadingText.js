import React,{} from 'react';
import {View,Text} from 'react-native';
import text from '../../constants/Text';

const HeadingText = props => {
    return(
        <Text style={{fontSize:text.headingTextSize,lineHeight:text.lineHeight,fontWeight:text.fontBold}}>{props.children}</Text>
    )
}

export default HeadingText ; 