import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, View, Text, Dimensions } from "react-native";

export default DefinitionScreen = ({ navigation, route }) => {
  const currentDefinition = route.params.item[0];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        {/* Title section */}
        <View style={styles.titleContainer}>
          <Text style={styles.textTitle}>{currentDefinition.experience}</Text>
        </View>
        {/* Definition section */}
        <View style={styles.definitionContainer}>
          <Text>{currentDefinition.definition}</Text>
        </View>
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
  textContainer: {
    flex: 1,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  definitionContainer: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "#c0c4c1",
    borderWidth: 1,
    margin: 20,
    minHeight: 300,
  },
  textTitle: {
    color: "#82B4DD",
    fontWeight: "bold",
    fontSize: 25,
  },
  center: {
    margin: 0,
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
});
