import * as React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

    const experiences = [
        { id: "0", name: "Trust", icon: require('../assets/experienceIcons/humidite.png'), color:"#FFF" },
        { id: "1", name: "Comfort", icon: require('../assets/experienceIcons/temperature.png'), color:"#FFF" },
        { id: "2", name: "Fear", icon: require('../assets/experienceIcons/contact.png'), color:"#FFF" },
        { id: "3", name: "Control", icon: require('../assets/experienceIcons/gaz.png'), color:"#FFF" },
        { id: "4", name: "Effi\nciency", icon: require('../assets/experienceIcons/orientation.png'), color:"#FFF" },
        { id: "6", name: "Learn\nability", icon: require('../assets/experienceIcons/force.png'), color:"#FFF" },
        { id: "5", name: "Ease of use", icon: require('../assets/experienceIcons/luminosite.png'), color:"#FFF" },
        
        { id: "7", name: "Stress", icon: require('../assets/experienceIcons/elevation.png'), color:"#FFF" },
        { id: "8", name: "Intuiti\nvity", icon: require('../assets/experienceIcons/color.png'), color:"#FFF" },
        { id: "9", name: "Perfor\nmance", icon: require('../assets/experienceIcons/position.png'), color:"#FFF" },
        { id: "10", name: "Relia\nbility", icon: require('../assets/experienceIcons/proximite.png'), color:"#FFF" },
        { id: "11", name: "Safety", icon: require('../assets/experienceIcons/son.png'), color:"#FFF" },
        
      ];

const Experience = ({ item, navigation }) => {
  return (
    <TouchableOpacity style={[styles.experienceContainer, { backgroundColor: item.color }]} onPress={()=> navigation.navigate("DefinitionScreen",{ definitionId: [item.id] })}>
      <View style={styles.experience}>
        <Text style={styles.title}>
          {item.name}
        </Text>
 
      </View>
    </TouchableOpacity>
  );
};

export default ExperienceZone = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.experienceView}>
        {experiences.map((item) => (
          <Experience key={item.id} item={item} navigation={navigation}/>
        ))}
      </View>
      <View style={styles.dice}>
        <TouchableOpacity style={styles.diceContainer}>
        <Image
            source={require('../assets/snack-icon.png')}
            style={styles.diceLogo}
          />
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
  experienceContainer: {
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderWidth: 1,
    borderColor: '#000',
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 17,
    padding: 10,
    textTransform: "uppercase",
    

  },
  dice:{
    marginTop: 20,
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",

  },
  diceContainer: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: "#75C3AD",
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
  experience: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

