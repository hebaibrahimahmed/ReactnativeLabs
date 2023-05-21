import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';
import MainList from './mainList';
import { StatusBar } from 'expo-status-bar';

const image = { uri: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg' };



export default function Home({ navigation }) {
  const [products, setProducts] = useState([
    {
      id:1,
      title: "The Lion King",
      description: "118 min",
      image: "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg"
    },
    {
      id:2,
      title: "Mowgli: Legend of the Jungle",
      description: "104 min",
      image: "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg"
    },
    {
      id:3,
      title: "Doctor Strange",
      description: "115 min",
      image: "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg"
    },
    {
      id:4,
      title: "John Wick",
      description: "101 min",
      image: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
    },
  
  ]);

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.content}>
          <Text style={styles.title}>Books App</Text>
          <MainList PRODUCTS={products} />
        </View>
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%'
  },
  image: {
    flex: 1,

  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    paddingTop: 30,
    paddingLeft: 10,
  },
});
