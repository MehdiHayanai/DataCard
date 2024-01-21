import * as React from 'react';
import { View,SafeAreaView, Image, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ConfrontationObject from './ui/ConfrontationObject';



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
                renderItem={({item}) => <ConfrontationObject key={item.id} values={item.values} navigation={navigation}/>}
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

    
  });
  