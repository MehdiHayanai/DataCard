import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import {
  MultipleSelectList,
  SelectList,
} from "react-native-dropdown-select-list";
import {
  StaticDataCards,
  StaticExperiences,
} from "./staticVariables/CommonVaribales";

const data = [
  {
    key: "0",
    value: "Humidity",
    icon: require("../assets/experienceIcons/humidite.png"),
    color: "#C2FEFE",
  },
  {
    key: "1",
    value: "Temperature",
    icon: require("../assets/experienceIcons/temperature.png"),
    color: "#FD9093",
  },
  {
    key: "2",
    value: "Contact",
    icon: require("../assets/experienceIcons/contact.png"),
    color: "#C3FFDD",
  },
  {
    key: "3",
    value: "Gas",
    icon: require("../assets/experienceIcons/gaz.png"),
    color: "#E4C2F6",
  },
  {
    key: "4",
    value: "Orientation",
    icon: require("../assets/experienceIcons/orientation.png"),
    color: "#C2CAFC",
  },
  {
    key: "6",
    value: "Force",
    icon: require("../assets/experienceIcons/force.png"),
    color: "#CFF380",
  },
  {
    key: "5",
    value: "Brightness",
    icon: require("../assets/experienceIcons/luminosite.png"),
    color: "#C2FEFE",
  },
  {
    key: "7",
    value: "Elevation",
    icon: require("../assets/experienceIcons/elevation.png"),
    color: "#82B4DD",
  },
  {
    key: "8",
    value: "Color",
    icon: require("../assets/experienceIcons/color.png"),
    color: "#8CE7D4",
  },
  {
    key: "9",
    value: "Position",
    icon: require("../assets/experienceIcons/position.png"),
    color: "#C2CAFC",
  },
  {
    key: "10",
    value: "Proximity",
    icon: require("../assets/experienceIcons/proximite.png"),
    color: "#C2FEFE",
  },
  {
    key: "11",
    value: "Sound",
    icon: require("../assets/experienceIcons/son.png"),
    color: "#E9CF36",
  },
  {
    key: "12",
    value: "Vibration",
    icon: require("../assets/experienceIcons/vibration.png"),
    color: "#82B4DD",
  },
  {
    key: "13",
    value: "Speed",
    icon: require("../assets/experienceIcons/vitesse.png"),
    color: "#8CE7D4",
  },
];
const words = [
  {
    key: "0",
    value: "Trust",
    definition:
      "Confiance: La confiance est le sentiment de fiabilité et de crédibilité envers quelqu'un ou quelque chose.",
  },
  {
    key: "1",
    value: "Comfort",
    definition:
      "Confort: Le confort représente le sentiment de bien-être et de détente physique ou psychologique.",
  },
  {
    key: "2",
    value: "Fear",
    definition:
      "Peur: La peur est une émotion ressentie face à une menace, un danger ou quelque chose d'inconnu.",
  },
  {
    key: "3",
    value: "Control",
    definition:
      "Contrôle: Le contrôle implique le pouvoir de diriger, réguler ou influencer une situation ou un événement.",
  },
  {
    key: "4",
    value: "Efficiency",
    definition:
      "Efficacité: L'efficacité est la capacité à atteindre un objectif ou produire un résultat avec le minimum de ressources utilisées.",
  },
  {
    key: "5",
    value: "Learnability",
    definition:
      "Facilité d'apprentissage: La facilité d'apprentissage désigne la facilité avec laquelle on peut acquérir de nouvelles compétences ou connaissances.",
  },
  {
    key: "6",
    value: "Ease of use",
    definition:
      "Facilité d'utilisation: La facilité d'utilisation indique la simplicité et la praticité d'utilisation d'un produit ou d'un système.",
  },
  {
    key: "7",
    value: "Stress",
    definition:
      "Stress: Le stress est une réponse physique ou émotionnelle à une pression ou à une situation difficile.",
  },
  {
    key: "8",
    value: "Intuitivity",
    definition:
      "Intuitivité: L'intuitivité se rapporte à la facilité de compréhension ou d'utilisation d'une chose sans besoin d'explications complexes.",
  },
  {
    key: "9",
    value: "Performance",
    definition:
      "Performance: La performance représente la qualité d'exécution ou de fonctionnement d'une personne, d'un produit ou d'un système.",
  },
  {
    key: "10",
    value: "Reliability",
    definition:
      "Fiabilité: La fiabilité est la capacité d'une personne ou d'un objet à maintenir des standards élevés de qualité et de performance de manière consistante.",
  },
  {
    key: "11",
    value: "Safety",
    definition:
      "Sécurité: La sécurité est l'état de protection contre les dangers, les risques ou les menaces pour éviter les dommages ou les blessures.",
  },
];

