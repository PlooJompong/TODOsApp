import React from 'react';
import { Text, View, Image } from 'react-native';
import globalStyles from "../styles/globalStyles";

const Header = () => {
  return (
    <View>
      <View style={globalStyles.headerContainer}>
        <View style={[globalStyles.ellipse, globalStyles.ellipse1,]}></View>
        <View style={[globalStyles.ellipse, globalStyles.ellipse2,]}></View>
        <Image
          style={globalStyles.profile}
          source={require("../../assets/profile.jpg")}
        />
      </View>

      <View style={globalStyles.welcomeContainer} >
        <Text style={globalStyles.welcomeText}>Welcome back!</Text>
      </View>

      {/* Period */}
      <View style={globalStyles.period}>
        <View>
          <Text style={[globalStyles.periodText, globalStyles.periodTextActive]}>Today</Text>
          <View style={[globalStyles.underline, globalStyles.underlineActive]}></View>
        </View>

        <View>
          <Text style={[globalStyles.periodText, globalStyles.periodTextInactive]}>Week</Text>
          <View style={[globalStyles.underline, globalStyles.underlineInactive]}></View>
        </View>

        <View>
          <Text style={[globalStyles.periodText, globalStyles.periodTextInactive]}>Month</Text>
          <View style={[globalStyles.underline, globalStyles.underlineInactive]}></View>
        </View>

      </View>
    </View>
  );
}

export default Header;