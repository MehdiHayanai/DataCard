import { View,SafeAreaView, Image, StyleSheet, Text, FlatList, TouchableOpacity, DeviceEventEmitter} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import ConfrontationObject from './ui/ConfrontationObject';
import { useEffect, useState } from 'react';
import { StaticDataCards, StaticExperiences } from './staticVariables/CommonVaribales';
import { insertConfrontation, insertProject, insertProjectAndConfrontations } from '../data/dataCatdDb';


export default ProjectScreen = ({navigation, route}) => {
  const {name, description, selectedDataCard, selectedExperience} = route.params.item;
  const combinaisons = [];
  let combIndex = 0;

  for (let i = 0; i < selectedExperience.length; i++) {
    for (let j = 0; j < selectedDataCard.length; j++) {
      combinaisons.push({"id": combIndex, "values": [selectedExperience[i], selectedDataCard[j]], "confrontationText": ""});
      combIndex++;
    }
  }
  const [combinaisonsList, setCombinaisonsList] = useState(combinaisons);
  const [confrontationData, setConfrontationData] = useState([]); // [experience, dataCard, text
  const [projectInformation, setProjectInformation] = useState({
    "name": name,
    "description": description,
    "user_id": 1,
  });
  

  const handleSubmission = () => {
    let confrontationDataHolder = [];
    combinaisonsList.forEach((el) => {
        let experienceId = StaticExperiences.find((experience) => experience.experience === el.values[0]).id;
        let dataCardId = StaticDataCards.find((dataCard) => dataCard.name === el.values[1]).id;
        let confrontationContent = el.confrontationText;
        confrontationDataHolder.push({"project_experience_id": experienceId, "project_datacard_id": dataCardId, "confrontation_content": confrontationContent});
    });

    insertProjectAndConfrontations(projectInformation, confrontationDataHolder)
    .then(({ projectId, confrontationIds }) => {
      console.log('Project and Confrontations insertion successful');
      console.log('Project ID:', projectId);
      console.log('Confrontation IDs:', confrontationIds);
    })
    .catch((error) => {
      console.error('Error inserting project and confrontations:', error);
    });


  }

  DeviceEventEmitter.addListener("confrontation.data", (data) => {
    let combinaisonsListCopy = combinaisonsList;
    let editedElement = combinaisonsListCopy.find((el) => el.id === data.id);
    editedElement.confrontationText = data.confrontationText;
    setCombinaisonsList(combinaisonsListCopy);
  });


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
              <View style={styles.titleWrapper}>
                  <Ionicons style={styles.icon} name="bulb-outline" size={24} color="#82B4DD" />
                  <Text style={styles.title}>
                      {name}
                  </Text>
                  <TouchableOpacity style={styles.validationButton} onPress={()=> handleSubmission()}>
                    <View style={{alignItems: "center", justifyContent: "center"}}>
                        <MaterialCommunityIcons name="check" size={20} color="#6759F4" />
                    </View>
                  </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.titleContainer, {marginTop: -15, marginBottom: -10, padding: 15}]}>

                <Text style={styles.description}>
                <Text style={{color: "#82B4DD"}}>
                  Description: {"\n\n"}
                </Text>
                    {"\t"}{description}.
                </Text>
            </View>
            <View style={styles.confrontationCenter}>
              <FlatList  
                style={styles.confrontation}    
                data={combinaisons}
                renderItem={({item}) => <ConfrontationObject key={item.id} item={item} navigation={navigation} />}
                keyExtractor={(item) => item.id}
              />

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
      flex: 1,
      display: "flex",
      alignItems: "center",
    },
    title: {
        fontSize: 18,
        fontFamily: "Roboto",
        margin: 10,
        color: "#7FB8E1",
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
    titleContainer: {
      flexDirection: "row",
      marginHorizontal: 30,
      paddingHorizontal: 10,
      marginVertical: 20,
      borderWidth: 1,
      borderColor: "#82B4DD",
      borderRadius: 2,
      backgroundColor: "white",
      
    },
    titleWrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      justifyItems: "stretch",    
    },
    icon: {
      marginRight: 10,
      padding: 5,
      borderRightColor: "#82B4DD",
      borderRightWidth: 1,
    },

    confrontation: {
      marginVertical: 20,
      flex: 1,
    },
    centerNumber: {
      alignItems: "center",
      justifyContent: "center",
      borderLeftColor: "#82B4DD",
      borderLeftWidth: 1,
      marginHorizontal: 5,
    },
    confrontationCenter: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    validationButton: {
      backgroundColor: "#FFF",
      borderWidth: 1,
      borderColor: "#6759F4",
      height: 40,
      width: 40,
      // borderRadius: 200,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 20,
    },
    
  });
  