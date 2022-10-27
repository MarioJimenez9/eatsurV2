import { Image, View,  StyleSheet, Text,  } from 'react-native';
import { Button } from 'react-native';

const agregarCarrito = (props) =>{

}

const Product = (props) =>{
        return(
            
            <View style={{height:390,width:'90%',
                marginLeft:20, borderWidth:0.5, borderColor:'#dddddd',
                paddingBottom: 20                
              }}>                
                  <View style={{flex:2}}>
                  
                    <Image source={props.imageUri} style={{flex:1,
                      width: null, height: null, resizeMode:'cover',
                      borderRadius: 10
                      
                    }}
                    
                    ></Image>
                    
                  </View>
                  
                  <View style={{flex:1, paddingLeft:10, 
                    paddingTop:10,                    
                  }}>                    
                    <Text style={{fontSize:20, fontWeight:'bold', color:'black'}}>{props.name}  <Text style={{fontSize:20, fontWeight:'bold', color:'green'}}>{props.price}</Text> </Text> 
                    <Text style={{fontSize:10, color:'black'}}>{props.description}</Text> 
                    <Text style={{fontSize:10, fontStyle:'italic', color:'black', marginTop:20}}>{props.nota}</Text>                     
                    <Button title="Añadir" onPress={agregarCarrito()} color="#2E8AFF"/>
                  </View>                  
                  
              </View>
              
        )      
}

export default Product