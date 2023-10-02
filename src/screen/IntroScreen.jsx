import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { global } from '../../assets/styles/global';
import Container from '../components/Container';
const IntroScreen = ({navigation}) =>{
    return(
        <Container>
            <View>
                <Text style={[global.text, styles.title]}>
                    {`Your 
                      Weather 
                      App`}
                </Text>
                <Text style={[global.text, styles.subtitle]}>
                    All weather forecast information in one app
                </Text>
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
        lineHeight: 20
    },
    subtitle: {
        fontSize: 16,
    },
    buttonContainer:{
        height: 56,
        marginTop: 50,
        paddingVertical: 10,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: "#7794CD",
    },
    buttonText:{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 24
    }
})
export default IntroScreen;