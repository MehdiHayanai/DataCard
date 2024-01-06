import { style } from "deprecated-react-native-prop-types/DeprecatedViewPropTypes";
import React, {useState, useEffect} from "react";
import {StyleSheet, SafeAreaView, View, Text, Dimensions} from "react-native";
import Plotly from "react-native-plotly";

const words = [
    {
      id: "0",
      experience: "Trust",
      definition: "Confiance: La confiance est le sentiment de fiabilité et de crédibilité envers quelqu'un ou quelque chose."
    },
    {
      id: "1",
      experience: "Comfort",
      definition: "Confort: Le confort représente le sentiment de bien-être et de détente physique ou psychologique."
    },
    {
      id: "2",
      experience: "Fear",
      definition: "Peur: La peur est une émotion ressentie face à une menace, un danger ou quelque chose d'inconnu."
    },
    {
      id: "3",
      experience: "Control",
      definition: "Contrôle: Le contrôle implique le pouvoir de diriger, réguler ou influencer une situation ou un événement."
    },
    {
      id: "4",
      experience: "Efficiency",
      definition: "Efficacité: L'efficacité est la capacité à atteindre un objectif ou produire un résultat avec le minimum de ressources utilisées."
    },
    {
      id: "5",
      experience: "Learnability",
      definition: "Facilité d'apprentissage: La facilité d'apprentissage désigne la facilité avec laquelle on peut acquérir de nouvelles compétences ou connaissances."
    },
    {
      id: "6",
      experience: "Ease of use",
      definition: "Facilité d'utilisation: La facilité d'utilisation indique la simplicité et la praticité d'utilisation d'un produit ou d'un système."
    },
    {
      id: "7",
      experience: "Stress",
      definition: "Stress: Le stress est une réponse physique ou émotionnelle à une pression ou à une situation difficile."
    },
    {
      id: "8",
      experience: "Intuitivity",
      definition: "Intuitivité: L'intuitivité se rapporte à la facilité de compréhension ou d'utilisation d'une chose sans besoin d'explications complexes."
    },
    {
      id: "9",
      experience: "Performance",
      definition: "Performance: La performance représente la qualité d'exécution ou de fonctionnement d'une personne, d'un produit ou d'un système."
    },
    {
      id: "10",
      experience: "Reliability",
      definition: "Fiabilité: La fiabilité est la capacité d'une personne ou d'un objet à maintenir des standards élevés de qualité et de performance de manière consistante."
    },
    {
      id: "11",
      experience: "Safety",
      definition: "Sécurité: La sécurité est l'état de protection contre les dangers, les risques ou les menaces pour éviter les dommages ou les blessures."
    }
  ];
  




export default DefinitionScreen = ({ navigation, route }) => {
    const currentDefinition = words.filter(word => word.id === route.params.definitionId[0])[0]
    // use filter to find the element with id === to rout.definitionID[0]
    console.log(currentDefinition)
    // set definition to the definition of the element
    // set the title to the experience of the element

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.textContainer}>

                {/* Title section */}
                <View style={styles.titleContainer}>
                    <Text style={styles.textTitle}>{currentDefinition.experience}</Text>
                </View>
                {/* Definition section */}
                <View style={styles.definitionContainer}>
                    <Text>{currentDefinition.definition}</Text>
                </View>
            </View>
              <Navigation active={"Expérience"} navigation={navigation}/>  
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecf0f1',
      padding: 0,
      margin: 0,
    },
    textContainer: {
        flex: 1,
    },
    titleContainer: {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    definitionContainer : {
        padding: 20,
        alignItems: "center",
        // justifyContent: "center",
        backgroundColor: "white",
        borderColor: "#c0c4c1",
        borderWidth: 1,
        margin: 20,
        height: 300,
    },
    textTitle : {
        color: "#82B4DD",
        fontWeight: "bold",
        fontSize: 25,
    },
    center: {
      margin: 0,
      flex: 1,
      display: "flex",
      alignItems: "center",
    }
  
  });