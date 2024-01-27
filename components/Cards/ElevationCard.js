import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import Plotly from "react-native-plotly";

export default ElevationCard = () => {
  return (
    <View style={styles.container}>
      <Text>Elevation Card</Text>
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
