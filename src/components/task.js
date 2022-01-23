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
      <View style={styles.underline}></View>
    </View >
  )
}

const styles = StyleSheet.create({
  taskContainer: {
    position: "absolute",
    width: "100%",
    height: "auto",
    top: 470,
    alignItems: "center"
    // backgroundColor: "pink", //Debug
  },

  boxContainer: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 10,
    width: "90%",
    height: "auto",
    // backgroundColor: "#888", //Debug
  },

  box: {
    width: "35%",
    height: 120,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 15,
  },

  underline: {
    marginTop: 5,
    width: "72%",
    height: 2,
    borderRadius: 5,
    backgroundColor: "rgba(120, 183, 187, 0.6)"
  },
});

export default Task;