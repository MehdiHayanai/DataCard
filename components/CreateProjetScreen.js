import * as React from 'react';
import { View,SafeAreaView, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default ProjectScreen = ({navigation}) => {


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.center}>
              <View style={styles.projectContainer}>
                <Image source={require('../assets/ampoule.png')} style={{width: 200, height: 200, margin: 10}}/>
                <TouchableOpacity style={styles.newProjectButton} onPress={()=> navigation.push("NewProjectScreen")}>
                    <Text style={styles.newProjectText}>Nouveau Projet</Text>
                </TouchableOpacity>
              </View>
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
    projectContainer: {
      flex: 1,
      margin: 20,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 5,
    },
    newProjectButton: {
        alignItems: "center",
        backgroundColor: "#6759F4",
        padding: 15,
        width: 200,
        margin: 10,
        borderRadius: 5,
        elevation: 5,
        shadowOffset: { width: 5, height: 5 },
    },
    newProjectText: {
        color: "white",
        fontSize: 15,
    }

  });
  