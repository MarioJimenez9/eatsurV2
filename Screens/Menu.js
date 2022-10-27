import React, {useState} from 'react';
import { Image, View, FlatList, StyleSheet, Text, ScrollView, TouchableOpacity, Button } from 'react-native';
import Category from '../components/Category';
import { CommonActions, useNavigation } from '@react-navigation/native'
import Boton_custom from '../components/Boton_custom';
import { signOut } from 'firebase/auth';
import { auth } from '../database/firebase';
import { BottomTab } from '../components/BottomTab';
import Product from '../components/product';

const Menu = () => {
    const navigation = useNavigation() 
    const [images, setimages] = useState([
        require('../assets/Image1.jpg'),
        require('../assets/Image2.jpg'),
        require('../assets/Image3.jpg'),
        require('../assets/Image4.jpg'),
        require('../assets/Image4.jpg'),
        require('../assets/Image4.jpg'),
        require('../assets/Image4.jpg')
      ]);

     

      return (        
        <View style={styles.mainContainer}>
          
          <Text style={styles.titulo}>Tal vez quieras filtrar por...</Text>
          <ScrollView  horizontal={true}>            
          <Category imageUri={require('../assets/Image1.jpg')} name="Comida"></Category>
          <Category imageUri={require('../assets/Image6.jpg')} name="Bebidas"></Category>
          <Category imageUri={require('../assets/Image7.jpg')} name="Papas fritas"></Category>
          <Category imageUri={require('../assets/Image8.jpg')} name="Dulces"></Category>                    
          </ScrollView>
          <Text style={styles.titulo}>Esto es lo que tenemos para ti: </Text>
          
          <ScrollView  horizontal={false} >            
          <Product imageUri={require('../assets/Image5.jpg')} name="Chilaquiles" price="$30" description="Puedes pedirlos con: Huevo, frijoles, verdes o rojos." nota="El precio varia según lo que elijas. Da click en el producto para mas detalles."></Product>        
          <Product imageUri={require('../assets/Image9.jpg')} name="Platillo del día" price="$50" description="No hay modificaciones posibles a este producto" nota="El precio de este producto es fijo."></Product>
          <Product imageUri={require('../assets/Image10.jpg')} name="Huarache" price="$32" description="Puedes pedirlos con: Chorizo, bistec, harina o maíz." nota="El precio varia según lo que elijas. Da click en el producto para mas detalles."></Product>
                           
          </ScrollView> 
                     
        </View>
      );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#f1f1f1",    
    flex: 1
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
    fontSize: 22,
    color: '#34434D',
    fontWeight: 'bold',
    padding:20

  },
  imagen:{
    width: '44%',                
    height: 100,
    marginTop: 50,
    marginLeft: 15,
    borderWidth: 1,
    borderColor:'black',                                
    resizeMode: "contain",
    margin: 6,                                
    borderRadius: 10,
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

export default Menu;
