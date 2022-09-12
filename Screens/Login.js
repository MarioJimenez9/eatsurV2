import React from 'react';
import { TextInput, View, Text, Button } from 'react-native';

const Login = ({navigation}) =>{

    return(
        <View
        style={
             {
                margin: 10,
             }   
        }
        >
            <Text>User</Text>
            <TextInput/>
            <Text>Password</Text>
            <TextInput secureTextEntry/>
            <Button title="Login" onPress={() => navigation.navigate("Menu")}/>
        </View>
    );
}

export default Login;