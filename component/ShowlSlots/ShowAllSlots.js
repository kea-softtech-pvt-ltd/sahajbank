import React,{useState,useEffect} from 'react';
import {View,Text,ScrollView} from 'react-native';
import styles from '../../constants/Styles';
import Colors from '../../constants/Colors';

const ShowAllSlots = (props) =>{
    console.log(props)
    const [allSlots,setAllSlots] = useState('');

    useEffect(()=>{
        showSlots();
    },[]);

    const showSlots =()=>{
        let x = {
            slotInterval: props.timeSlote,
            openTime: props.fromTime,
            closeTime: props.toTime
          };
          //Format the time
          let startTime = moment(x.openTime, "HH:mm");
          //Format the end time and the next day to it 
          let endTime = moment(x.closeTime, "HH:mm").add(1, 'days');
          //Times
          let allTimes = [];
          //Loop over the times - only pushes time with 30 minutes interval
          while (startTime < endTime) {
            //Push times
            allTimes.push(startTime.format("HH:mm")); 
            //Add interval of 30 minutes
            startTime.add(x.slotInterval, 'minutes');
          }
          setAllSlots(allTimes)
          console.log(allTimes);
    }

    return(
        <View style={{flexDirection:'row',margin:10}}>
            <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
                {allSlots.map((item,id)=>(
                    <View style={styles.sloteContener} key={id}>
                        <Text style={styles.getButtonText}>{item}</Text> 
                    </View>
                ))}
                <Text>hhdhhhhhh</Text>
            </ScrollView>
        </View>
    )
}

export default ShowAllSlots ;