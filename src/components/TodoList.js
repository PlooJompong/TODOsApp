import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import globalStyles from "../components/style/GlobalStyles";
import TodoItem from "./TodoItem";
import Input from "./Input";

const TodoList = () => {
  const [todoList, updateTodoList] = useState([
    { text: "1", id: "1" },
    { text: "2", id: "2" },
    { text: "3", id: "3" },
    { text: "4", id: "4" },
  ]);

  const removeTask = (id) => {
    updateTodoList((prevTodo) => {
      console.log("Deleted")
      return prevTodo.filter(todoList => todoList.id != id)
    })
  }

  // const addTodo = (text) => {
  //   updateTodoList((prevTodo) => {
  //     console.log("Added");
  //     return [
  //       { text: text, id: Math.random().toString() },
  //       ...prevTodo
  //     ]
  //   })
  // }

  return (
    <View style={todoListStyles.todosContainer}>
      <View style={todoListStyles.todosTitleContainer}>
        <Text style={[globalStyles.textBold, { fontSize: 32, color: "#404971" }]}>TODOs</Text>
      </View>

      <FlatList
        data={todoList}
        renderItem={({ item }) => (
          <TodoItem item={item} removeTask={removeTask} />
        )}
      />
      <Input />
    </View >
  )
}

const todoListStyles = StyleSheet.create({
  todosContainer: {
    width: "90%",
    height: 420,
    borderRadius: 10,
    backgroundColor: "#efefef"
  },

  todosTitleContainer: {
    paddingVertical: 5,
    alignItems: "center",
    // backgroundColor: "#444", //Debug
  },
});

export default TodoList;