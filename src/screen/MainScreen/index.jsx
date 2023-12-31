import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { global } from '../../../assets/styles/global';
import BasicSearchBar from '../../components/BasicSearchBar';
import Container from '../../components/Container';
import InfoList from './InfoList';

const MainScreen = ({ navigation }) => {
  const [weatherData, setWeatherData] = useState({});
  return (
    <Container hasBackground={true}>
      <BasicSearchBar setWeatherData={setWeatherData} />
      {Object.keys(weatherData).length > 0 ? (
        <View style={styles.detailsInfoContainer}>
          <TouchableOpacity
            style={styles.detailsInfoBtn}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Forecast', weatherData)}>
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
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
  loadingBtn: {
    textAlign: 'center',
    marginTop: 200,
    fontSize: 25,
  },
});
export default MainScreen;