export default NewProjectScreen = ({ navigation }) => {
  const [name, onChangeName] = useState("Sac à dos de randonnée");
  const [description, onChangeDescription] = useState(
    "sac à dos intelligent munis de capteurs pour aider les randonneurs"
  );

  const [selectedDataCard, setSelectedDataCard] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState([]);
  const [errorValue, setErrorValue] = useState(false);
  const [ErrorMessages, OnChangeErrorMessgaes] = useState({
    name: "",
    description: "",
    selectedDataCard: "",
    selectedExperience: "",
  });

  const resetValues = () => {
    onChangeName("");
    onChangeDescription("");
    setSelectedDataCard([]);
    setSelectedExperience([]);
    OnChangeErrorMessgaes({
      name: "",
      description: "",
      selectedDataCard: "",
      selectedExperience: "",
    });
  };

  const InputVerification = () => {
    const tmpErrorValues = {
      name: "",
      description: "",
      selectedDataCard: "",
      selectedExperience: "",
    };
    let error = false;

    if (name.length < 3) {
      tmpErrorValues.name =
        "Le nom du projet doit contenir au moins 3 caractères";
      error = true;
    }
    if (name.length > 25) {
      tmpErrorValues.name =
        "Le nom du projet doit contenir au maximum 25 caractères";
      error = true;
    }
    if (selectedDataCard.length < 1) {
      tmpErrorValues.selectedDataCard =
        "Veuillez choisir au moins une data card";
      error = true;
    }
    if (selectedExperience.length < 1) {
      tmpErrorValues.selectedExperience =
        "Veuillez choisir au moins une expérience";
      error = true;
    }

    OnChangeErrorMessgaes(tmpErrorValues);
    setErrorValue(error);

    if (!error) {
      // resetValues();
      const projectInformation = {
        name: name,
        description: description,
        selectedDataCard: selectedDataCard,
        selectedExperience: selectedExperience,
      };
      navigation.navigate("ProjectScreen", { item: projectInformation });
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.center}>
          {/* text Zone */}
          <View style={[styles.formElementContainer]}>
            <Text style={[styles.fieldLabel]}>Nom du projet *</Text>
            <TextInput
              style={[
                styles.input,
                ErrorMessages.name !== "" ? styles.errorBorder : null,
                { height: 40 },
              ]}
              onChangeText={onChangeName}
              value={name}
              placeholder="Project name"
            />
            <View style={styles.errorMessageContainer}>
              <Text style={styles.errorMessage}> {ErrorMessages.name}</Text>
            </View>
          </View>
          <View style={styles.formElementContainer}>
            <Text style={styles.fieldLabel}>Description du projet </Text>
            <TextInput
              style={[
                styles.input,
                ErrorMessages.description !== "" ? styles.errorBorder : null,
                { textAlignVertical: "top" },
              ]}
              onChangeText={onChangeDescription}
              value={description}
              placeholder="Description"
              multiline={true}
              numberOfLines={3}
            />
            <View style={styles.errorMessageContainer}>
              <Text style={styles.errorMessage}>
                {" "}
                {ErrorMessages.description}
              </Text>
            </View>
          </View>
          <View style={styles.formElementContainer}>
            <Text style={styles.fieldLabel}>Data card *</Text>
            <View style={styles.multiSelectContainer}>
              <MultipleSelectList
                setSelected={(val) => setSelectedDataCard(val)}
                data={data}
                save="value"
                labelStyles={{
                  color: "#82B4DD",
                }}
                badgeStyles={{
                  backgroundColor: "#82B4DD",
                }}
                onSelect={() => console.log()}
                label="Categories"
                placeholder="Data cards"
                boxStyles={[
                  { borderColor: "#c0c4c1", borderWidth: 1, borderRadius: 5 },
                  ErrorMessages.selectedDataCard !== ""
                    ? styles.errorBorder
                    : null,
                ]}
              />
            </View>
            <View style={styles.errorMessageContainer}>
              <Text style={styles.errorMessage}>
                {" "}
                {ErrorMessages.selectedDataCard}
              </Text>
            </View>
          </View>
          <View style={styles.formElementContainer}>
            <Text style={styles.fieldLabel}>Expérience *</Text>
            <View style={styles.multiSelectContainer}>
              <MultipleSelectList
                setSelected={(val) => setSelectedExperience(val)}
                data={words}
                placeholder="Expériences"
                save="value"
                labelStyles={{
                  color: "#82B4DD",
                }}
                badgeStyles={{
                  backgroundColor: "#82B4DD",
                }}
                onSelect={() => console.log()}
                label="Categories"
                boxStyles={[
                  { borderColor: "#c0c4c1", borderWidth: 1, borderRadius: 5 },
                  ErrorMessages.selectedExperience !== ""
                    ? styles.errorBorder
                    : null,
                ]}
              />
              <View style={styles.errorMessageContainer}>
                <Text style={styles.errorMessage}>
                  {" "}
                  {ErrorMessages.selectedExperience}
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={[
              styles.newProjectButton,
              errorValue ? styles.errorColor : styles.normalColor,
            ]}
            onPress={InputVerification}
          >
            <Text style={styles.newProjectText}>Valider</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    marginVertical: 10,
  },
  center: {
    margin: 0,
    flex: 1,
    display: "flex",
    alignItems: "center",
  },
  ScrollView: {
    flex: 1,
  },
  formElementContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: "white",
    borderColor: "#c0c4c1",
    borderWidth: 1,
    borderRadius: 5,
    width: 350,
    elevation: 2,
    shadowOffset: { width: 5, height: 5 },
  },
  fieldLabel: {
    color: "#82B4DD",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 10,
  },
  errorMessage: {
    color: "tomato",
    fontSize: 12,
    marginBottom: 10,
  },
  errorMessageContainer: {
    alignItems: "center",
  },
  multiSelectContainer: {
    padding: 10,
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
    width: 300,
    borderRadius: 5,
    borderColor: "#c0c4c1",
  },
  errorBorder: {
    borderColor: "tomato",
  },
  newProjectButton: {
    alignItems: "center",
    padding: 15,
    width: 200,
    margin: 10,
    borderRadius: 5,
    elevation: 5,
    shadowOffset: { width: 5, height: 5 },
  },
  errorColor: {
    backgroundColor: "tomato",
  },
  normalColor: {
    backgroundColor: "#6759F4",
  },
  newProjectText: {
    color: "white",
    fontSize: 15,
  },
});
