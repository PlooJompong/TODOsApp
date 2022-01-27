import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Input = () => {
  return (
    <View style={inputStyles.inputWrapper}>
      <View style={inputStyles.input}>
        <TextInput placeholder="Add todo" />
      </View>

      <TouchableOpacity>
        <AntDesign name="plussquare" size={30} color="#404971" />
      </TouchableOpacity>
    </View>
  )
}

const inputStyles = StyleSheet.create({
  inputWrapper: {
    width: "100%",
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    // backgroundColor: "#999" //Debug
  },

  input: {
    width: "70%",
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderRadius: 5,
    // borderBottomColor: "rgba(120, 183, 187, 0.6)",
    borderBottomColor: "#404971",
    // backgroundColor: "#888" //Debug
  },
});

export default Input;