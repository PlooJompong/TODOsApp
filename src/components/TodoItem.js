import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import globalStyles from "../components/style/GlobalStyles";
import { FontAwesome } from "@expo/vector-icons";

const TodoItem = ({ item, removeTask }) => {
  return (
    <View style={todoItemStyles.todoWrapper}>
      <Text style={[todoItemStyles.todo, globalStyles.textRegular]}>{item.text}</Text>
      <TouchableOpacity onPress={() => removeTask(item.id)}>
        <FontAwesome name="trash-o" size={30} color="#404971" />
      </TouchableOpacity>
    </View>
  )
}

const todoItemStyles = StyleSheet.create({
  todoWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    // backgroundColor: "lightblue",
  },

  todo: {
    width: "70%",
    padding: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: "#404971",
    // backgroundColor: "pink" //Debug
  },
})

export default TodoItem;
