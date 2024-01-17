import * as React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons  } from '@expo/vector-icons';
import ExperienceObject from '../ui/ExperienceObject';

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

const Experience = ({ item, navigation }) => {
  return (
<TouchableOpacity style={[styles.experienceContainer, { backgroundColor: item.color }]} onPress={()=> navigation.navigate("DefinitionScreen",{ item: [item] })}>
      <View style={styles.experience}>
        <Text style={styles.title}>
          {item.name}
        </Text>
 
      </View>
    </TouchableOpacity>
  );
};

export default ExperienceZone = ({navigation}) => {

  const randomExperience = () => {
    const random = Math.floor(Math.random() * experiences.length);
    navigation.navigate("DefinitionScreen",{ item: [experiences[random]] })
  }

  return (
    <View style={styles.container}>
      <View style={styles.experienceView}>
        {experiences.map((item) => (
          <ExperienceObject key={item.id} item={item} navigation={navigation}/>
        ))}
      </View>
      <View style={styles.dice}>
        <TouchableOpacity style={styles.diceContainer} onPress={() => randomExperience()}>
          <MaterialCommunityIcons name="cube-scan" size={50} color="#F8F8F8" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginHorizontal: "auto",

  },
  experienceView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: "wrap",
    margin:"auto",
    justifyContent: "center",
    alignItems: "center",
  },
  dice:{
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",

  },
  diceContainer: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "#82B4DD",
    alignItems: 'center',
    justifyContent: "center",
    padding: 20,
    elevation: 5, 
    shadowOffset: { width: -3, height: 6 },
  },
  diceLogo:{
    height: 60,
    width: 60,
  },
});

