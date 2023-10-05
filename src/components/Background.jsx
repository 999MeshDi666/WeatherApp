import { StyleSheet, View, Image } from "react-native";

const images = [
  {
    src: require("../../assets/images/weather-images/cloud.png"),
    style: {
      top: 40,
      left: -15,
    },
  },
  {
    src: require("../../assets/images/weather-images/cloud.png"),
    style: {
      top: 200,
      right: -30,
    },
  },
  {
    src: require("../../assets/images/weather-images/cloud.png"),
    style: {
      top: 280,
      left: -60,
    },
  },
  {
    src: require("../../assets/images/weather-images/cloud.png"),
    style: {
      top: 450,
      right: -15,
    },
  },
];
const Background = () => {
  return (
    <View>
      {images.map((img, index) => (
        <Image
          key={index}
          style={[{ position: "absolute" }, img.style]}
          source={img.src}
        />
      ))}
    </View>
  );
};

export default Background;
