import React,{useState,useEffect} from 'react';
import {View,Text,} from 'react-native';
import styles from '../../constants/Styles';

export default function Experience (props) {
    // console.log(props)
    const [experienceData,setExperienceData] = useState([]);
    const [totalExperience,setTotalExperience] = useState('')
    
    useEffect(() => {
        console.log(props)
        let totalExp = 0
        if(props.experienceData.length > 0) {
            totalExp = manipulateExperience(props.experienceData)
            const month = totalExp%12
            let year = 0;
            if(totalExp > 11) {
                const exYear = totalExp/12
                year = exYear.toFixed(0)
            }
            const experience = year +"."+ month;
            setTotalExperience(experience);
        } else {
            setTotalExperience("I am a beginner");
        }
        
        setExperienceData(props.experienceData)
          
    },[props])

    

    function manipulateExperience(data) {
        let totalExperience = 0;
        console.log(data)
        data.map(function(item, index){
            const experiences =  monthDiff(new Date(item.startYear), new Date(item.endYear))
            totalExperience = totalExperience + experiences
            
        })
        return totalExperience;
    }

    function monthDiff(d1, d2) {
        var months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();
        return months <= 0 ? 0 : months;
    }

    return(  
        <View style={styles.centerContent}>  
            <Text style={styles.subTextGrayColor}>{totalExperience} years experience</Text>
        </View>
    )
    
}