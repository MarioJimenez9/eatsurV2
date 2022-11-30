import React from 'react';
import { db, auth } from '../database/firebase';
import { collection, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import { View } from 'react-native';
import { useContexto } from '../Context/Contexto';
import OrderProduct from '../components/OrderProduct';
const Ordenes = () => {
    const [ordenes, setOrdenes] = React.useState([]);
    React.useEffect(() => {
        const collectionRef = collection(db, "Orden");
        const q = query(collectionRef, where("activa", "==", true), orderBy("fecha", "asc"));
        const unsuscribe = onSnapshot(q, querySnapshot => {
          setOrdenes(
            querySnapshot.docs.map(
              doc => ({
                id: doc.id,
                nombre: doc.data().nombre,
                fecha: doc.data().fecha,
                cliente: doc.data().nickname,
                imageUri: doc.data().image,
                precio: doc.data().precio 
              })
            )
          );
          console.log(ordenes);
        });
        
        return unsuscribe;
        
      }, []);
    const renderedList = ordenes.map(
        (o, k) => <OrderProduct key={k} name={o.nombre} price={o.precio} id={o.id} imageUri={o.imageUri}/>
    );
    return(
        <View>
            {renderedList}
        </View>        
    );

}

export default Ordenes;