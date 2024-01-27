import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const ExperienceObject = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={[styles.experienceContainer, { backgroundColor: item.color }]}
      onPress={() => navigation.navigate("DefinitionScreen", { item: [item] })}
    >
      <View style={styles.experience}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  experienceContainer: {
    width: 110,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    // borderWidth: 1,
    borderColor: "#000",
    elevation: 1,
    shadowOffset: { width: -3, height: 6 },
    borderRadius: 5,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 17,
    padding: 10,
    textTransform: "uppercase",
    textAlign: "center",
  },
  experience: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ExperienceObject;
