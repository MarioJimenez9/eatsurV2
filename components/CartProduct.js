import React from 'react';
import { View, Button, Text, Image} from 'react-native';
import { db } from '../database/firebase';
import { collection, query, where, onSnapshot, doc, deleteDoc } from 'firebase/firestore';

const CartProduct = (props) => {

      const quitarCarrito = async(id) => {
        console.log("borrado: " + id);
        const docRef = doc(db, "ProductosCarrito", id);
        await deleteDoc(docRef);
        alert(id);
    }

    return(
        <View style={{height:200,width:'90%',
                marginLeft:20, borderWidth:0.5, borderColor:'#ddd',
                paddingBottom: 20                
              }}>                
                  
            <View style={{flex:1, paddingLeft:10, 
                paddingTop:10,                    
            }}>  
                <Image source={{ uri: props.imageUri}} style={{flex:1,
                      width: null, height: null, resizeMode:'cover',
                      borderRadius: 10
                      
                    }}/>                  
                <Text style={{fontSize:20, fontWeight:'bold', color:'black'}}>{props.name}  
                <Text style={{fontSize:20, fontWeight:'bold', color:'green'}}>{`$${props.price}`}</Text> </Text> 
                <Button title="Eliminar" onPress={() => quitarCarrito(props.id)} color="#2E8AFF"/>
            </View>                  
        </View>
    );
}

export default CartProduct;