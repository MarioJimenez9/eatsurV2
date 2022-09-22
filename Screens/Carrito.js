import React from 'react';
import { View, Text } from 'react-native';
import Boton_custom from '../components/Boton_custom';
import { CommonActions, useNavigation } from '@react-navigation/native'
const Carrito = (props) =>{
    const navigation = useNavigation();
    return(
        <View>
            <Text>Aqui van tus compras</Text>
            <Boton_custom onPress={() => navigation.navigate('Perfil')}label={"Perfil"}></Boton_custom>
        </View>
    );
}

export default Carrito;