import { useState } from "react";
import Boton_custom from "../components/Boton_custom";
import SvgComponent from "../components/SvgComponent";
import { TextInput, View, Text, StyleSheet } from 'react-native';
import {Image} from 'react-native';
import { auth } from '../database/firebase';
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile  } from "firebase/auth";

const CreateUser = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')

    
    //Nos sirve para actualizar las variables de estado que estan arriba. Lo usan los textInput
    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value });
    };

    registerUser = async (email,password) =>{
        await createUserWithEmailAndPassword(auth,email,password)
        
        .then(()=>{                        
            
            sendEmailVerification(auth.currentUser,{
                handleCodeInApp: true,
                url : 'https://eatsur-project.firebaseapp.com',

            }).then(()=>{
                auth.upda
                updateProfile(auth.currentUser, {
                    
                    displayName: name //photoURL: "https://example.com/jane-q-user/profile.jpg"
                })
            })
            .then(()=>{                
                alert(["Se ha enviado un correo de verificación a tu correo "])
                props.navigation.navigate('Login');
                
                
            }).catch((error)=>{
                alert(error)
            }).then(()=>{
              
            })
        })
    }
     

    //Regex para validar el email
    const validateEmail = (email) => {
        
        const re = /^[a-zA-Z0-9.!#$%&'*+/=^_`{|}~-]+@+(alumnos.itsur.edu.mx)$/;        
        
        if (re.test(email) && password.length>0){
            registerUser(email,password)
        }else{
            alert("Datos no validos")
        }
        
    };

    //Funcion para agregar usuario, verifica si se llenaron los campos correctamente y llama a validateData
   

    return (
        <View style={styles.mainContainer}>
            <View style={styles.containerSVG}>
                <SvgComponent></SvgComponent>
            </View>
            <View style={styles.container}>
                <Text style={styles.titulo}>Crea tu cuenta</Text>
                <Text style={styles.subtitulo}>Ingresa tus datos</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Nombre'
                    onChangeText={(value) => setName(value)}

                />
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
                
               
                
                <Boton_custom onPress={() => validateEmail(email)} label={"Crear"}></Boton_custom>
            </View>
        </View>
    )
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
})

export default CreateUser
