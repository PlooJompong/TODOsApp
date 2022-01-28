import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  wrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    // backgroundColor: "#999" //Debug
  },

  textRegular: {
    fontFamily: "Poppins_400Regular",
    color: "#404971"
  },

  textBold: {
    fontFamily: "Poppins_700Bold",
    color: "#404971"
  },

  icon: {
    paddingVertical: 5,
    marginTop: 10,
    color: "#404971",
  }
});

export default globalStyles;