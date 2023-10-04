import { View, Text } from 'react-native';
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
    return(
        <View>
            <Text style={global.title}>
                Forecast today:
            </Text>
            <View style={{marginTop: 20}}>
                {weatherInfo.map((item, index)=>(
                    <InfoListItem key={index} item={item} index={index}/>)
                )}
            </View>
        </View>
    )
}
export default InfoList;