import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  DeviceEventEmitter,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import ConfrontationObject from "../ui/ConfrontationObject";
import { useState } from "react";
import {
  StaticDataCards,
  StaticExperiences,
} from "../staticVariables/CommonVaribales";
import { insertProjectAndConfrontations } from "../../data/dataCatdDb";

// Définition du composant ProjectScreen
export default ProjectScreen = ({ navigation, route }) => {
  // Extraction des paramètres de l'objet route.params.item
  const { name, description, selectedDataCard, selectedExperience, fromDb } =
    route.params.item;
  // Initialisation des variables nécessaires pour les combinaisons
  const combinaisons = [];
  let combIndex = 0;

  if (!fromDb) {
    // Création des combinaisons entre les expériences et les cartes de données sélectionnées
    for (let i = 0; i < selectedExperience.length; i++) {
      for (let j = 0; j < selectedDataCard.length; j++) {
        combinaisons.push({
          id: combIndex,
          values: [selectedExperience[i], selectedDataCard[j]],
          confrontationText: "",
        });
        combIndex++;
      }
    }
  } else {
    let { confrontationData } = route.params.item;
    confrontationData.forEach((el) => {
      combinaisons.push({
        id: el.id,
        values: [el.experience_name, el.datacard_name],
        confrontationText: el.confrontation_content,
      });
    });
  }

  // Utilisation du hook d'état pour les combinaisons
  const [combinaisonsList, setCombinaisonsList] = useState(combinaisons);
  // Initialisation des états pour les informations du projet et le bouton de validation
  const [projectInformation, setProjectInformation] = useState({
    name: name,
    description: description,
    user_id: 1,
  });
  // Utilisation du hook d'état pour le bouton de validation (si false le boutton est activé, si true le bouton est désactivé pour éviter le doublon de soumission)
  const [validationButton, setValidationButton] = useState(false);

  // Fonction de gestion de la soumission du projet
  const handleSubmission = () => {
    //  desactivation du bouton de validation pour éviter le doublon de soumission
    setValidationButton(true);
    let confrontationDataHolder = [];

    // Transformation des combinaisons en données compréhensibles par la base de données
    combinaisonsList.forEach((el) => {
      let experienceId = StaticExperiences.find(
        (experience) => experience.experience === el.values[0]
      ).id;
      let dataCardId = StaticDataCards.find(
        (dataCard) => dataCard.name === el.values[1]
      ).id;
      let confrontationContent = el.confrontationText;
      confrontationDataHolder.push({
        project_experience_id: experienceId,
        project_datacard_id: dataCardId,
        confrontation_content: confrontationContent,
      });
    });

    // Appel à la fonction d'insertion du projet et des confrontations dans la base de données
    insertProjectAndConfrontations(projectInformation, confrontationDataHolder)
      .then(({ projectId, confrontationIds }) => {
        console.log("Insertion réussie du projet et des confrontations");
        console.log("ID du projet:", projectId);
        console.log("IDs des confrontations:", confrontationIds);
        // Redirection vers l'écran HistoriqueScreen après la soumission réussie
        navigation.reset({
          index: 0,
          routes: [{ name: "HistoriqueScreen" }],
        });
      })
      .catch((error) => {
        console.error(
          "Erreur lors de l'insertion du projet et des confrontations:",
          error
        );
      });
    setValidationButton(false);
  };

  // Ajout d'un écouteur d'événements pour la mise à jour des textes de confrontation
  DeviceEventEmitter.addListener("confrontation.data", (data) => {
    let combinaisonsListCopy = combinaisonsList;
    let editedElement = combinaisonsListCopy.find((el) => el.id === data.id);
    editedElement.confrontationText = data.confrontationText;
    setCombinaisonsList(combinaisonsListCopy);
  });

  // Rendu du composant
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.titleWrapper}>
          <Ionicons
            style={styles.icon}
            name="bulb-outline"
            size={24}
            color="#82B4DD"
          />
          <Text style={styles.title}>{name}</Text>
          {!fromDb && (
            <TouchableOpacity
              style={styles.validationButton}
              onPress={() => handleSubmission()}
              disabled={validationButton}
            >
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <MaterialCommunityIcons
                  name="check"
                  size={20}
                  color="#6759F4"
                />
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View
        style={[
          styles.titleContainer,
          { marginTop: -15, marginBottom: -10, padding: 15 },
        ]}
      >
        <Text style={styles.description}>
          <Text style={{ color: "#82B4DD" }}>Description: {"\n\n"}</Text>
          {"\t"}
          {description}.
        </Text>
      </View>
      <View style={styles.confrontationCenter}>
        <FlatList
          style={styles.confrontation}
          data={combinaisons}
          renderItem={({ item }) => (
            <ConfrontationObject
              key={item.id}
              item={item}
              fromDb={fromDb}
              navigation={navigation}
            />
          )}
          keyExtractor={(item) => item.id}
        />
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
    width: "100%",
    justifyContent: "space-between",
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
