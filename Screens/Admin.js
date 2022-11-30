import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Boton_custom from '../components/Boton_custom';
import { db } from '../database/firebase';
import { addDoc, collection } from 'firebase/firestore';

const Admin = () => {
    const [newItem, setNewItem] = React.useState({
        nombre: '',
        descripcion: '',
        precio: '',
        imageUri: ''
    });

    const agregar = async() => {
        const p = {
            nombre: newItem.name,
            descripcion: newItem.description,
            precio: newItem.price,
            imageUri: newItem.imageUri
        }
        await addDoc(collection(db, "Productos"), p);
        alert("Se agregó el nuevo producto");
    }

    return(
        <View>
            <TextInput
                onChangeText={(text) => setNewItem({...newItem, name:text})}
                placeholder = "Nombre del Producto"
                style={styles.inputContainer}
            />
            <TextInput
                onChangeText={(text) => setNewItem({...newItem, description:text})}
                placeholder = "Descripcion"
                style={styles.inputContainer}
            />
            <TextInput
                onChangeText={(text) => setNewItem({...newItem, price:text})}
                placeholder = "Precio"
                style={styles.inputContainer}
            />
            <TextInput
                onChangeText={(text) => setNewItem({...newItem, imageUri:text})}
                placeholder = "URL Imagen"
                style={styles.inputContainer}
            />
            <Boton_custom onPress={() => agregar()} label={"Agregar"}></Boton_custom>        
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    inputContainer: {
        width: '90%',
        padding: 13,
        marginVertical: 6,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 6,
    }
})

export default Admin;