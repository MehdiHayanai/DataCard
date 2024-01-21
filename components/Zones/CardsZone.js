import * as React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import DataCardObject from '../ui/DataCardObject';
import { StaticDataCards } from '../staticVariables/CommonVaribales';


const CardsZone = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.experienceView}>
        <View style={styles.elemetnsCentering}>
          {
            StaticDataCards.map((item) => (
              <DataCardObject key={item.id} item={item}  navigation={navigation}/>
            ))
          }
        </View>
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
  elemetnsCentering: {
    flexDirection: 'row',
    maxWidth: 360,
    flexWrap: "wrap",
    // backgroundColor: "red",
  }
});

export default CardsZone;
