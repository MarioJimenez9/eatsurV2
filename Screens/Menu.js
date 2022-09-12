import React, {useState} from 'react';
import { Image, View, FlatList, StyleSheet, Text } from 'react-native';


const date = new Date().getHours();
const Menu = () => {
    const [images, setimages] = useState([
        require('../assets/Image1.jpg'),
        require('../assets/Image2.jpg'),
        require('../assets/Image3.jpg'),
        require('../assets/Image4.jpg')
      ]);

      return (
        <View>
          <FlatList
          data = {images}
          key = {"2"}
          numColumns={2}
          renderItem={({ item }) => (
            <Image
              source={item}
              style={{
                width: 180,
                height: 220,
                marginTop: 50,
                marginLeft: 15,
                borderWidth: 2,
                borderColor: "#c35547",
                resizeMode: "contain",
                margin: 6,
              }}
              keyExtractor={(item) => item.id}
            />
          )}
        />
        <Text>{date}</Text>
        </View>
      );
}

export default Menu;
