import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import globalStyles from "./globalStyles";

const Task = () => {
  return (
    <View style={taskStyles.container}>
      <View style={taskStyles.todosContainer}>
        <View style={taskStyles.todosTextContainer}>
          <Text style={[globalStyles.textBold, { fontSize: 32, color: "#404971" }]}>TODOs</Text>
        </View>

        <View style={taskStyles.test}>
          <View style={taskStyles.taskContainer}>
            <View style={taskStyles.taskField}>
              <Text>Hello</Text>
            </View>
            <Text>icon</Text>
            <Text>icon2</Text>
          </View>

          <View style={taskStyles.inputContainer}>
            <View style={taskStyles.input}>
              <TextInput placeholder="Hello" />
            </View>
            <Text>icon3</Text>
          </View>
        </View>

      </View>
      <Text style={taskStyles.underline}></Text>
    </View >
  )
}

const taskStyles = StyleSheet.create({
  container: {
    width: "100%",
    height: 420,
    alignItems: "center",
    // backgroundColor: "#666", //Debug
  },

  todosContainer: {
    width: "90%",
    height: 420,
    borderRadius: 10,
    backgroundColor: "#efefef"
  },

  todosTextContainer: {
    paddingVertical: 10,
    alignItems: "center",
    // backgroundColor: "#444", //Debug
  },

  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "lightblue",
  },

  taskField: {
    width: "55%",
    paddingVertical: 4,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#404971",
    // backgroundColor: "pink" //Debug
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#888" //Debug
  },

  input: {
    width: "60%",
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#404971",
    // backgroundColor: "#888" //Debug
  },

  test: {
    height: "80%",
    justifyContent: "space-between",
    // backgroundColor: "red", //Debug
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