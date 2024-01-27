import { Text, StyleSheet, TouchableOpacity } from "react-native";

export const ProjectObject = (props) => {
  const { item, navigation } = props;
  const { name, description, id } = item;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Project", { project: item })}
      style={styles.project}
    >
      <Text style={styles.projectName}>{name}</Text>
      <Text style={styles.projectDescription}>{description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  project: {
    backgroundColor: "#F8F8F8",
    padding: 20,
    marginVertical: 3,
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 1,
    shadowOffset: { width: 1, height: 1 },
  },
  projectName: {
    fontSize: 18,
    fontFamily: "Roboto",
    color: "#7FB8E1",
  },
  projectDescription: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#BABEC2",
  },
});
