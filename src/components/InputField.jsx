import { StyleSheet, Text, View, TextInput } from 'react-native';
import ColorTypes from '../assets/ColorTypes';
import Fontisto from '@expo/vector-icons/Fontisto';

export default function InputField(props) {
  return (
    <View style={styles.inputView}>
        <Text style={styles.text}>{props.label}</Text>
        <View style={styles.inputContainer}>
        {props.icon}
          {props.secure ? (
              <TextInput style={styles.inputText} placeholder={props.placeholder} secureTextEntry={true}></TextInput>
          ) : (
              <TextInput style={styles.inputText} placeholder={props.placeholder}></TextInput>
          )}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ColorTypes.LAVANDAPASTEL,
    borderWidth: 1,
    borderColor: ColorTypes.ROXOIMPERIAL,
    borderRadius: 8,
    paddingLeft: 10,
  },
  inputText: {
    minWidth: 250,
    fontSize: 16,
    padding: 12,
    borderRadius: 8,
    outlineStyle: 'none',
  },
});
