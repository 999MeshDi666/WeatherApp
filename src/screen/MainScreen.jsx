import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { useState } from 'react';
import { global } from '../../assets/styles/global';
import BasicSearchBar from '../components/BasicSearchBar';
import Container from '../components/Container';


const MainScreen = () =>{
  const [weatherData, setWeatherData] = useState();

  return (
    <Container hasBackground={true}>
      <BasicSearchBar setWeatherData={setWeatherData}/>
      <View style={styles.infoContainer}>
        <TouchableOpacity 
          style={styles.infoBtn} 
          activeOpacity={0.8}
        >
          <Text style={[global.text, styles.infoBtnText]}>see more</Text>
        </TouchableOpacity> 
        <View>
          <Text style={global.title}>
            Forecast today:
          </Text>
          <View style={{marginTop: 20}}>
            <View style={styles.infoListItem}>
              <Image source={ require("../../assets/images/weather-images/thermometer.png")}/>
              <Text style={[global.text, {marginLeft: 10}]}>Something</Text>
            </View>
            <View style={styles.infoListItem}>
              <Image source={ require("../../assets/images/weather-images/thermometer.png")}/>
              <Text style={[global.text, {marginLeft: 10}]}>Something</Text>
            </View>
            <View style={styles.infoListItem}>
              <Image source={ require("../../assets/images/weather-images/fahrenheit.png")}/>
              <Text style={[global.text, {marginLeft: 10}]}>Something</Text>
            </View>
            <View style={styles.infoListItem}>
              <Image source={ require("../../assets/images/weather-images/wind.png")}/>
              <Text style={[global.text, {marginLeft: 10}]}>Something</Text>
            </View>
          </View>
         
        </View>
      </View>
    </Container>
  );
}
const styles = StyleSheet.create({
  infoContainer: {
    marginTop: 26
  },
  infoBtn: {
    marginBottom: 10
  },
  infoBtnText: {
    fontSize: 16,
    textAlign: "right",
    fontFamily: "Montserrat-Bold",
  },
  infoListItem: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 6
  }
  
});
export default MainScreen;