import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const images = [
  { id: '1', src: require('./assets/imagen1.jpg'), description: 'Manzana' },
  { id: '2', src: require('./assets/imagen2.jpg'), description: 'Banana' },
  { id: '3', src: require('./assets/imagen3.jpg'), description: 'Mango' },
  { id: '4', src: require('./assets/imagen3.jpg'), description: 'Mango' },
  { id: '5', src: require('./assets/imagen3.jpg'), description: 'Mango' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item.src} style={styles.image} />
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
  },
  description: {
    marginTop: 5,
    textAlign: 'center',
  },
});