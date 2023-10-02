import { useCallback } from 'react';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import { global } from '../../assets/styles/global';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Container= ({children}) =>{
    const [fontsLoaded] = useFonts({
        'Montserrat-Regular': require('../../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Light': require('../../assets/fonts/Montserrat-Light.ttf'),
        'Montserrat-Thin': require('../../assets/fonts/Montserrat-Thin.ttf'),
        'Montserrat-Medium': require('../../assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-ExtraBold': require('../../assets/fonts/Montserrat-ExtraBold.ttf'),
    });
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);
    
    if (!fontsLoaded) {
        return null;
    }
    return(
        <View style={global.container} onLayout={onLayoutRootView}> 
            {children}
        </View>
    )
}
export default Container;