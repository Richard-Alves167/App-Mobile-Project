import { StyleSheet, Text, View } from 'react-native';
import { Routes } from '../Routes/StackNavigator';
import ColorTypes from '../assets/ColorTypes';
import InputField from '../components/InputField';
import ButtonComponent from '../components/SubmitButton';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function SignIn({ navigation }) {
  return (
  <View style={styles.container}>
    <Text style={styles.title}>Login</Text>
    <InputField label="Email" placeholder="Digite seu email" secure={false} icon={<MaterialIcons name="email" size={24} color="black" />} />
    <InputField label="Senha" placeholder="Digite sua senha" secure={true} icon={<MaterialIcons name="account-circle" size={24} color="black" />} />
    <ButtonComponent text="Entrar" function={() => console.log('Entrar')}/>
    <Text style={styles.titleSignUp}>Não tem uma conta? Cadastre-se</Text>
    <ButtonComponent text="Cadastrar" function={() => console.log('Cadastrar')}/>
  </View>
  )}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        gap: 10,
        backgroundColor: ColorTypes.PLATINAPALIDO,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    titleSignUp: {
        fontSize: 16,
    }
});