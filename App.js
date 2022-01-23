import React from 'react';
import { StyleSheet, View, ActivityIndicator, } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import Header from './src/components/header';
import Task from './src/components/task';

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold });

  if (!fontsLoaded) {
    return (
      <View style={[styles.container, styles.delay]}>
        <ActivityIndicator size="large" color="#78b7bb" />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <Header />
        <Task />
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfe2e1",
  },

  delay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dfe2e1",
  }
});
