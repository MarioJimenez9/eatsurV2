import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const Perfil = () =>{
    return(
        <View style={styles.container}>
            <Image source={require('../assets/Image1.jpg')}
            style={styles.FotoPerfil}
            >

            </Image>
            <Text style={styles.user}>Smitty</Text>
        </View>
    );
}
export default Perfil;

const styles = StyleSheet.create({
    container:{
        margin:10,
        alignText: 'center'
    },
    user:{
        fontSize:36,
        fontWeight: 'bold'
    },
    FotoPerfil:{
        borderRadius: '50%'
    }
});