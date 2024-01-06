import * as React from 'react';
import { View,SafeAreaView, Image, StyleSheet, Text } from 'react-native';
import Navigation from './Navigation';
import ElementZone from './Zones/ExperienceZone';

export default ProjectScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.center}>
              <ElementZone navigation={navigation}/>
            </View>
          <Navigation active={"Expérience"} navigation={navigation}/>  
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
  