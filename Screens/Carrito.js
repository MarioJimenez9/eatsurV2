import React from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { auth, db } from '../database/firebase';
import { addDoc, collection, where, query, onSnapshot} from 'firebase/firestore';
import CartProduct from '../components/CartProduct';
import Boton_custom from '../components/Boton_custom';
const Carrito = () =>{
    const[carrito, setCarrito] = React.useState([]);
    React.useEffect(() => {
        const collectionRef = collection(db, "ProductosCarrito");
        const q = query(collectionRef, where("userID", "==", auth.currentUser.uid));
        const unsuscribe = onSnapshot(q, querySnapshot => {
          setCarrito(
            querySnapshot.docs.map(
              doc => ({
                id: doc.id,
                pID: doc.data().pID,
                userID : doc.data().userID,
                nombre: doc.data().nombre,
                precio: doc.data().precio,
                imageUri: doc.data().imageUri
              })
            )
          );
          console.log(carrito);
        });
        return unsuscribe;
        
      }, []);

      const getFecha = () => {
        return new Date().toLocaleDateString() + new Date().toLocaleTimeString();
      }

      const ordenar = async() => {
        carrito.map(
          async (c) => {
            const p = {
              pID: c.id,
              user: auth.currentUser.email,
              nickname: auth.currentUser.displayName,
              image: c.imageUri,
              nombre: c.nombre,
              precio: c.precio,
              activa: true,
              fecha: getFecha()
            }
            await addDoc(collection(db, "Orden"), p);
          }
        )
      Alert.alert("Gracias por ordenar " + auth.currentUser.displayName, "Hemos recibido tu orden");
      }
      const confirmarOrden = () =>
        Alert.alert(
          "Confirmar orden",
          "Estas a punto de comprar",
          [
            {
              text: "Cancelar",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancelar"
            },
            { text: "Confimar", onPress: () => ordenar() }
          ]
        );
    const renderedList = carrito.map(
      (c, k) => <CartProduct key={k} id = {c.id} imageUri={c.imageUri} name={c.nombre} price={c.precio}></CartProduct>
      )
    
    return(
        <View>
            {console.log("****")}
            <ScrollView  horizontal={false} >
                {renderedList}            
                <Boton_custom onPress={() => confirmarOrden()} label={"Ordenar"}></Boton_custom>
            </ScrollView>
          </View>
    );
}

export default Carrito;