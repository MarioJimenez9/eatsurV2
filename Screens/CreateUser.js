import { useState } from "react";
import Boton_custom from "../components/Boton_custom";
import SvgComponent from "../components/SvgComponent";
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { collection, addDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import db from '../database/firebase'

const CreateUser = (props) => {
    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        phone: ""
    })

    //Nos sirve para actualizar las variables de estado que estan arriba. Lo usan los textInput
    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value });
    };

    //Recorre los datos de usuarios de la bd para ver si ya existe el correo ingresado en caso de que  no exista se agrega el usuario
    const validateData = async () => {
        var exists = false;
        const querySnapshot = await getDocs(collection(db, "users"));        
        querySnapshot.forEach((doc) => {
            const { email} = doc.data()                        
            if (email == state.email.toLowerCase()) {                
                exists = true                                     
            }
        })
        if(!exists){
            addDoc(collection(db, "users"), {
                name: state.name,
                email: state.email,
                password: state.password,
                phone: state.phone
    
            })
                .then(() => {
                    alert('¡Se ha creado tu cuenta satisfactoriamente! Ahora inicia sesión con tus datos')
                    props.navigation.navigate('Login');
                })
                .catch((error) => {
                    alert(error.message);
             });
            
        }else{
            alert('Ya existe una cuenta con ese correo.')     
        }
        
    }


    //Regex para validar el email
    const validateEmail = (email) => {

        var re = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        return re.test(email);
    };

    //Funcion para agregar usuario, verifica si se llenaron los campos correctamente y llama a validateData
    const AddNewUser =   () => {
        var flag = false;

        if (state.name === '') {
            alert("Debes ingresar un nombre")
            flag = true;
        }
        if (state.email === '') {
            alert("Debes ingresar un correo electronico")
            flag = true;
        }
        if (state.password === '') {
            alert("Debes ingresar un correo electronico")
            flag = true;
        }
        if (state.phone === '') {
            alert("Debes ingresar un número de telefono")
            flag = true;
        }

        if (flag == false) {
            if (validateEmail(state.email)) {                
                validateData()   
            }else{
                alert('Debes proporcionar un correo electronico valido')
            }
        }




    }

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
                    placeholder='Nombre de usuario'
                    onChangeText={(value) => handleChangeText("name", value)}
                />
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
                <TextInput
                    keyboardType="numeric"
                    style={styles.input}
                    placeholder='Número de telefono'
                    onChangeText={(value) => handleChangeText("phone", value)}
                />
                <Boton_custom onPress={() => AddNewUser()} label={"Crear"}></Boton_custom>
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
