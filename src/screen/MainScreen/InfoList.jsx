import { View, Text } from "react-native";
import InfoListItem from "../../components/InfoListItem";
import { global } from "../../../assets/styles/global";
import {Asset} from 'expo-asset';

const InfoList = ({ weatherData }) => {
  const weatherInfo = [
    {
      src: `https:${weatherData?.current?.condition.icon}`,
      info: weatherData?.current?.condition.text,
      style: { margin: 0, width: 45, height: 45 },
    },
    {
      src: Asset.fromModule(require("../../../assets/images/weather-images/thermometer.png")).uri,
      info: `Temperature: ${weatherData?.current?.temp_c}°С`,
      style: { width: 28, height: 35 },
    },
    {
      src: Asset.fromModule(require("../../../assets/images/weather-images/fahrenheit.png")).uri,
      info: `Fahrenheit: ${weatherData?.current?.temp_f}`,
      style: { width: 35, height: 35 },
    },
    {
      src: Asset.fromModule(require("../../../assets/images/weather-images/wind.png")).uri,
      info: `Mph: ${weatherData?.current?.wind_mph} | Kph: ${weatherData?.current?.wind_kph}`,
      style: { width: 35, height: 35 },
    },
  ];
  const locationInfo = [
    {
      src: Asset.fromModule(require("../../../assets/images/weather-images/city.png")).uri,
      info: weatherData?.location?.name,
    },
    {
      src: Asset.fromModule(require("../../../assets/images/weather-images/country.png")).uri,
      info: weatherData?.location?.country,
    },
    {
      src: Asset.fromModule(require("../../../assets/images/weather-images/timezone.png")).uri,
      info: weatherData?.location?.tz_id,
    },
    {
      src: Asset.fromModule(require("../../../assets/images/weather-images/date.png")).uri,
      info: weatherData?.location?.localtime.split(" ")[0],
    },
  ];
  return (
    <View>
      <View>
        <Text style={[global.text, { fontSize: 25,}]}>Forecast today:</Text>
        <View style={{ marginTop: 20 }}>
          {weatherInfo.map((item, index) => (
            <InfoListItem
              key={index}
              src={item.src}
              info={item.info}
              style={item.style}
              index={index}
            />
          ))}
        </View>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={[global.text, { fontSize: 25}]}>Location info:</Text>
        <View style={{ marginTop: 20 }}>
          {locationInfo.map((item, index) => (
            <InfoListItem key={index} info={item.info} src={item.src} style={item.style}/>
          ))}
        </View>
      </View>
    </View>
  );
};


export default InfoList;
