import React from 'react';
import { View, Text } from 'react-native';
import Boton_custom from '../components/Boton_custom';
import { CommonActions, useNavigation } from '@react-navigation/native'
import ModalCompra from '../components/ModalCompra';
const Carrito = (props) =>{
    const navigation = useNavigation();
    return(
        <View>
            <Text>Esto es lo que has seleccionado</Text>
            
        </View>
    );
}

export default Carrito;