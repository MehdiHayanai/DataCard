import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  DeviceEventEmitter,
} from "react-native";
import {
  deleteProjectById,
  getConfrontationsByProjectId,
} from "../../data/dataCatdDb";
import { Entypo } from "@expo/vector-icons";
import { useEffect } from "react";

export const ProjectObject = (props) => {
  const { item, navigation } = props;
  const { name, description, id } = item;

  const itemDataFromDB = {
    id: id,
    name: name,
    description: description,
    fromDb: true,
    confrontationData: null,
  };

  const showConfrontations = () => {
    getConfrontationsByProjectId(id)
      .then((data) => {
        itemDataFromDB.confrontationData = data;
        console.log(itemDataFromDB);
        navigation.navigate("ProjectScreen", { item: itemDataFromDB });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteProjectById = () => {
    deleteProjectById(id)
      .then((data) => {
        console.log("Project deleted");
        DeviceEventEmitter.emit("dataDeletion.data", "Project deletion");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    return () => {
      DeviceEventEmitter.removeAllListeners("dataDeletion.data");
    };
  }, []);
  return (
    <TouchableOpacity
      onPress={() => showConfrontations()}
      style={styles.project}
    >
      <Text style={styles.projectName}>{name}</Text>
      <Text style={styles.projectDescription}>{description}</Text>
      <View style={styles.editionSection}>
        <TouchableOpacity style={styles.editButton}>
          {/* <Entypo name="edit" size={20} color="#7FB8E1" /> */}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onLongPress={() => handleDeleteProjectById()}
        >
          <Entypo name="cross" size={20} color="#7FB8E1" />
        </TouchableOpacity>
      </View>
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
  editionSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    position: "absolute",
    right: 12,
    top: 3,
  },
  deleteButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f7f5f5",
  },
});
