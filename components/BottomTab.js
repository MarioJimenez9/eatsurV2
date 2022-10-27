import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import react from "react";
import Menu from '../Screens/Menu';
import Perfil from '../Screens/Perfil';
import Carrito from '../Screens/Carrito';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export const BottomTab = () =>{
    return (
        <Tab.Navigator>        
        <Tab.Screen name="Menu" component={Menu}
        options={{
            title: "Menu",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="fast-food-outline" size={size} color={'black'} />
            )
          }}/>
        <Tab.Screen name="Carrito" component={Carrito} 
        options={{
            title: "Carrito",
            tabBarIcon: ({ color, size }) => (
                <AntDesign name="shoppingcart" size={24} color="black" />
            )
          }}/>
        <Tab.Screen name="Perfil" component={Perfil}
        options={{
            title: "Perfil",
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account-outline" size={24} color="black" />
            )
          }}
         />
          
      </Tab.Navigator>
    );
}

