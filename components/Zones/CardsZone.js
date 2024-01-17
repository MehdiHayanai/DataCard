import * as React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import DataCardObject from '../ui/DataCardObject';

const experiences = [
    { id: "0", name: "Humidity", icon: require('../../assets/experienceIcons/humidite.png'), color:"#C2FEFE" },
    { id: "1", name: "Temperature", icon: require('../../assets/experienceIcons/temperature.png'), color:"#FD9093" },
    { id: "2", name: "Contact", icon: require('../../assets/experienceIcons/contact.png'), color:"#C3FFDD" },
    { id: "3", name: "Gas", icon: require('../../assets/experienceIcons/gaz.png'), color:"#E4C2F6" },
    { id: "4", name: "Orientation", icon: require('../../assets/experienceIcons/orientation.png'), color:"#C2CAFC" },
    { id: "6", name: "Force", icon: require('../../assets/experienceIcons/force.png'), color:"#CFF380" },
    { id: "5", name: "Brightness", icon: require('../../assets/experienceIcons/luminosite.png'), color:"#C2FEFE" },
    { id: "7", name: "Elevation", icon: require('../../assets/experienceIcons/elevation.png'), color:"#82B4DD" },
    { id: "8", name: "Color", icon: require('../../assets/experienceIcons/color.png'), color:"#8CE7D4" },
    { id: "9", name: "Position", icon: require('../../assets/experienceIcons/position.png'), color:"#C2CAFC" },
    { id: "10", name: "Proximity", icon: require('../../assets/experienceIcons/proximite.png'), color:"#C2FEFE" },
    { id: "11", name: "Sound", icon: require('../../assets/experienceIcons/son.png'), color:"#E9CF36" },
    { id: "12", name: "Vibration", icon: require('../../assets/experienceIcons/vibration.png'), color:"#82B4DD" },
    { id: "13", name: "Speed", icon: require('../../assets/experienceIcons/vitesse.png'), color:"#8CE7D4" },
  ];


const CardsZone = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.experienceView}>
        {
          experiences.map((item) => (
            <DataCardObject key={item.id} item={item}  navigation={navigation}/>
          ))
        }
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
    alignItems: "center",
  },
});

export default CardsZone;
