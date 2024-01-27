import * as React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const DataCardObject = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={[styles.experienceContainer, { backgroundColor: item.color }]}
      onPress={() => navigation.navigate(item.name)}
    >
      <View style={styles.experience}>
        <Text style={styles.title}>{item.name}</Text>
        <Image source={item.icon} style={styles.experienceIcon} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  experienceView: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  experienceContainer: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    margin: 10,
    elevation: 2,
    shadowOffset: { width: -3, height: 6 },
  },
  experienceIcon: {
    height: 40,
    width: 40,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  experience: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DataCardObject;
