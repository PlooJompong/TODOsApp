import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import globalStyles from "./style/GlobalStyles";

const Input = ({ addTask }) => {
  const [task, setTask] = useState("");

  const changeHandler = (val) => {
    setTask(val);
  }

  return (
    //input
    <View style={globalStyles.wrapper}>
      <TextInput placeholder="Add todo" onChangeText={changeHandler} style={inputStyles.input} />

      {/* Plus icon */}
      <TouchableOpacity onPress={() => addTask(task)}>
        <AntDesign name="plussquare" size={24} style={globalStyles.icon} />
      </TouchableOpacity>
    </View >
  )
}

const inputStyles = StyleSheet.create({
  input: {
    width: "70%",
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
    color: "#404971",
    borderBottomWidth: 2,
    borderRadius: 5,
    borderColor: "#404971",
    // backgroundColor: "lightblue" //Debug
  },
});

export default Input;