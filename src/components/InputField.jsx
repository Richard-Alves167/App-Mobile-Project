import { StyleSheet, Text, View, TextInput } from 'react-native';
import ColorTypes from '../assets/ColorTypes';

export default function InputField(props) {
  return (
    <View style={styles.inputView}>
        <Text style={styles.text}>{props.label}</Text>
        {props.secure ? (
            <TextInput style={styles.inputText} placeholder={props.placeholder} secureTextEntry={true}></TextInput>
        ) : (
            <TextInput style={styles.inputText} placeholder={props.placeholder}></TextInput>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputText: {
    fontSize: 16,
    padding: 5,
    backgroundColor: ColorTypes.AMETISTASUAVE,
    borderWidth: 1,
    borderColor: ColorTypes.ROXOIMPERIAL,
    borderRadius: 5,
  },
});
