import React, {useState, useEffect} from "react";
import { View,SafeAreaView, ScrollView , Image, StyleSheet, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Navigation from './Navigation';
import { MultipleSelectList, SelectList } from 'react-native-dropdown-select-list'


export default NewProjectScreen = ({navigation}) => {
    const [text, onChangeText] = useState('');
    const [description, onChangeDescription] = useState('');
    const [selectedDataCard, setSelectedDataCard] = useState([]);
    const [selectedExperience, setSelectedExperience] = useState([]);
    const data = [
        { key: "0", value: "Humidity", icon: require('../assets/experienceIcons/humidite.png'), color:"#C2FEFE" },
        { key: "1", value: "Temperature", icon: require('../assets/experienceIcons/temperature.png'), color:"#FD9093" },
        { key: "2", value: "Contact", icon: require('../assets/experienceIcons/contact.png'), color:"#C3FFDD" },
        { key: "3", value: "Gas", icon: require('../assets/experienceIcons/gaz.png'), color:"#E4C2F6" },
        { key: "4", value: "Orientation", icon: require('../assets/experienceIcons/orientation.png'), color:"#C2CAFC" },
        { key: "6", value: "Force", icon: require('../assets/experienceIcons/force.png'), color:"#CFF380" },
        { key: "5", value: "Brightness", icon: require('../assets/experienceIcons/luminosite.png'), color:"#C2FEFE" },
        { key: "7", value: "Elevation", icon: require('../assets/experienceIcons/elevation.png'), color:"#82B4DD" },
        { key: "8", value: "Color", icon: require('../assets/experienceIcons/color.png'), color:"#8CE7D4" },
        { key: "9", value: "Position", icon: require('../assets/experienceIcons/position.png'), color:"#C2CAFC" },
        { key: "10", value: "Proximity", icon: require('../assets/experienceIcons/proximite.png'), color:"#C2FEFE" },
        { key: "11", value: "Sound", icon: require('../assets/experienceIcons/son.png'), color:"#E9CF36" },
        { key: "12", value: "Vibration", icon: require('../assets/experienceIcons/vibration.png'), color:"#82B4DD" },
        { key: "13", value: "Speed", icon: require('../assets/experienceIcons/vitesse.png'), color:"#8CE7D4" },
      ];
      const words = [
        {
          key: "0",
          value: "Trust",
          definition: "Confiance: La confiance est le sentiment de fiabilité et de crédibilité envers quelqu'un ou quelque chose."
        },
        {
          key: "1",
          value: "Comfort",
          definition: "Confort: Le confort représente le sentiment de bien-être et de détente physique ou psychologique."
        },
        {
          key: "2",
          value: "Fear",
          definition: "Peur: La peur est une émotion ressentie face à une menace, un danger ou quelque chose d'inconnu."
        },
        {
          key: "3",
          value: "Control",
          definition: "Contrôle: Le contrôle implique le pouvoir de diriger, réguler ou influencer une situation ou un événement."
        },
        {
          key: "4",
          value: "Efficiency",
          definition: "Efficacité: L'efficacité est la capacité à atteindre un objectif ou produire un résultat avec le minimum de ressources utilisées."
        },
        {
          key: "5",
          value: "Learnability",
          definition: "Facilité d'apprentissage: La facilité d'apprentissage désigne la facilité avec laquelle on peut acquérir de nouvelles compétences ou connaissances."
        },
        {
          key: "6",
          value: "Ease of use",
          definition: "Facilité d'utilisation: La facilité d'utilisation indique la simplicité et la praticité d'utilisation d'un produit ou d'un système."
        },
        {
          key: "7",
          value: "Stress",
          definition: "Stress: Le stress est une réponse physique ou émotionnelle à une pression ou à une situation difficile."
        },
        {
          key: "8",
          value: "Intuitivity",
          definition: "Intuitivité: L'intuitivité se rapporte à la facilité de compréhension ou d'utilisation d'une chose sans besoin d'explications complexes."
        },
        {
          key: "9",
          value: "Performance",
          definition: "Performance: La performance représente la qualité d'exécution ou de fonctionnement d'une personne, d'un produit ou d'un système."
        },
        {
          key: "10",
          value: "Reliability",
          definition: "Fiabilité: La fiabilité est la capacité d'une personne ou d'un objet à maintenir des standards élevés de qualité et de performance de manière consistante."
        },
        {
          key: "11",
          value: "Safety",
          definition: "Sécurité: La sécurité est l'état de protection contre les dangers, les risques ou les menaces pour éviter les dommages ou les blessures."
        }
      ];
    
    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView style={styles.ScrollView}>
                <View style={styles.center}>
                <View style={styles.formElementContainer}>
                    <Text style={styles.fieldLabel}>Nom du projet</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Project name"
                    />
                </View>
                <View style={styles.formElementContainer}>
                    <Text style={styles.fieldLabel}>Description du projet</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeDescription}
                        value={description}
                        placeholder="Description"
                    />
                </View>
                <View style={styles.formElementContainer}>
                    <Text style={styles.fieldLabel}>Data card</Text>
                    <View style={styles.multiSelectContainer}>
                    <MultipleSelectList 
                        setSelected={(val) => setSelectedDataCard(val)} 
                        data={data} 
                        save="value"
                        onSelect={() => console.log()} 
                        label="Categories"
                        boxStyles={{borderColor: "#c0c4c1", borderWidth: 1, borderRadius: 5,}}
                        maxHeight={200}
                    />
                    </View>
                </View>
                <View style={styles.formElementContainer}>
                    <Text style={styles.fieldLabel}>Expérience </Text>
                    <View style={styles.multiSelectContainer}>
                    <MultipleSelectList 
                        setSelected={(val) => setSelectedExperience(val)} 
                        data={words} 
                        save="value"
                        onSelect={() => console.log()} 
                        label="Categories"
                        boxStyles={{borderColor: "#c0c4c1", borderWidth: 1, borderRadius: 5,}}
                        maxHeight={200}
                    />
                    </View>
                </View>
                <TouchableOpacity style={styles.newProjectButton}>
                    <Text style={styles.newProjectText}>Valider</Text>
                </TouchableOpacity>

                </View>
                <Navigation active={"Projet"} navigation={navigation}/>
            </ScrollView>
        </KeyboardAvoidingView>

    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      padding: 0,
      margin: 0,
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
    },
    fieldLabel: {
        color: "#82B4DD",
        fontWeight: "bold",
        fontSize: 15,
        marginBottom: 10,
    },
    multiSelectContainer: {
        padding: 10,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "white",
        width: 300,
        borderRadius: 5,
        borderColor: "#c0c4c1",
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
    }
  
  });
  