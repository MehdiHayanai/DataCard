import * as React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Navigation({active}) {
  // Define an array of objects containing navigation information
const navigationInfo = [
  {
    icon: require("../assets/icons/notActive/experience.png"),
    iconActive: require("../assets/icons/navigation/experience.png"),
    label: 'Expérience',
  },
  {
    icon: require("../assets/icons/notActive/datacard.png"),
    iconActive: require("../assets/icons/navigation/datacard.png"),
    label: 'Datacard',
  },
  {
    icon: require("../assets/icons/notActive/projet.png"),
    iconActive: require("../assets/icons/navigation/datacard.png"),
    label: 'Projets',
  },
  {
    icon: require("../assets/icons/notActive/historique.png"),
    iconActive: require("../assets/icons/navigation/historique.png"),
    label: 'Historique',
  },
  // Add other navigation items as needed
];


  return (
    <View style={styles.navigation}>
      {navigationInfo.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.navigationButton, active === item.label ? styles.activeButton : null]}
        >
          <Image
            source={active === item.label ? item.iconActive : item.icon}
            style={styles.navigationMenuLogo}
          />
          <Text style={[active === item.label ? styles.active : styles.empty, styles.textStyle]}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  navigation: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    borderTopColor: "black",
    margin: 2,
    borderTopWidth: 1,
    borderTopColor: "#8BB3DE70",
    marginBottom: 5
  },
  navigationButton: {
    padding: 10,
    alignItems: "center",
    justifyContent: 'center',
    width: 95,
  },
  navigationMenuLogo: {
    margin: 5,
    width: 30,
    height: 30,
  },
  activeButton: {
    // Add styles for active button if needed
  },
  empty: {
    // Add styles for empty state if needed
  },
  active: {
    color: "#8BB3DE",
    paddingBottom: 5,
  },
  textStyle: {
    // Additional text styles if needed
  },
});
