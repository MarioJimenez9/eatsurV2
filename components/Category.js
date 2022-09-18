import { Component } from "react/cjs/react.production.min";
import { Image, View,  StyleSheet, Text,  } from 'react-native';
class Category extends Component{
    render(){
        return(
            <View style={{height:190,width:150,
                marginLeft:20, borderWidth:0.5, borderColor:'#dddddd',
                paddingBottom: 20                
              }}>
                  <View style={{flex:2}}>
                    <Image source={this.props.imageUri} style={{flex:1,
                      width: null, height: null, resizeMode:'cover',
                      borderRadius: 10
                      
                    }}></Image>
                    
                  </View>
                  <View style={{flex:2, paddingLeft:10, 
                    paddingTop:10,                    
                  }}>
                    <Text>{this.props.name}</Text>
                  </View>
              </View>
        )      
    }
}

export default Category