import React, { useEffect, useReducer, useState } from 'react';
import Menu from './Screens/Menu';
import Login from './Screens/Login';
import Perfil from './Screens/Perfil';
import Carrito from './Screens/Carrito';
import CreateUser from './Screens/CreateUser';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { BottomTab } from './components/BottomTab';


import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from './database/firebase';

const Stack = createStackNavigator();
const App = () => {
  const[initializing, setInitializing] =useState(true);
  const [user, setUser] = useState();
  
  
  useEffect(()=>{    
    
    const auth = getAuth();    
        
    const subscriber = onAuthStateChanged(auth, (user)=>{
      setUser(user);            
      if(initializing) setInitializing(false);
    })
    
    return subscriber
  },[]);
  
  if(initializing) return null;
  
  if(!user || auth.currentUser.emailVerified==false){
    return (
    
      <Stack.Navigator>
        
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Crear cuenta" component={CreateUser} />        
      </Stack.Navigator>    
      
  );
  }
    return(
      <BottomTab></BottomTab>
    )
    
}

export default () =>{
  return(
  <NavigationContainer>
    <App/>
  </NavigationContainer>
  )
}