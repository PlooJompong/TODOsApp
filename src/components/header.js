import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import globalStyles from "./globalStyles";

const Header = () => {
  return (
    <View>
      <View style={headerStyles.headerContainer}>
        <View style={[headerStyles.ellipse, headerStyles.ellipse1,]}></View>
        <View style={[headerStyles.ellipse, headerStyles.ellipse2,]}></View>
        <Image
          style={headerStyles.profile}
          source={require("../../assets/profile.jpg")}
        />
      </View>

      <View style={headerStyles.welcomeContainer} >
        <Text style={[headerStyles.welcomeText, globalStyles.textBold]}>Welcome back!</Text>
      </View>

      <View style={headerStyles.periodContainer}>
        <View style={headerStyles.period}>
          <View>
            <Text style={[headerStyles.periodText, headerStyles.periodTextActive, globalStyles.textBold]}>Today</Text>
            <View style={[headerStyles.underline, headerStyles.underlineActive]}></View>
          </View>

          <View>
            <Text style={[headerStyles.periodText, headerStyles.periodTextInactive, globalStyles.textRegular]}>Week</Text>
            <View style={[headerStyles.underline, headerStyles.underlineInactive]}></View>
          </View>

          <View>
            <Text style={[headerStyles.periodText, headerStyles.periodTextInactive, globalStyles.textRegular]}>Month</Text>
            <View style={[headerStyles.underline, headerStyles.underlineInactive]}></View>
          </View>
        </View>

      </View>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 300,
    backgroundColor: "rgba(120,183,187,0.6)",
  },

  ellipse: {
    position: "absolute",
    width: 210,
    height: 210,
    backgroundColor: "rgba(255, 241, 193, 0.47)",
    borderRadius: 100
  },

  ellipse1: {
    left: -80,
    top: -40,
  },

  ellipse2: {
    left: 50,
    top: -95,
  },

  profile: {
    width: 160,
    height: 160,
    left: 115,
    top: 130,
    borderWidth: 1,
    borderRadius: 100,
  },

  welcomeContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 10,
    // backgroundColor: "#555" //Debug
  },

  welcomeText: {
    fontSize: 28,
    color: "rgba(41,52,98,0.87)",
  },

  periodContainer: {
    width: "80%",
    left: "10%",
    justifyContent: "center",
  },

  period: {
    width: "100%",
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    // backgroundColor: "lightblue" //Debug
  },

  periodText: {
    height: 25,
    fontSize: 16,
  },

  periodTextActive: {
    color: "rgba(63, 61, 86, 0.8)",
  },

  periodTextInactive: {
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
})

export default Header;