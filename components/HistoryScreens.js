import * as React from 'react';
import { View,SafeAreaView, Image, StyleSheet, Text, TouchableOpacity, Pressable, FlatList } from 'react-native';
import { getConfrontations, getProjects, deleteAllProjects, deleteAllConfrontations} from '../data/dataCatdDb';

const projectView = (project) => {
  return (
    <View style={styles.projectContainertest}>
      <Text>
        {project.name}
      </Text>
    </View>
  );
}

export default HistoryScreens = ({navigation}) => {
  const [projects, setProjects] = React.useState([]);

    const showProjects = () => {
      console.log("Test");
      getProjects().then(data => {
        console.log(data);
        setProjects(data);
      }).catch(error => {
        console.error(error);
      });
    }

    const showConfrontations = () => {
      console.log("Test confrontation");

      getConfrontations().then(data => {
        console.log(data);
      }).catch(error => {
        console.error(error);
      });
    }
    const deleteAll = () => {
      deleteAllProjects().then(data => {
        console.log(data);
      }).catch(error => {
        console.error(error);
      });
      deleteAllConfrontations().then(data => {
        console.log(data);
      }).catch(error => {
        console.error(error);
      });
      showProjects();
      showConfrontations();
    }
   
    React.useEffect(() => {
      showProjects();
      showConfrontations();
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.center}>
                <Text>
                  commandes
                </Text>
                <View style={styles.buttonView}>
                  <TouchableOpacity style={styles.button} onPress={showProjects}>
                    <Text>
                      project
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={showConfrontations}>
                    <Text>
                      Confrontation
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={deleteAll}>
                    <Text>
                      Reset db
                    </Text>
                  </TouchableOpacity>
                </View>
            <View style={styles.projectView}>
              <Text>
                Projects
              </Text>
              <FlatList  
                style={styles.confrontation}    
                data={projects}
                renderItem={({item}) => projectView(item)}
                keyExtractor={(item) => item.id}
              />
            </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecf0f1',
      padding: 0,
      margin: 0,
    },
    center: {
      margin: 0,
      display: "flex",
      alignItems: "center",
    },
    projectContainer: {
      flex: 1,
      margin: 20,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5,
    },
    newProjectButton: {
        alignItems: "center",
        backgroundColor: "#6759F4",
        padding: 15,
        width: 200,
        margin: 10,
        borderRadius: 5,
    },
    newProjectText: {
        color: "white",
        fontSize: 15,
    },
    buttonView: {
      flexDirection: "row",
      flex: 2,
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#82B4DD",
      margin: 10,
      borderRadius: 5,
      height: 50,
      width: 100,
    },
    projectView :{
      marginTop: 70,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5,
    },
    projectContainertest: {
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5,
      borderWidth: 1,
      borderColor: "#82B4DD",
      backgroundColor: "white",
      width: 250,
      padding: 30,
    }
    
  });
  