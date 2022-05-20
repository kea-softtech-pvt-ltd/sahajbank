import React from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import styles from '../constants/Styles';

const MainButton = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.loginButtonContainer}>
        <Text style={styles.getButtonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MainButton;
