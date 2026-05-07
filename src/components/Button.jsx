import { StyleSheet, Button } from "react-native";
import ColorTypes from '../assets/ColorTypes';

export default function Button(props) {
  return    
    <Pressable 
    style={styles.button}
    onPress={() => props.function()}
    >
        <Text style={styles.text}>{props.text}</Text>
    </Pressable>
}

const styles = StyleSheet.create({
    text: {
        color: ColorTypes.MEIANOITE,
        fontSize: 12,
        fontWeight: 'bold'
    },
    button: {
        padding: 10,
        borderRadius: 7,
        backgroundColor: ColorTypes.PURPURAMEDIO,
        border: "2px solid"+ ColorTypes.MEIANOITE,
    }
});