import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const Routes = {
        SIGNIN: 'SignIn',
        SIGNUP: 'SignUp',
        HOME: 'Home',
        DASHBOARD: 'Dashboard',
    }

export default function StackNavigation() {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen
                name={Routes.SIGNIN}
                component={SignInScreen}
            />
            <Stack.Screen
                name={Routes.SIGNUP}
                component={SignUpScreen}
            />
            <Stack.Screen
                name={Routes.HOME}
                component={HomeScreen}
            />
            <Stack.Screen
                name={Routes.DASHBOARD}
                component={DashboardScreen}
            />
        </Stack.Navigator>
    )
}