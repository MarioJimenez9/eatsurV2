import * as React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Category from '../components/Category';
import { collection, onSnapshot, query} from 'firebase/firestore';
import { auth, db } from '../database/firebase';
import Product from '../components/Product';
import { useContexto } from '../Context/Contexto';

const Menu = () => {
    const {admin, setAdmin} = useContexto();
    const [productos, setProductos] = React.useState([]);
      React.useEffect(() => {
        const collectionRef = collection(db, "Productos");
        const q = query(collectionRef);
        console.log(auth.currentUser.email === "s19120174@alumnos.itsur.edu.mx");
        setAdmin(auth.currentUser.email === "s19120174@alumnos.itsur.edu.mx");
        const unsuscribe = onSnapshot(q, querySnapshot => {
          setProductos(
            querySnapshot.docs.map(
              doc => ({
                id: doc.id,
                nombre: doc.data().nombre,
                descripcion: doc.data().descripcion,
                imageUri: doc.data().imageUri,
                precio: doc.data().precio 
              })
            )
          )
        });
        
        return unsuscribe;
        
      }, []);
      
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
                      
            {productos.map(
              (p, k) => <Product key={k} id={p.id} imageUri={p.imageUri} name={p.nombre} price={p.precio} description={p.descripcion}></Product>
            )}

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
