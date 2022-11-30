import { Image, View,  StyleSheet, Text, Alert  } from 'react-native';
import { Button } from 'react-native';
import { auth, db } from '../database/firebase';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { useContexto } from '../Context/Contexto';

const Product = (props) =>{

  const {admin, setAdmin} = useContexto();
  const agregarCarrito = async() =>{
    const p = {
        pID: props.id,
        userID: auth.currentUser.uid,
        nombre: props.name,
        imageUri: props.imageUri,
        descripcion: props.description,
        precio: props.price
    }
    await addDoc(collection(db, "ProductosCarrito"), p);
    alert("Se agregó al carrito" + p.pID);
  }
  const eliminarProducto = async() => {
    console.log("borrado: " + props.name);
        const docRef = doc(db, "Productos", props.id);
        await deleteDoc(docRef);
        alert("Se elimino " + props.name);
  }
  const confirmarEliminacion = () =>
        Alert.alert(
          "Eliminar Producto",
          "Seguro que deseas eliminar " + props.name + " del menu?",
          [
            {
              text: "Cancelar",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancelar"
            },
            { text: "Confimar", onPress: () => eliminarProducto() }
          ]
        );

        return(
            <View style={{height:460,width:'90%',
                marginLeft:20, borderWidth:0.5, borderColor:'#dddddd',
                paddingBottom: 20                
              }}>                
                  <View style={{flex:2}}>
                  
                    <Image source={{ uri: props.imageUri}} style={{flex:1,
                      width: null, height: null, resizeMode:'cover',
                      borderRadius: 10
                      
                    }}
                    ></Image>
                  </View>
                  <View style={{flex:1, paddingLeft:10, 
                    paddingTop:10,                    
                  }}>                    
                    <Text style={{fontSize:20, fontWeight:'bold', color:'black'}}>{props.name}  <Text style={{fontSize:20, fontWeight:'bold', color:'green'}}>{`$${props.price}`}</Text> </Text> 
                    <Text style={{fontSize:10, color:'black'}}>{props.description}</Text> 
                    <Text style={{fontSize:10, fontStyle:'italic', color:'black', marginTop:20}}>{props.nota}</Text>                     
                    {!admin && <Button title="Añadir" onPress={() => agregarCarrito()} color="#2E8AFF"/>}
                    {admin && 
                      <Button title="Eliminar" onPress={() => confirmarEliminacion()} color="#2E8AFF"/>
                    }
                    {admin &&
                      <Button title="Modificar" onPress={() => confirmarEliminacion()} color="#2E8AFF"/>
                    }
                  </View>              
                  
              </View>
              
        )      
}

export default Product;