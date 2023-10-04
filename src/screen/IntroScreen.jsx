import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { global } from '../../assets/styles/global';
import Container from '../components/Container';

const images = [
    {
        src: require("../../assets/images/weather-images/sun.png"),
        class: "imgSun"
    },
    {
        src: require("../../assets/images/weather-images/cloud.png"),
        class: "imgCloud1"
    },
    {
        src: require("../../assets/images/weather-images/cloud.png"),
        class: "imgCloud2"
    },
    {
        src: require("../../assets/images/weather-images/cloud.png"),
        class: "imgCloud3"
    }
]

const IntroScreen = ({navigation}) =>{
    return(
        <Container>
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    {images.map((img, index)=>(
                        <Image
                            key={index}
                            style={[{position: "absolute"}, styles[img.class]]} 
                            source={img.src}
                        />
                    ))}
                </View>
                <View >
                    <Text style={[global.text, styles.title]}>
                        Your Weather App
                    </Text>
                    <Text style={[global.text, styles.subtitle]}>
                        All weather forecast information in one app
                    </Text>
                </View>
            </View>
            <TouchableOpacity 
                style={styles.buttonContainer} 
                activeOpacity={0.9}
                onPress={()=> navigation.navigate("Main")}> 
                <Text style={[global.text,styles.buttonText]}>
                    Start
                </Text>
            </TouchableOpacity>
        </Container>
    )   
}

const styles = StyleSheet.create({
    title: {
        fontSize: 45,
        fontFamily: "Montserrat-ExtraBold",
        width: 250
    },
    subtitle: {
        marginTop: 20,
        fontFamily: "Montserrat-Medium",
        width: 300
    },
    imgSun: {
        top: 40, 
        left: 120
    },
    imgCloud1: {
        top: -32, 
        left: 40
    },
    imgCloud2: {
        top: 5,  
        right: 45
    },
    imgCloud3: {
        top: 100, 
        left: 50
    },
    buttonContainer:{
        height: 60,
        marginVertical: 50,
        paddingVertical: 10,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: "#7794CD",
    },
    buttonText:{
        textAlign: "center",
        fontFamily: "Montserrat-Bold",
        fontSize: 24
    }
})
export default IntroScreen;