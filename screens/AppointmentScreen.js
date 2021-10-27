import React,{useEffect, useState} from 'react';
import{View,Text,StatusBar,FlatList, } from 'react-native';
import styles from '../constants/Styles';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView,} from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';
import Doctor from '../Data/Doctor';
import filter from 'lodash.filter';
import DoctorDetails from '../component/DoctorDetails';
import InputHandler from '../component/InputeText';

export default function AppointmentScreen({route,navigation}){
  console.log(route.params)
   // var Doctor = route.params;
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [query, setQuery] = useState('');
    const [fullData, setFullData] = useState(Doctor);

    const API_ENDPOINT = ``;

    useEffect(() => {
        setIsLoading(true);
        setData(Doctor);
        setFullData(Doctor);
        setIsLoading(false);

        // fetch(API_ENDPOINT)
        //   .then(response => response.json())
        //   .then(response => {
        //     setData(response.results);

        //     // ADD THIS
        //     setFullData(response.results);

        //     setIsLoading(false);
        //   })
        //   .catch(err => {
        //     setIsLoading(false);
        //     setError(err);
        //   });
      }, []);
      
    const onChangeSearch = text => {
      const formattedQuery = text.toUpperCase();
      const filteredData = filter(fullData, user => {
        return contains(user, formattedQuery);
      });
      setData(filteredData);
      setQuery(text);

    };

    const contains = ({ name, specialist }, query) => {
      specialist = specialist.toUpperCase()
      name = name.toUpperCase()
      if (name.includes(query) || specialist.includes(query)) {
        return true;
      }
      return false;
    };

    function renderHeader() {
        return (
          <Searchbar  
              placeholder="Search with Doctor Name or Specialization" 
              autoFocus = {true}
              onChangeText={onChangeSearch}
              value={query}
          /> 
        );
    }

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Ionicons name = "md-sync" color="red" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18}}>
          Error fetching data... Check your network connection!
        </Text>
      </View>
    );
  }
    return(
      <View >
          <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = {Colors.primeryColor} translucent = {true}/>
          <ScrollView>
            <View >  
              <FlatList 
                ListHeaderComponent={renderHeader}
                  // ... rest of the props remain same
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item}) => (
                  <DoctorDetails data = {item} navigation = {navigation}/>
                )}
              />
            </View>
          </ScrollView>
      </View>
    )
}