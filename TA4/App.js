import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  const [imageSource, setImageSource] = useState(require('./assets/imagen1.jpg'));

  const changeImage = () => {
    setImageSource(require('./assets/imagen2.jpg'));
  };

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Button title="Change Image" onPress={changeImage} />
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
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});