import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/header';
import Task from './src/components/task';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Task />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfe2e1",
  }
});
