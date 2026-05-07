import { createDrawerNavigator} from '@react-navigation/drawer';
import Routes from '.';
import HomeScreen from '../screens/Home';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen 
                name={Routes.HOME} 
                component={HomeScreen} 
            />
        </Drawer.Navigator>
    )
}

