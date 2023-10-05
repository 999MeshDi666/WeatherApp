import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { global } from "../../assets/styles/global";
import BasicSearchBar from "../components/BasicSearchBar";
import Container from "../components/Container";
import InfoList from "../components/InfoList";

const MainScreen = () => {
  const [weatherData, setWeatherData] = useState({});

  return (
    <Container hasBackground={true}>
      <BasicSearchBar setWeatherData={setWeatherData} />
      {weatherData ? (
        <View style={styles.detailsInfoContainer}>
          <TouchableOpacity style={styles.detailsInfoBtn} activeOpacity={0.8}>
            <Text style={[global.text, styles.detailsInfoBtnText]}>
              see more
            </Text>
          </TouchableOpacity>
          <InfoList weatherData={weatherData} />
        </View>
      ) : (
        <Text style={[global.text, styles.loadingBtn]}>Loading...</Text>
      )}
    </Container>
  );
};
const styles = StyleSheet.create({
  detailsInfoContainer: {
    marginTop: 26,
  },
  detailsInfoBtn: {
    marginBottom: 10,
  },
  detailsInfoBtnText: {
    fontSize: 18,
    textAlign: "right",
    textDecorationLine: "underline",
  },
  loadingBtn: {
    textAlign: "center",
    marginTop: 200,
    fontSize: 25,
  },
});
export default MainScreen;
