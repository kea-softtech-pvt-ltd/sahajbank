import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import styles from '../constants/Styles';
import BodyText from './Text/BodyText';

const MainButton = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.loginButtonContainer}>
        <Text style={styles.getButtonText}>{props.children}</Text>
        {/* <BodyText color={'#fff'}>{props.children}</BodyText> */}
      </View>
    </TouchableOpacity>
  );
};

export default MainButton;
