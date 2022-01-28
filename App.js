import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import Header from './src/components/Header';
import TodoList from './src/components/TodoList';

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Poppins_700Bold });

  if (!fontsLoaded) {
    return (
      <View style={[appStyles.container, appStyles.delay]}>
        <ActivityIndicator size="large" color="#78b7bb" />
      </View>
    )
  } else {
    return (
      <View style={appStyles.container} >
        <Header />
        <View style={appStyles.body}>
          <TodoList />
        </View>
      </View >
    )
  }
}

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfe2e1",
  },

  body: {
    width: "100%",
    height: 420,
    alignItems: "center",
    // backgroundColor: "#666", //Debug
  },

  delay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dfe2e1",
  }
});
