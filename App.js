import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './src/screen/MainScreen';
import IntroScreen from './src/screen/IntroScreen';
import ForecastScreen from './src/screen/ForecastScreen';
import BackButton from './src/components/BackButton';
const header = {
  headerStyle: {
    backgroundColor: '#B8D9FF',
  },
  title: '',
  headerShadowVisible: false,
};
const NavStack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <NavStack.Navigator initialRouteName="Intro" screenOptions={header}>
        <NavStack.Screen name="Intro" component={IntroScreen} />
        <NavStack.Screen
          name="Main"
          options={{ headerBackVisible: false }}
          component={MainScreen}
        />
        <NavStack.Screen
          name="Forecast"
          component={ForecastScreen}
          options={({ navigation }) => ({
            headerLeft: () => <BackButton navigation={navigation} />,
          })}
        />
      </NavStack.Navigator>
    </NavigationContainer>
  );
}
