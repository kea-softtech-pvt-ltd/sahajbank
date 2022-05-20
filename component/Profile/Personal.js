import React,{useEffect,useState} from 'react';
import {View,Text,Image} from 'react-native';
import styles from '../../constants/Styles';

export default function Personal (props) {
     console.log(props);

    const [personalData,setPersonalData] = useState([]);

    useEffect(() => {
        setPersonalData(props.personalData)
    },[props])

    return(
        <View>
            {/* {personalData.map((item,id)=>( */}
                <View style={styles.centerContent}  >
                    <Image 
                        source={require('../../assets/images/profileImage.jpg')}
                        style={styles.profileImageStyle}
                    />
                    <Text style={styles.drNameText}>Dr. {personalData.name}</Text>
                </View> 
            {/* ))} */}
        </View>   
    )  
}