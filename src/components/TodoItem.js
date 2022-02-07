import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import globalStyles from "../components/style/GlobalStyles";
import { FontAwesome } from "@expo/vector-icons";

const TodoItem = ({ item, removeTask }) => {
  return (
    //new task
    <View style={globalStyles.wrapper}>
      <Text style={[todoItemStyles.list, globalStyles.textRegular]}>{item.text}</Text>

      {/* Trash icon */}
      <TouchableOpacity onPress={() => removeTask(item.id)}>
        <FontAwesome name="trash-o" size={30} style={globalStyles.icon} />
      </TouchableOpacity>
    </View>
  )
}

const todoItemStyles = StyleSheet.create({
  list: {
    width: "70%",
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: "#404971",
    // backgroundColor: "pink" //Debug
  },
})

export default TodoItem;
