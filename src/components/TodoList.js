import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, Keyboard } from "react-native";
import globalStyles from "../components/style/GlobalStyles";
import TodoItem from "./TodoItem";
import Input from "./Input";

const TodoList = () => {
  //Hooks
  const [todoList, updateTodoList] = useState([
    { text: "1", id: 1 },
    { text: "2", id: 2 },
    { text: "3", id: 3 },
    { text: "4", id: 4 },
  ]);

  //Functions
  const removeTask = (id) => {
    updateTodoList((prevTodo) => {
      console.log(id)
      return prevTodo.filter(todoList => todoList.id != id)
    });
  }

  const addTask = (text) => {
    if (text != "") {
      updateTodoList((prevTodo) => {
        console.log(text);
        Keyboard.dismiss();
        return [
          { text: text, id: Math.random() },
          ...prevTodo
        ]
      });
    }
  }

  return (
    <View style={todoListStyles.todosContainer}>
      <View style={todoListStyles.todosTitleContainer}>
        <Text style={[globalStyles.textBold, { fontSize: 32, color: "#404971" }]}>TODO's</Text>
      </View>
      {/* InputField */}
      <Input addTask={addTask} />
      {/* TodoList */}
      <FlatList
        data={todoList}
        renderItem={({ item }) => (
          <TodoItem item={item} removeTask={removeTask} />
        )}
      />
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