import * as React from "react";
import { View, SafeAreaView, Image, StyleSheet, Text } from "react-native";
import ExperienceZone from "./Zones/ExperienceZone";

export default ExperienceScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <ExperienceZone navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    padding: 0,
    margin: 0,
  },
  center: {
    margin: 0,
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
});
