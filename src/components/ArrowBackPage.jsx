import { StyleSheet, Text, View } from 'react-native';
import ColorTypes from '../assets/ColorTypes';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function InputField() {
  return (
    <View style={styles.container}>
        <AntDesign name="arrow-left" size={20} color={ColorTypes.TEXT_TITLE} />
        <Text style={styles.text}>Voltar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 10,
    backgroundColor: ColorTypes.PRIMARY_BROWN,
    borderWidth: 2.5,
    borderColor: ColorTypes.TEXT_TITLE,
    borderRadius: 30,
    paddingLeft: 10,
    position: 'absolute',
    top: 30,
    left: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: ColorTypes.TEXT_TITLE,
    textAlign: 'center',
  },
});
