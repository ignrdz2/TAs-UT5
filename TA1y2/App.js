import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escribe algo..."
        onChangeText={setText}
        value={text}
      />
      <Text style={styles.result}>{text}</Text>
      <View style={styles.counterContainer}>
        <Button title="Incrementar" onPress={() => setCount(count + 1)} />
        <Text style={styles.counter}>{count}</Text>
        <Button title="Disminuir" onPress={() => setCount(count - 1)} />
      </View>
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '80%',
  },
  result: {
    fontSize: 18,
    color: 'black',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  counter: {
    fontSize: 20,
    marginHorizontal: 20,
  },
});