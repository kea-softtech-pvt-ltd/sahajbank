import React from 'react';
import { View, } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styles from './Styles';

export default function GooglePlacesInput  (props)  {
  return (
    <View style={styles.selectBoxContener}>
        <GooglePlacesAutocomplete
            // placeholder='Search'
            // minLength={2} // minimum length of text to search
            // autoFocus={true}
            // returnKeyType={'search'} // Can be left out for default return key 
            // listViewDisplayed={'auto'}    // true/false/undefined
            // fetchDetails={true}
            // onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
            //     props.notifyChange(details.geometry.location);
            //     console.log(details)
            // }
            // }
            placeholder='Search'
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data, details);
            }}
            query={{
                key: ' AIzaSyDMWmv0f93yIsepr4PqAVC8Yts5yzOnLd4',
                language: 'en',
            }}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={300}
            requestUrl={{
            url:
                'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
            useOnPlatform: 'web',
            }}
        />
    </View>
  );
};

