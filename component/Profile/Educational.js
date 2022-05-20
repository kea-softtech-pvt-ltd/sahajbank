import React,{useState,useEffect} from 'react';
import {View,Text,} from 'react-native';
import styles from '../../constants/Styles';

export default function Education (props) {
     console.log(props)
    const [educationData,setEductionData] = useState([]);

    useEffect(() => {
        setEductionData(props.educationData)
    },[props])

    return(
        <View>
            {educationData.map((item,id)=>(
                <View style={styles.centerContent} key={id}>  
                    <Text style={styles.subTextGrayColor}>{item.degree}</Text>
                    <Text style={styles.subTextGrayColor}>{item.specialization}</Text>
                </View>
            ))}
        </View>                   
    )
    
}