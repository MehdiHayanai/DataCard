import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import Plotly from "react-native-plotly";

export default BrightnessCard = () => {
  return (
    <View style={styles.container}>
      <Text>Brightness Card</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginHorizontal: "auto",
  },
});
