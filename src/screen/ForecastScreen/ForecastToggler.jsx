import {
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { global } from "../../assets/styles/global";

const ForecastToggler = ({setForecastId, forecastId, forecast, index}) =>{
  return(
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => setForecastId(index)}>
      <Image
        width={80}
        height={80}
        source={{ uri: `https:${forecast.day.condition.icon}` }}
      />
      <Text
        style={[
          global.text,
          forecastId === index && {
            borderBottomColor: "#fff",
            borderBottomWidth: 2,
          },
        ]}>
        {forecast.date}
      </Text>
  </TouchableOpacity>
  )
}
export default ForecastToggler;