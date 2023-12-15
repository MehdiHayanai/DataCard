import * as React from 'react';
import { View,SafeAreaView, Image, StyleSheet, Text } from 'react-native';
import { Header } from '@react-navigation/stack';
import {ElementZone} from "./ElementZone"
import {Navigation} from "./Navigation"

export default ExperienceScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
          <Header title={"Expérience"}/>
            <View style={styles.center}>
              <ElementZone/>
            </View>
          <Navigation active={"Expérience"} />  
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
    }
  
  });
  