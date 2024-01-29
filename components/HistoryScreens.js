import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {
  getConfrontations,
  getProjects,
  deleteAllProjects,
  deleteAllConfrontations,
  deleteProjectById,
} from "../data/dataCatdDb";
import { useEffect, useState } from "react";
import { ProjectObject } from "./ui/ProjectObject";
import { Ionicons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";

export default HistoryScreens = ({ navigation, route }) => {
  const [projects, setProjects] = useState([]);
  const isFocused = useIsFocused();

  const showProjects = () => {
    getProjects()
      .then((data) => {
        console.log(data);
        setProjects(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const showConfrontations = () => {
    console.log("Test confrontation");

    getConfrontations()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const deleteAll = () => {
    deleteAllProjects()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
    deleteAllConfrontations()
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
    showProjects();
    showConfrontations();
  };

  const deleteProjectByIdFromHistory = (id) => {
    deleteProjectById(id)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
    showProjects();
  };

  useEffect(() => {
    showProjects();
    showConfrontations();
    if (isFocused) {
      console.log(route.params);
      if (route.params && route.params.reload) {
        showProjects();
      }
      // Your code here
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.projectContainer}>
        <Text style={styles.projectTitle}>Mes projets</Text>
        <View style={styles.flatListContainer}>
          <FlatList
            style={styles.projectList}
            data={projects}
            renderItem={({ item }) => (
              <ProjectObject
                item={item}
                navigation={navigation}
                deleteProjectByIdFromHistory={deleteProjectByIdFromHistory}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <View style={styles.commandesContainer}>
        <TouchableOpacity style={styles.button} onPress={showProjects}>
          <Ionicons name="refresh-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={showConfrontations}>
          <Ionicons name="bug" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={deleteAll}>
          <Ionicons name="trash" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  projectContainer: {
    flex: 1,
  },
  projectTitle: {
    fontSize: 24,
    fontFamily: "Roboto",
    color: "#7FB8E1",
    marginVertical: 16,
    textAlign: "center",
  },
  projectList: {},
  flatListContainer: {
    flex: 1,
    padding: 10,
  },
  commandesContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginVertical: 16,
  },
  button: {
    backgroundColor: "#7FB8E1",
    padding: 15,
    borderRadius: 50,
    marginHorizontal: 10,
    elevation: 1,
    width: 70,
    height: 70,
    shadowOffset: { width: 1, height: 1 },
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "Roboto",
    color: "#FFF",
    textAlign: "center",
  },
});
