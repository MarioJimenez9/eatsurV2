import SvgComponent from '../components/SvgComponent';
import { TextInput, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Boton_custom from '../components/Boton_custom';
import { collection, getDocs } from "firebase/firestore";
import { useState } from 'react';
import db from '../database/firebase'


const Login = ({ navigation }) => {

  const [state, setState] = useState({
    email: "",
    password: "",
  })

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

//VALIDA EL LOGIN PERO CREO QUE SE PUEDE MEJORAR
  const validate = ( async () => {
    var logueado = false;
    const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        const { name, email, password, phone } = doc.data()        
        if (email == state.email.toLowerCase() && password == state.password) {
          logueado = true;
          
        }
      });
    if (logueado === true) {
      navigation.navigate('Menu')
    }else{
      alert('Datos incorrectos')
    }
  })
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
          onChangeText={(value) => handleChangeText("email", value)}
        />
        <TextInput secureTextEntry
          style={styles.input}
          placeholder='Contraseña'
          onChangeText={(value) => handleChangeText("password", value)}
        />
        <Text style={styles.Text}>¿Olvidaste tu contraseña?</Text>
        <Boton_custom onPress={() => validate()} label={"Iniciar sesión"}></Boton_custom>
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
