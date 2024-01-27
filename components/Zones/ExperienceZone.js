import * as React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ExperienceObject from "../ui/ExperienceObject";
import { StaticExperiences } from "../staticVariables/CommonVaribales";

const Experience = ({ item, navigation }) => {
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

export default ExperienceZone = ({ navigation }) => {
  const randomExperience = () => {
    const random = Math.floor(Math.random() * StaticExperiences.length);
    navigation.navigate("DefinitionScreen", {
      item: [StaticExperiences[random]],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.experienceView}>
        {StaticExperiences.map((item) => (
          <ExperienceObject key={item.id} item={item} navigation={navigation} />
        ))}
      </View>
      <View style={styles.dice}>
        <TouchableOpacity
          style={styles.diceContainer}
          onPress={() => randomExperience()}
        >
          <MaterialCommunityIcons name="cube-scan" size={50} color="#F8F8F8" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginHorizontal: "auto",
  },
  experienceView: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  dice: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  diceContainer: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "#82B4DD",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    elevation: 5,
    shadowOffset: { width: -3, height: 6 },
  },
  diceLogo: {
    height: 60,
    width: 60,
  },
});
