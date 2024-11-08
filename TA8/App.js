import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
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
    padding: width > 400 ? 20 : 10, // Ajuste de padding según el ancho de la pantalla
  },
  text: {
    fontSize: width > 400 ? 24 : 18, // Ajuste de tamaño de fuente según el ancho de la pantalla
    color: width > 400 ? 'blue' : 'black', // Ajuste de color de texto según el ancho de la pantalla
  },
});