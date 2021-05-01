import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Dog from './Dog'


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to my App!!!</Text>
      <Dog name="Bosco"></Dog>
      <Dog name="Bentley"></Dog>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33FFD4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
