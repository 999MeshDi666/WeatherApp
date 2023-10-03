import { StyleSheet,View, Image } from 'react-native';

const images = [
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
    },
    {
      src: require("../../assets/images/weather-images/cloud.png"),
      class: "imgCloud4"
    },
]
const Background = () =>{
    return(
        <View >
            {images.map((img, index)=>( 
                <Image
                  key={index}
                  style={[{position: "absolute"}, styles[img.class]]} 
                  source={img.src}
                /> 
            ))}                 
        </View>
    )
}
const styles = StyleSheet.create({
    imgCloud1: {
      top: 30, 
      left: -15
    },
    imgCloud2: {
      top: 200,  
      right: -30,
    },
    imgCloud3: {
      top: 280, 
      left: -60,
    },
    imgCloud4: {
      top: 450, 
      right: -15,
    },
});
export default Background;