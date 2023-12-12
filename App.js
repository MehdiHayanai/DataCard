import { Text, SafeAreaView, StyleSheet, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import Header from "./components/Header";
import Navigation from "./components/Navigation"
import ExperienceZone from "./components/ExperienceZone"
import ElementZone from "./components/ElementZone"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stakc  = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        {/* <Header title={"Expérience"}/> */}
        {/* <View style={styles.center}>
          <ElementZone/>
        </View>
        <Navigation active={"Expérience"} />  */}
        <Header title={"DataCard test"}/>
        <View style={styles.center}>
          {/* <ExperienceZone/> */}
          <ElementZone/>

        </View>
        <Navigation active={"Datacard"}/> 

      </SafeAreaView>
    </NavigationContainer>
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
