import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default function App() {
  const [movieName, setMovieName] = useState('');
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState('');

  const fetchMovie = async () => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=9ab25d63`);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovieData(data);
        setError('');
      } else {
        setMovieData(null);
        setError('Pelicula no encontrada!');
      }
    } catch (err) {
      setMovieData(null);
      setError('Hubo algun error');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingresa el nombre de una pelicula"
        value={movieName}
        onChangeText={setMovieName}
      />
      <Button title="Buscar" onPress={fetchMovie} />
      {movieData && (
        <View style={styles.movieContainer}>
          <Image source={{ uri: movieData.Poster }} style={styles.poster} />
          <Text style={styles.title}>{movieData.Title}</Text>
          <Text style={styles.plot}>{movieData.Plot}</Text>
        </View>
      )}
      {error && <Text style={styles.error}>{error}</Text>}
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
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  movieContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  poster: {
    width: 300,
    height: 450,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  plot: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  error: {
    color: 'red',
    marginTop: 20,
  },
});