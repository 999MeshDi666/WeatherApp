import { StyleSheet, View, Text } from 'react-native';
import InfoListItem from './InfoListItem';
import { global } from '../../../assets/styles/global';

const InfoList = ({weatherData}) =>{
    const weatherInfo = [
        {
          src: `https:${weatherData?.current?.condition.icon}`,
          info: weatherData?.current?.condition.text,
          style: {width:45, height:45}
        },
        {
          src: require("../../../assets/images/weather-images/thermometer.png"),
          info: `Temperature: ${weatherData?.current?.temp_c}°С`,
          style: {margin: 12, width:24, height:35}
        },
        {
          src: require("../../../assets/images/weather-images/fahrenheit.png"),
          info: `Fahrenheit: ${weatherData?.current?.temp_f}`,
          style: {margin: 8, width:35, height:35}
        },
        {
          src: require("../../../assets/images/weather-images/wind.png"),
          info:  `Mph: ${weatherData?.current?.wind_mph} | Kph: ${weatherData?.current?.wind_kph}`,
          style: {margin: 8, width:35, height:35}
        }
    ]
    const locationInfo = [
        {
            src: require("../../../assets/images/weather-images/city.png"),
            info: weatherData?.location?.name,
            style: {margin: 10}
        },
        {
            src: require("../../../assets/images/weather-images/country.png"),
            info: weatherData?.location?.country,
            style: {margin: 10}
        },
        {
            src: require("../../../assets/images/weather-images/timezone.png"),
            info: weatherData?.location?.tz_id,
            style: {margin: 10}
        },
        {
            src: require("../../../assets/images/weather-images/date.png"),
            info: weatherData?.location?.localtime,
            style: {margin: 10}
        },

    ]
    return(
        <View>
            <View> 
                <Text style={[global.text, styles.title]}>
                    Forecast today:
                </Text>
                <View style={{marginTop: 20}}>
                    {weatherInfo.map((item, index)=>(
                        <InfoListItem key={index} item={item} index={index}/>)
                    )}
                </View>
            </View>
            <View style={{marginTop: 30}}>  
                <Text style={[global.text, styles.title]}>
                    Location info:
                </Text>
                <View style={{marginTop: 20}}>
                    {locationInfo.map((item, index)=>(
                        <InfoListItem key={index} item={item}/>)
                    )}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 25
    }
});
export default InfoList;