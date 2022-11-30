import * as React from 'react'
import SvgComponent from '../components/SvgComponent';
import { TextInput, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Boton_custom from '../components/Boton_custom';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../database/firebase';
import { useContexto } from '../Context/Contexto';
const Login = ({ navigation }) => {
  
  const {admin, setAdmin} = useContexto();
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')

  loginUser = async (email,password) =>{
    try{
        await signInWithEmailAndPassword(auth, email,password)
        auth.currentUser.reload();
        setAdmin(auth.currentUser.email === "s19120174@alumnos.itsur.edu.mx");
        if(auth.currentUser.emailVerified==false){
          alert("Correo no verificado")
          signOut(auth)
        }else{  
          alert(user + " - " + auth.currentUser.email);
        }
    }catch(error){
      alert(error);
    }
  }
  
 
  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerSVG}>
        <SvgComponent></SvgComponent>
      </View>
      <View style={styles.container}>
        <Text style={styles.titulo}>Bienvenido</Text>
        <Text style={styles.subtitulo}>Entra con tu cuenta</Text>
        <TextInput
          style={styles.input}
          placeholder='Correo electronico'
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput secureTextEntry
          style={styles.input}
          placeholder='Contraseña'
          onChangeText={(value) => setPassword(value)}
        />
        <Text style={styles.Text}>¿Olvidaste tu contraseña?</Text>
        <Boton_custom onPress={() => loginUser(email,password)} label={"Iniciar sesión"}></Boton_custom>
        <TouchableOpacity onPress={() => navigation.navigate('Crear cuenta')}>
          <Text style={styles.Text}>No tengo una cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#f1f1f1",
    flex: 1,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  containerSVG: {
    height: 140,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 50,
    color: '#34434D',
    fontWeight: 'bold',

  },
  subtitulo: {
    fontSize: 18,
    color: 'gray'
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 10,
    borderRadius: 30,
    backgroundColor: '#fff'
  },
  boton: {
    borderRadius: 20,

  },
  Text: {
    marginTop: 10
  }

});

export default Login
