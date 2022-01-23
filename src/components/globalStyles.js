import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    backgroundColor: "rgba(120,183,187,0.6)",
    width: "100%",
    height: 355,
  },

  ellipse: {
    position: "absolute",
    width: 213,
    height: 213,
    backgroundColor: "rgba(255, 241, 193, 0.47)",
    borderRadius: 100
  },

  ellipse1: {
    left: -75,
    top: -22,
  },

  ellipse2: {
    left: 56,
    top: -75,
  },

  profile: {
    position: "absolute",
    width: 160,
    height: 160,
    left: 134,
    top: 171,
    borderWidth: 1,
    borderRadius: 100,
  },

  welcomeContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 45,
    top: 370,
  },

  welcomeText: {
    fontSize: 28,
    fontFamily: "Poppins_700Bold",
    color: "rgba(41,52,98,0.87)",
  },

  periodContainer: {
    position: "absolute",
    width: "80%",
    top: 400,
    left: "10%",
    height: 80,
    justifyContent: "center",
    // backgroundColor: "pink" //Debug
  },

  period: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    // backgroundColor: "lightblue" //Debug
  },

  periodText: {
    height: 25,
    fontSize: 16,
  },

  periodTextActive: {
    fontFamily: "Poppins_700Bold",
    color: "rgba(63, 61, 86, 0.8)",
  },

  periodTextInactive: {
    fontFamily: "Poppins_400Regular",
    color: "rgba(63, 61, 86, 0.5)",
  },

  underline: {
    width: 48,
    height: 2,
  },

  underlineActive: {
    backgroundColor: "#78b7bb",
  },

  underlineInactive: {
    backgroundColor: "rgba(120, 183, 187, 0.6)",
  },
});

export default globalStyles;