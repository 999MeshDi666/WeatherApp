import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { global } from '../../assets/styles/global';
import { MaterialIcons } from '@expo/vector-icons';

const BasicSearchBar = ({ setWeatherData }) => {
  const [cityName, setCityName] = useState('Almaty');
  const [searchQuery, setSearchQuery] = useState(cityName);
  const handleSearchQuery = () => {
    if (cityName) setSearchQuery(cityName);
  };

  const getWeatherData = async (cityName) => {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
      params: {
        q: cityName,
        days: '3',
      },
      headers: {
        'X-RapidAPI-Key': '81501b7da1msh7de06953b92272cp19b9c4jsnf8e417d66fc5',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
    };
    try {
      const response = await axios.request(options);
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
      setWeatherData({});
    }
  };

  useEffect(() => {
    getWeatherData(searchQuery);
  }, [searchQuery]);

  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={[global.text, global.componentBox, styles.searchBar]}
        placeholder="Enter name of the city"
        placeholderTextColor="#FFF6"
        defaultValue={cityName}
        onChangeText={(value) => {
          setCityName(value);
        }}
      />
      <TouchableOpacity
        style={[global.componentBox, { padding: 8 }]}
        activeOpacity={0.9}
        onPress={handleSearchQuery}>
        <Text style={[global.text]}>
          <MaterialIcons name="search" size={28} color="#fff" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default BasicSearchBar;
const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  searchBar: {
    height: 45,
    width: 280,
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontFamily: 'Montserrat-Bold',
  },
});
