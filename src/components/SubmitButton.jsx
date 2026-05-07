import { StyleSheet, Pressable, Text } from "react-native";
import ColorTypes from '../assets/ColorTypes';

export default function SubmitButton(props) {
  return (
    <Pressable 
    style={styles.button}
    onPress={() => props.function()}
    >
        <Text style={styles.text}>{props.text}</Text>
    </Pressable>
)}

const styles = StyleSheet.create({
    text: {
        color: ColorTypes.MEIANOITE,
        fontSize: 16,
        minWidth: 120,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    button: {
        padding: 10,
        borderRadius: 7,
        backgroundColor: ColorTypes.AMETISTASUAVE,
        borderWidth: 2,
        borderColor: ColorTypes.MEIANOITE,
    }
});