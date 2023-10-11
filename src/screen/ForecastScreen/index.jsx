import { Text, View } from 'react-native';
import { useState } from 'react';
import { global } from '../../../assets/styles/global';
import Container from '../../components/Container';
import ForecastToggler from './ForecastToggler';
import ForecastDetails from './ForecastDetails';

const ForecastScreen = ({ route }) => {
  const data = route.params?.forecast;
  const [forecastId, setForecastId] = useState(0);

  return (
    <Container hasBackground={true}>
      <View>
        <Text style={[global.text, { fontSize: 25 }]}>Three day forecast:</Text>
        <View
          style={{
            marginTop: 15,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          {data?.forecastday.map((forecast, index) => (
            <ForecastToggler
              key={index}
              setForecastId={setForecastId}
              forecastId={forecastId}
              forecast={forecast}
              index={index}
            />
          ))}
        </View>
      </View>
      <View style={{ marginTop: 25, flex: 1 }}>
        <Text style={[global.text, { fontSize: 25, marginBottom: 15 }]}>
          Forecast hours:
        </Text>
        <ForecastDetails data={data.forecastday[forecastId].hour} />
      </View>
    </Container>
  );
};

export default ForecastScreen;
