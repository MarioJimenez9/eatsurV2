import React from 'react';
import Menu from './Screens/Menu';
import Login from './Screens/Login';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const App = () =>{
    return(
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name = "Login" component={Login}/>
            <Stack.Screen name = "Menu" component={Menu}/>
          </Stack.Navigator>
      </NavigationContainer>
    );
}

export default App;