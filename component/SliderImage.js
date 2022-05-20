import React,{useState} from "react";
import { StyleSheet, Text, View } from "react-native";
 
import { SliderBox } from "react-native-image-slider-box";
 
export default function SliderImage (){
    let images = [
        require('../assets/images/scroll2.png'),
        require('../assets/images/scroll3.png'),
        require('../assets/images/scroll.png')
    ]
    return(
        <View style={styles.container}>
            <SliderBox 
                images={images}
                sliderBoxHeight={450}
                //onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                dotColor="#FFEE58"
                inactiveDotColor="#90A4AE"
                autoplay
                circleLoop
            />

        </View>
    )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  slideImageBox: {
      width:500,
      height:500
  }
});