import { Text, TouchableOpacity } from 'react-native';
import { global } from '../../assets/styles/global';
import { AntDesign } from '@expo/vector-icons';

const BackButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={[global.componentBox, { padding: 6 }]}
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate('Main');
      }}>
      <Text>
        <AntDesign name="arrowleft" size={20} color="#fff" />
      </Text>
    </TouchableOpacity>
  );
};

export default BackButton;
