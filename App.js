import React from 'react';
import Menu from './Screens/Menu';
import Login from './Screens/Login';
import Perfil from './Screens/Perfil';
import CreateUser from './Screens/CreateUser';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Carrito from './Screens/Carrito';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Crear cuenta" component={CreateUser} />
        <Stack.Screen name="Menu" component={Menu}/>
        <Stack.Screen name="Carrito" component={Carrito} />
        <Stack.Screen name="Perfil" component={Perfil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;