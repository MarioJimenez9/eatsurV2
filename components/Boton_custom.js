import react from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput, View, Text, Button, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native'

//Boton reutilizable

function Boton_custom({    
    onPress,
    label
    //AQUI SE PUEDEN AGREGAR MAS    
}){
    const navigation = useNavigation() 
    
    return(
        <TouchableOpacity style={styles.container} onPress={onPress}>            
         
        <LinearGradient                
        colors={['#3EF37F', '#A5FF0E']}
        start={{x:0, y:0}}
        end={{x:1, y:1}}
        style={styles.button}        
        
        >        
        
        <Text style={styles.text}>{label}</Text>
        </LinearGradient>                                                        
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{        
        width: '40%',
        marginTop: 60,
        
    },
    text: {
        fontSize: 14,
        color: 'black',
        fontWeight: 'bold'

    },
    button:{        
        height: 50,
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        
    }
})
export default Boton_custom