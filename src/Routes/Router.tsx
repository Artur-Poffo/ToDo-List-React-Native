import { createDrawerNavigator } from "@react-navigation/drawer"
import { Feather } from '@expo/vector-icons';

import Home from "../screens/Home"
import About from "../screens/About";

const Drawer = createDrawerNavigator()

export default function Router() {
  return (
    <Drawer.Navigator
      initialRouteName="Tasks"
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#EEE',
        headerTitle: '',
        drawerType: 'back',

        drawerStyle: {
          backgroundColor: '#000e21',
          justifyContent: 'center',
          paddingTop: 100,
          paddingLeft: 12,
          paddingRight: 12
        },

        drawerItemStyle: {
          paddingLeft: 10,
        },

        drawerLabelStyle: {
          fontFamily: 'Roboto_700Bold'
        },

        drawerActiveTintColor: '#FFF',
        drawerActiveBackgroundColor: '#0ea5e9',
        drawerInactiveTintColor: '#EEE',
        drawerInactiveBackgroundColor: 'transparent'
      }}
    >
      <Drawer.Screen
        name="Tasks"
        component={Home}
        options={{
          drawerIcon: ({ color, size, focused }) => {
            return <Feather name="inbox" size={24} color={color} />
          }
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          drawerIcon: ({ color, size, focused }) => {
            return <Feather name="info" size={24} color={color} />
          }
        }}
      />
    </Drawer.Navigator>
  )
}