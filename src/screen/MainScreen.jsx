import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { global } from '../../assets/styles/global';

const MainScreen = () =>{
    const [weatherData, setWeatherData] = useState();
  const [cityName, setCityName] = useState("Almaty");
  const [searchQuery, setSearchQuery] = useState(cityName)

  const getWeatherData = async (cityName) =>{
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
      params: {
        q: cityName,
        days: '3'
      },
      headers: {
        'X-RapidAPI-Key': '81501b7da1msh7de06953b92272cp19b9c4jsnf8e417d66fc5',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    try {
      const response = await axios.request(options);
      setWeatherData(response.data)
    } catch (error) {
      console.error(error);
    }
  }
  const handleSearchQuery = () =>{
    if(cityName) setSearchQuery(cityName);

  }
  useEffect(()=>{
    getWeatherData(searchQuery)   
  },[searchQuery])
  
  
  return (
    <View style={[global.container, styles.container]}>
      <View>
         <TextInput 
          style={styles.textInput} 
          placeholder='Enter name of the city'
          defaultValue={cityName}
          onChangeText={(value)=>{setCityName(value)}}
        />
        <Button title='Search' color="blue" onPress={handleSearchQuery}/>
      </View>
      <View style={{marginVertical: 15, alignItems: "center"}}>
        <Text style={{marginBottom: 8, fontSize: 20, fontWeight: "bold" }}> Location info</Text>
        <Text>{weatherData?.location.name}</Text>
        <Text>{weatherData?.location.region}</Text>
        <Text>{weatherData?.location.country}</Text>
        <Text>{weatherData?.location.tz_id}</Text>
        <Text>{weatherData?.location.localtime}</Text>
      </View>
      <View style={{alignItems: "center"}}>
        <Text style={{marginBottom: 8, fontSize: 20, fontWeight: "bold" }}> Forecast info</Text>
        {weatherData?.forecast.forecastday.map((info, index)=>(
          <View key={index}>
             <Text >{info.date}</Text>
            <Text >{info.day.condition.text}</Text>
            <Image style={{width: 50, height: 50}} source={{ uri:`https:${info.day.condition.icon}`}}/>
          </View>
         
        ))}
      </View>
        
        
   
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInput: {
      borderWidth: 1,
      borderColor: "#000",
      padding: 4,
    }
});
export default MainScreen;