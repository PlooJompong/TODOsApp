import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Task = () => {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Text style={{}}></Text>
        </View>
        <View style={styles.box}>
          <Text style={{}}></Text>
        </View>
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Text style={{}}></Text>
        </View>
        <View style={styles.box}>
          <Text style={{}}></Text>
        </View>
      </View>

      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Text style={{}}></Text>
        </View>
        <View style={styles.box}>
          <Text style={{}}></Text>
        </View>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  taskContainer: {
    position: "absolute",
    width: "100%",
    height: "auto",
    top: 480,
  },

  boxContainer: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 10,
    width: "100%",
    height: "auto",
    backgroundColor: "#888", //Debug
  },

  box: {
    width: 140,
    height: 120,
    backgroundColor: "#fff",
    borderWidth: 1,
  }
});

export default Task;