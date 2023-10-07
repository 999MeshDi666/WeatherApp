import { Text, View, Image } from 'react-native';
import { global } from '../../assets/styles/global';

const InfoListItem = ({ src, info, style }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        width={32}
        height={32}
        style={[{ margin: 8 }, style]}
        source={{ uri: src }}
      />
      <Text style={[global.text, { marginLeft: 10, width: 250 }]}>{info}</Text>
    </View>
  );
};
export default InfoListItem;
