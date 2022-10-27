import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Boton_custom from '../components/Boton_custom';
import { auth } from '../database/firebase';
import { signOut } from 'firebase/auth';
const Perfil = () =>{
    return(
        <View style={styles.container}>
            <Image style={styles.FotoPerfil} source={require('../assets/default.jpg')}/>            
            <Text style={styles.user}>Nombre: {auth.currentUser.displayName}</Text>
            <Text style={styles.user}>Correo: {auth.currentUser.email}</Text>            
            <Boton_custom onPress={() => signOut(auth)} label={"Cerrar sesion"}></Boton_custom>        
        </View>
    );
}
export default Perfil;

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',                
        margin:10,
        
    },
    user:{        
        margin: 20,
        fontSize:16,        
    },
    FotoPerfil:{
      borderRadius: 100,
      width: 200,
      height: 200,
      alignSelf: "center"
        
    }
});