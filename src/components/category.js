import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Category = () => {
  return (
    <View style={categoryStyles.categoryContainer}>
      <View style={categoryStyles.boxContainer}>
        <View style={categoryStyles.box}>
          <Text style={{}}></Text>
        </View>
        <View style={categoryStyles.box}>
          <Text style={{}}></Text>
        </View>
      </View>

      <View style={categoryStyles.boxContainer}>
        <View style={categoryStyles.box}>
          <Text style={{}}></Text>
        </View>
        <View style={categoryStyles.box}>
          <Text style={{}}></Text>
        </View>
      </View>

      <View style={categoryStyles.boxContainer}>
        <View style={categoryStyles.box}>
          <Text style={{}}></Text>
        </View>
        <View style={categoryStyles.box}>
          <Text style={{}}></Text>
        </View>
      </View>
      <View style={categoryStyles.underline}></View>
    </View >
  )
}

const categoryStyles = StyleSheet.create({
  categoryContainer: {
    width: "100%",
    height: 420,
    alignItems: "center",
    // backgroundColor: "#666", //Debug
  },

  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 10,
    width: "90%",
    // backgroundColor: "#888", //Debug
  },

  box: {
    width: 135,
    height: 120,
    backgroundColor: "#efefef",
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

export default Category;