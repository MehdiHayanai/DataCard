import * as React from 'react';
import { View,SafeAreaView, Image, StyleSheet, Text } from 'react-native';


export default ProjectScreen = ({navigation, route}) => {
  const currentDefinition = route.params.item

    console.log("ProjectScreen props: ", currentDefinition);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.center}>
                <Text style={{fontSize: 30, fontWeight: "bold", margin: 10, color: "#82B4DD"}}>Projects Place Holder</Text>
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
    },
    newProjectText: {
        color: "white",
        fontSize: 15,
    }
    
  });
  