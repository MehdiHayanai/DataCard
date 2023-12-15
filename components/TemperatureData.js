import * as React from 'react';
import { View,SafeAreaView, Image, StyleSheet, Text } from 'react-native';
import GraphTest from './GraphTest';

export default TemperatureData = ({navigation}) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <GraphTest style={styles.center}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ecf0f1',
    },
    center: {
      margin: 0,
      flex: 1,
      display: "flex",
      alignItems: "center",
    }
  
  });