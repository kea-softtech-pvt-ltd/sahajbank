import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function ListBar(props) {
  return (
    
    <View style={styles.helpContainer}>
        <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
            <Ionicons
            name={props.name}
            size={30}
            style={{ marginBottom: -3 }}
            color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
            />
            <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
        </TouchableOpacity>
    </View>
  );
}
