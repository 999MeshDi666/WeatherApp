import { StyleSheet, Text, View, Image } from "react-native";
import { global } from "../../../assets/styles/global";

const InfoListItem = ({ src, info, style }) => {
  return (
    <View style={styles.infoListItem}>
      <Image width={32} height={32} style={[{ margin: 8 }, style]} source={{ uri: src }} />
      <Text style={[global.text, styles.infoItemText]}>{info}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  infoListItem: {
    flexDirection: "row",
    alignItems: "center",
  
  },
  infoItemText: {
    marginLeft: 10,
    fontSize: 20,
  },
});
export default InfoListItem;
