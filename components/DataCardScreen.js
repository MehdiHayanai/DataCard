import * as React from 'react';
import { View,SafeAreaView, Image, StyleSheet, Text } from 'react-native';
import CardsZone from './Zones/CardsZone';

export default DataCardScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.center}>
                <CardsZone navigation={navigation}/>
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
    }
  
  });
  