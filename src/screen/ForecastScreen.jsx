import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { global } from "../../assets/styles/global";
import Container from "../components/Container";
import InfoListItem from "../components/InfoList/InfoListItem";

const ForecastScreen = ({ route }) => {
  const data = route.params?.forecast;
  const [forecastId, setForecastId] = useState(0);
  
  return (
    <Container hasBackground={true}>
      <View>
        <Text style={[global.text, styles.title]}>Three day forecast:</Text>
        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "space-around",
          }}>
          {data?.forecastday.map((forecast, index) => (
            <TouchableOpacity
              key={index}
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
          ))}
        </View>
        
      </View>
      <View style={{ marginTop: 25, flex:1 }}>
          <Text style={[global.text, styles.title, {marginBottom: 15}]}>Forecast hours:</Text>
          <ScrollView >
              {data.forecastday[forecastId].hour.map((item, index) => (
                <InfoListItem 
                  key={index}
                  src={`https:${item.condition.icon}`} 
                  style={{width: 50, height: 50}}
                  info={`${item.condition.text} | ${item.time.split(" ")[1]}`}/>
              ))}
          </ScrollView>
         
        </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 25,
  },
});
export default ForecastScreen;
