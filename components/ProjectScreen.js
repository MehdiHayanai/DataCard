import * as React from 'react';
import { View,SafeAreaView, Image, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import ExperienceObject from './ui/ExperienceObject';
import DataCardObject from './ui/DataCardObject';

const experiences = [
  { 
    id: "0",
    name: "Trust", 
    color:"#FFF",
    definition: "Confiance: La confiance est le sentiment de fiabilité et de crédibilité envers quelqu'un ou quelque chose.",
    experience: "Trust",  
  },
  { 
    id: "1",
    name: "Comfort", 
    color:"#FFF",
    definition: "Confort: Le confort représente le sentiment de bien-être et de détente physique ou psychologique.",
    experience: "Comfort",  
  },
  { 
    id: "2",
    name: "Fear", 
    color:"#FFF",
    definition: "Peur: La peur est une émotion ressentie face à une menace, un danger ou quelque chose d'inconnu.",
    experience: "Fear",
  },
  { id: "3",
    name: "Control", 
    color:"#FFF",
    definition: "Contrôle: Le contrôle implique le pouvoir de diriger, réguler ou influencer une situation ou un événement.",
    experience: "Control",
  },
  { id: "4",
    name: "Effi\nciency", 
    color:"#FFF",
    definition: "Efficacité: L'efficacité est la capacité à atteindre un objectif ou produire un résultat avec le minimum de ressources utilisées.",
    experience: "Efficiency",
  },
  { id: "6",
    name: "Learn\nability", 
    color:"#FFF",
    definition: "Facilité d'apprentissage: La facilité d'apprentissage désigne la facilité avec laquelle on peut acquérir de nouvelles compétences ou connaissances.",
    experience: "Learnability",
  },
  { id: "5",
    name: "Ease of use", 
    color:"#FFF",
    definition: "Facilité d'utilisation: La facilité d'utilisation indique la simplicité et la praticité d'utilisation d'un produit ou d'un système.",
    experience: "Ease of use",
  },
  { id: "7",
    name: "Stress", 
    color:"#FFF",
    definition: "Stress: Le stress est une réponse physique ou émotionnelle à une pression ou à une situation difficile.",
    experience: "Stress",
  },
  { id: "8",
    name: "Intuiti\nvity", 
    color:"#FFF",
    definition: "Intuitivité: L'intuitivité se rapporte à la facilité de compréhension ou d'utilisation d'une chose sans besoin d'explications complexes.",
    experience: "Intuitivity",
  },
  { id: "9",
    name: "Perfor\nmance", 
    color:"#FFF",
    definition: "Performance: La performance représente la qualité d'exécution ou de fonctionnement d'une personne, d'un produit ou d'un système.",
    experience: "Performance",
  },
  { id: "10",
    name: "Relia\nbility", 
    color:"#FFF",
    definition: "Fiabilité: La fiabilité est la capacité d'une personne ou d'un objet à maintenir des standards élevés de qualité et de performance de manière consistante.",
    experience: "Reliability",
  },
  { id: "11",
    name: "Safety", 
    color:"#FFF",
    definition: "Sécurité: La sécurité est l'état de protection contre les dangers, les risques ou les menaces pour éviter les dommages ou les blessures.",
    experience: "Safety",
  },
  
];
const datacards = [
  { id: "0", name: "Humidity", icon: require('../assets/experienceIcons/humidite.png'), color:"#C2FEFE" },
  { id: "1", name: "Temperature", icon: require('../assets/experienceIcons/temperature.png'), color:"#FD9093" },
  { id: "2", name: "Contact", icon: require('../assets/experienceIcons/contact.png'), color:"#C3FFDD" },
  { id: "3", name: "Gas", icon: require('../assets/experienceIcons/gaz.png'), color:"#E4C2F6" },
  { id: "4", name: "Orientation", icon: require('../assets/experienceIcons/orientation.png'), color:"#C2CAFC" },
  { id: "6", name: "Force", icon: require('../assets/experienceIcons/force.png'), color:"#CFF380" },
  { id: "5", name: "Brightness", icon: require('../assets/experienceIcons/luminosite.png'), color:"#C2FEFE" },
  { id: "7", name: "Elevation", icon: require('../assets/experienceIcons/elevation.png'), color:"#82B4DD" },
  { id: "8", name: "Color", icon: require('../assets/experienceIcons/color.png'), color:"#8CE7D4" },
  { id: "9", name: "Position", icon: require('../assets/experienceIcons/position.png'), color:"#C2CAFC" },
  { id: "10", name: "Proximity", icon: require('../assets/experienceIcons/proximite.png'), color:"#C2FEFE" },
  { id: "11", name: "Sound", icon: require('../assets/experienceIcons/son.png'), color:"#E9CF36" },
  { id: "12", name: "Vibration", icon: require('../assets/experienceIcons/vibration.png'), color:"#82B4DD" },
  { id: "13", name: "Speed", icon: require('../assets/experienceIcons/vitesse.png'), color:"#8CE7D4" },
];

const Confrontation = ({values, navigation}) => {
  const experience = experiences.find((item) => item.experience === values[0]);
  const datacard = datacards.find((item) => item.name === values[1]);
  
  return (
    <View style={styles.confrontationContainer}>
        <ExperienceObject key={experience.id} item={experience} navigation={navigation}/>
        <Entypo name="cross" size={30} color="#7FB8E1" />
        <DataCardObject key={datacard.id + "dataCard"} item={datacard} navigation={navigation}/>
        <TouchableOpacity style={styles.nextButton} onPress={() => console.log("Pressed")}>
          <Ionicons name="chevron-forward-outline" size={30} color="white" />
        </TouchableOpacity>
    </View>
  );
}


export default ProjectScreen = ({navigation, route}) => {
  const {name, description, selectedDataCard, selectedExperience} = route.params.item;
  const combinaisons = [];
  let combIndex = 0;

  for (let i = 0; i < selectedExperience.length; i++) {
    for (let j = 0; j < selectedDataCard.length; j++) {
      combinaisons.push({"id": combIndex, "values": [selectedExperience[i], selectedDataCard[j]]});
      combIndex++;
    }
  }
  console.log("combinaisons: ", combinaisons);

    console.log("ProjectScreen props: ", name, description, selectedDataCard, selectedExperience);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
              <View style={styles.titleWrapper}>
                  <Ionicons style={styles.icon} name="bulb-outline" size={24} color="#82B4DD" />
                  <Text style={styles.title}>
                      {name}
                  </Text>
                  <View style={[styles.centerNumber]}>
                    <Text style={styles.numberOfCombinaisons}>
                      {combinaisons.length}
                    </Text>
                  </View>
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
                renderItem={({item}) => <Confrontation key={item.id} values={item.values} navigation={navigation}/>}
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
      justifyContent: "center",
    
    },
    icon: {
      marginRight: 10,
      padding: 5,
      borderRightColor: "#82B4DD",
      borderRightWidth: 1,
    },
    confrontationContainer: {
      flexDirection: "row",
      padding: 10,
      marginVertical: 2,
      marginHorizontal: 10,
      alignItems: "center",
      backgroundColor: "#F8F8F8",
      elevation:1,
      borderRadius: 10,
      shadowOffset: { width: 1, height: 1 },
    
    },
    confrontation: {
      marginVertical: 20,
      flex: 1,
    },
    numberOfCombinaisons: {
      fontSize: 15,
      fontFamily: "Roboto",
      marginLeft: 10,
      padding: 10,
      color: "#82B4DD",
      textAlign: "center",
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
    nextButton: {
      marginHorizontal: 10,
      backgroundColor: "#6759F4",
      borderRadius: 200,
      height: 50,
      width: 50,
      justifyContent: "center",
      alignItems: "center",
    }
    
  });
  