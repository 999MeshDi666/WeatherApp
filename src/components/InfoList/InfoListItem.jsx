import { StyleSheet ,Text, View, Image } from 'react-native';
import { global } from '../../../assets/styles/global';

const InfoListItem = ({item, index})=>{
    return (
        <View style={styles.infoListItem}>
            <Image style={item.style} source={index === 0? {uri: item.src}:item.src}/>
            <Text style={[global.text, styles.infoItemText]}>{item.info}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    infoListItem: {
      flexDirection: "row",
      alignItems: "center",
    },
    infoItemText:{
        marginLeft: 10, 
        fontSize: 20
    }
    
  });
export default InfoListItem;